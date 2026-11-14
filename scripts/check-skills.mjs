import { readFileSync, readdirSync, statSync } from 'node:fs';
import { basename, dirname, isAbsolute, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// This collection intentionally uses a small YAML subset: two JSON-quoted strings.
// Reject unsupported syntax instead of silently misreading richer YAML.
export function validateMetadata(text, folder) {
  const match = text.replaceAll('\r\n', '\n').match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!match) return ['Missing frontmatter'];
  const fields = {};
  const errors = [];
  for (const line of match[1].split('\n')) {
    const field = line.match(/^(name|description):\s*(".*")\s*$/);
    if (!field) {
      errors.push('Use single-line JSON-quoted name and description fields only');
      continue;
    }
    const [, key, value] = field;
    if (Object.hasOwn(fields, key)) errors.push(`Duplicate field: ${key}`);
    try {
      fields[key] = JSON.parse(value);
    } catch {
      errors.push(`Invalid quoted value: ${key}`);
    }
  }
  const name = fields.name ?? '';
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name) || name.length > 64) {
    errors.push('Invalid skill name');
  }
  if (name !== folder) errors.push('Skill name must match its folder');
  const description = fields.description ?? '';
  if (!description.trim() || description.length > 1024 || /[<>\r\n]/.test(description)) {
    errors.push('Description must be nonempty plain text of at most 1024 characters');
  }
  if (!text.slice(match[0].length).trim()) errors.push('Missing skill instructions');
  return errors;
}

function markdownFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (['.git', 'node_modules', '.tmp'].includes(entry.name) || entry.isSymbolicLink()) return [];
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) return markdownFiles(path);
    return entry.isFile() && entry.name.endsWith('.md') ? [path] : [];
  });
}

export function validateLinks(text, file, root) {
  const errors = [];
  // Inline links only; fenced examples are not actual documentation links.
  const prose = text.replace(/^(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1\s*$/gm, '');
  for (const match of prose.matchAll(/\[[^\]\n]*\]\(([^)\n]+)\)/g)) {
    const href = match[1].trim();
    if (/^(https?:|mailto:|#)/.test(href)) continue;
    let target;
    try {
      target = decodeURIComponent(href.split('#')[0]);
    } catch {
      errors.push(`Invalid link encoding: ${href}`);
      continue;
    }
    const path = resolve(dirname(file), target);
    const fromRoot = relative(root, path);
    if (isAbsolute(target) || fromRoot === '..' || fromRoot.startsWith('../')) {
      errors.push(`Link leaves the collection: ${href}`);
      continue;
    }
    try {
      if (!statSync(path).isFile()) errors.push(`Link is not a file: ${href}`);
    } catch {
      errors.push(`Missing linked file: ${href}`);
    }
  }
  return errors;
}

export function checkCollection(root) {
  const errors = [];
  let directories;
  try {
    directories = readdirSync(resolve(root, 'skills'), { withFileTypes: true })
      .filter((entry) => entry.isDirectory());
  } catch {
    return ['Missing skills directory'];
  }
  if (!directories.length) errors.push('Collection has no skills');
  for (const entry of directories) {
    const file = resolve(root, 'skills', entry.name, 'SKILL.md');
    try {
      for (const error of validateMetadata(readFileSync(file, 'utf8'), entry.name)) {
        errors.push(`${relative(root, file)}: ${error}`);
      }
    } catch {
      errors.push(`${relative(root, file)}: Cannot read skill entrypoint`);
    }
  }
  for (const file of markdownFiles(root)) {
    for (const error of validateLinks(readFileSync(file, 'utf8'), file, root)) {
      errors.push(`${relative(root, file)}: ${error}`);
    }
  }
  return errors;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
  const errors = checkCollection(root);
  if (errors.length) {
    console.error(errors.join('\n'));
    process.exitCode = 1;
  } else {
    console.log(`${basename(root)}: skill metadata and local Markdown file links passed`);
  }
}
