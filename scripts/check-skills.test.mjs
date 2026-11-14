import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { checkCollection, validateLinks, validateMetadata } from './check-skills.mjs';

const valid = '---\nname: "example"\ndescription: "Review a process: find the gaps."\n---\n# Example\nDo useful work.\n';

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), 'skill-check-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'skills', 'example'), { recursive: true });
  writeFileSync(join(root, 'skills', 'example', 'SKILL.md'), valid);
  return root;
}

test('accepts valid skill metadata including punctuation and CRLF', () => {
  assert.deepEqual(validateMetadata(valid, 'example'), []);
  assert.deepEqual(validateMetadata(valid.replaceAll('\n', '\r\n'), 'example'), []);
});

test('rejects absent, empty, mismatched, duplicate, and unsupported metadata', () => {
  const broken = [
    '# no frontmatter',
    valid.replace('"example"', '"different"'),
    valid.replace('name: "example"', 'name: "example"\nname: "example"'),
    valid.replace('description: "Review a process: find the gaps."', 'description: ""'),
    valid.replace('description: "Review a process: find the gaps."', 'description: >\n  folded text'),
    valid.replace('"example"', '"Example_Name"'),
    valid.replace('"example"', '"bad\\q"'),
    valid.slice(0, valid.indexOf('# Example')),
  ];
  for (const text of broken) assert.ok(validateMetadata(text, 'example').length > 0);
});

test('validates a complete collection', (t) => {
  assert.deepEqual(checkCollection(fixture(t)), []);
});

test('fails when an entrypoint or the skills directory is missing', (t) => {
  const root = fixture(t);
  rmSync(join(root, 'skills', 'example', 'SKILL.md'));
  assert.match(checkCollection(root).join('\n'), /Cannot read skill entrypoint/);
  rmSync(join(root, 'skills'), { recursive: true });
  assert.deepEqual(checkCollection(root), ['Missing skills directory']);
});

test('empty collection fails rather than reporting green', (t) => {
  const root = fixture(t);
  rmSync(join(root, 'skills', 'example'), { recursive: true });
  assert.deepEqual(checkCollection(root), ['Collection has no skills']);
});

test('resolves local links and ignores external links, anchors, and fenced examples', (t) => {
  const root = fixture(t);
  writeFileSync(join(root, 'notes here.md'), '# notes');
  const text = '[skill](skills/example/SKILL.md#example) [notes](notes%20here.md)\n'
    + '[web](https://example.org/missing) [anchor](#heading)\n'
    + '```md\n[example](missing.md)\n```\n';
  assert.deepEqual(validateLinks(text, join(root, 'README.md'), root), []);
});

test('broken, escaping, directory, and malformed links fail', (t) => {
  const root = fixture(t);
  const text = '[missing](missing.md) [outside](../secret.md) [absolute](/etc/passwd) '
    + '[directory](skills/example) [bad](%zz.md)';
  assert.equal(validateLinks(text, join(root, 'README.md'), root).length, 5);
});

test('checks links in skill references as well as the root README', (t) => {
  const root = fixture(t);
  mkdirSync(join(root, 'skills', 'example', 'references'));
  writeFileSync(join(root, 'skills', 'example', 'references', 'detail.md'), '[missing](absent.md)');
  assert.match(checkCollection(root).join('\n'), /references\/detail.md: Missing linked file/);
});
