# Baseline process

Use this to propose how work should happen, not just to audit the current setup. Software development is the default focus. These are defaults for the target workspace's process, not permission to change every repository you inspect.

In review mode, recommend missing practices. In build mode, implement the authorized scope and record remaining gaps. Preserve stricter requirements and identify conflicts with existing policies rather than silently changing them. Select actual commands from the target repo; label missing commands as work to implement, never as commands already available.

## Practices for every workspace

- **Define the result:** establish the request, acceptance criteria, authoritative inputs, and decisions that belong to a person before execution. Resolve uncertainties that could change the outcome; do not require a separate approval for an already authorized step.
- **Make knowledge reusable:** consult existing contracts, examples, and tools. Fix repeated confusion with a shared convention or helper where possible. Give volatile facts a source and verification date.
- **Keep work recoverable:** preserve existing work, save checkpoints, record unfinished steps and ownership, and make retries bounded. A saved checkpoint records progress, not new permission.
- **Check before handoff:** inspect the actual output against the criteria, preserve failures separately from explanations, and distinguish passed, failed, unrun, and unknown. Missing evidence is not success.
- **Close the loop:** deliver evidence the recipient can use, identify unresolved decisions, and fold recurring corrections into the workspace. Record important machine-checkable rules with their enforcement mechanism and owner; keep genuine human judgment explicit.

## Default software-development loop

Propose this loop even when a repository has no existing process. Adapt tools and test scope, not the need for meaningful evidence.

### 1. Scope the change

Identify the intended behavior, acceptance examples, affected flows, and failure modes. Read the relevant architecture, product contracts, and local skills. Reuse existing utilities and adapters; do not introduce another version of shared logic to finish one feature. Where a team uses an issue tracker, establish ownership and preserve work already claimed by others.

### 2. Write tests with the change

Require meaningful tests for new or changed executable behavior in the same change. Cover the normal outcome and relevant error, boundary, and authorization cases. For a bug fix, add a regression test that fails for the original defect and passes with the fix; demonstrate that when feasible in an isolated revision or fixture. If reproduction is unavailable, record the limitation and the strongest feasible verification.

Choose the cheapest test level that exercises the real contract: unit tests for decisions and transformations, integration tests for persistence and service boundaries, and browser tests for user interactions. For shared code, select affected behavior and callers, not only tests beside the edited file. Changes to setup, migrations, guards, and release scripts need their own relevant tests too.

Test observable outcomes against independent expectations. Do not duplicate the implementation in a test or substitute a heading-only smoke test for a complete user flow. For writes, verify persisted state where relevant. Coverage helps find omissions; retain an honest denominator and agree thresholds deliberately. A percentage cannot establish correctness. Test-first development can be a workspace choice; tests accompanying behavior changes are the baseline. Documentation-only or formatting-only changes do not need artificial unit tests.

### 3. Maintain code and test quality

Use the stack's formatter, linter, and type checker where available. Favor strict types, validated external inputs, explicit failures, and small coherent modules. Consider duplication, complexity, and unused-code checks where they address real maintenance problems; tune limits to the project instead of copying arbitrary numbers.

For browser tests, use stable semantic locators, await actions and assertions, and wait for observable state rather than arbitrary sleeps. Reject swallowed failures, focused tests, and unexplained skips in required suites. A deliberately scoped suite must not silently select zero tests. Preserve the original failure when triaging; do not change expectations merely to get green output.

### 4. Validate locally before pushing

Require relevant local tests and applicable static checks before each push. Provide a documented command and wire a pre-push hook where supported. Run focused checks while iterating; fix failures and rerun the affected checks and required local gate on the final files before pushing. A later edit invalidates earlier evidence for affected behavior.

For a small repo, default to the full credential-free suite before push. For a larger repo, define an explicit selection policy covering changed flows, shared dependents, and mandatory checks, with broader coverage in CI. Do not narrow an existing full-suite requirement just to make the workflow faster. Keep cheap compilation and test-discovery failures local even when the actual integration test needs remote infrastructure.

Make this loop reproducible with pinned runtimes, safe repeatable setup, and consistent local/CI commands. Keep live credentials, external writes, and deployment outside the default local gate. Missing prerequisites mean the check is unrun, not passed; repair safe local setup where feasible. If blocked, report it and follow the workspace's exception policy rather than bypassing checks or declaring readiness.

### 5. Use CI as a merge gate

For shared code repos, propose PRs and required CI checks protecting the integration branch. Reuse local validation and add the checks needing a controlled environment. Verify actual branch protection or rulesets and required status names; a workflow file or local hook alone does not protect main. Changing remote policy must be within the requested scope and authority.

Use draft PRs for unfinished work where supported; local checks precede marking ready. Record the behavior change, exact validation, and limits in the PR. Preserve the team's human-review policy. Automatic merging is optional and must wait for required checks on the current revision. Neither a prior green commit nor an empty/skipped job proves the change is ready.

### 6. Qualify delivery separately

Distinguish merge, staging acceptance, and production release. Qualify the exact artifact or revision, use isolated environments for mutable integration or load tests, and add performance and expensive acceptance checks at the earliest stage with enough fidelity. Keep release authorization, rollout checks, and recovery explicit; a merge alone does not grant permission to deploy or prove the user's work is complete. Use the [build guidance](build.md) to place checks by cost and fidelity.

## Prove the process itself works

Checks and hooks are code too. Exercise a known-invalid case through the same entrypoint, payload shape, and runtime the real workflow uses. Verify both rejection and useful diagnostics; a test against an impossible input can certify the wrong path. Keep tests isolated from live side effects.

Test-owned resources need exact creation records, failure-safe cleanup, and verified removal. Do not delete shared fixtures or conceal cleanup failures. Guard criteria must not be silently weakened by the agent whose work they evaluate; record intentional policy changes separately with their owner.

## Adapt to nontechnical deliverables

Keep the universal practices and replace software-specific mechanisms with ones that fit the output:

| Software practice | Nontechnical equivalent |
| --- | --- |
| Behavior and regression tests | Acceptance examples, known-bad artifacts, measurement or reconciliation checks |
| Local validation before push | Preview, render, export audit, or data check before sharing |
| PR and CI merge gate | A versioned handoff with automated checks and the appropriate person's acceptance |
| Staging and release qualification | An internal preview or sample delivery before the final client artifact |

Do not impose code coverage, Git, or CI on a designer's work just to match the template. Preserve unknown measurements, inspect actual renders, and leave aesthetic decisions to the designer. If the workspace also generates scripts, plugins, or automation, apply the software loop to that code while keeping the user's interaction in their own language.
