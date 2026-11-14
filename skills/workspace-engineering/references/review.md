# Review the workspace

Use the representative task to guide inspection. Do not read an entire repository or every transcript just because they exist. Start with entrypoint instructions, relevant skills, process docs, tool contracts, validation commands, hooks, release configuration, and recent evidence.

Assess the [baseline process](baseline.md) as defaults: test authoring, regression coverage, local validation, and merge checks. Read documented rationale before recommending policy changes. Separate defects from intentional exceptions and unknowns. Explicit contributor-enforced merge checks are a policy choice; unavailable branch-protection evidence is unknown, not automatically a gap. Preserve user exceptions and recommend changes within the requested scope.

## Inspect the seams

| Area | Questions that expose useful gaps |
| --- | --- |
| Role experience | Can the user request work in their own language? Do they have to understand implementation details to recover from an error? |
| Knowledge | Is there one authoritative place for facts and conventions? Do volatile facts carry a source, scope, and verification date? |
| Skills and rules | Are procedures discoverable when needed? Are important rules buried, duplicated, contradictory, or only aspirational? |
| Tools | Are inputs and outputs explicit? Do tools fail clearly? Are account, environment, and resource scope visible? |
| State | Can another session resume without treating a checkpoint as fresh approval? Are artifacts tied to the inputs and revision that produced them? |
| Feedback | Does the agent receive actionable failures early enough to fix them? Is there a bound on retries and repeated failures? |
| Delivery | Is completion defined by the recipient's acceptance criteria, rather than a successful command, merge, or pretty screenshot? |
| Ownership | Who owns criteria and exceptions? Can the agent editing work also quietly remove the checks judging it? |

## Follow a rule to its proof

For consequential rules, record:

`Intent → mechanism → wiring → failure signal → recovery → policy owner`

Check the implementation and its callers. For every project-owned check wired into a hook or CI, read its entrypoint and docs; when read-only and cheap, run it against a named integration-branch revision before judging it. If authorized and feasible, exercise isolated valid and invalid cases. Preserve raw results separately from interpretation; report unavailable credentials or unsafe execution as gaps.

Reproduce the gate's version, configuration, rule selection, exclusions, and tracked-file set; do not sweep in untracked directories or nested worktrees. State any difference next to the reported number. Report the coverage denominator, including counts of checked files and suppressed scope (exclude lists and inline markers), with suppression owners or unknown ownership, separately from violations.

Verify actual branch protection and required statuses. Sample recent merged PRs and record required-check and review states at merge, with revision and timestamp, as **Observed** evidence. Current settings or later reruns cannot establish those historical states; mark unavailable history **Unknown**.

Check rollout for hooks, tools, and local skills across fresh clones, existing clones, linked worktrees, repeated setup, and conflicting configuration. Inspect installation and upgrade paths; exercise safe disposable cases where feasible. Record tested contexts and remaining unknowns. A working installation in one checkout does not prove installation for every contributor; setup must preserve or explicitly reconcile existing configuration.

## Compare gate lists with what exists

When a required gate aggregates an enumerated list—job dependencies, a test matrix, path filters, or packages—diff it against all defined suites and code that should be covered, including directories containing tests. Report anything in neither the gate nor a documented exception. Recommend a self-check that fails when a new suite is not registered.

## Look for false confidence

- A tenant test changes the visible selection but never verifies the server request or returned tenant data.
- A test and implementation share the same incorrect assumption. Find an independent expected result: a known fixture, specification, measured dimension, or trusted service response.
- Missing, skipped, empty, or flaky results are presented as success.
- A helper prints an error but exits successfully, leaving its caller to continue.
- A check is claimed as enforced but its hook is uninstalled, its workflow never runs, or its remote status is not required by the stated policy.
- A local-only check is called ineffective without measuring drift on the integration branch. A clean run means the local gate is holding for that measured scope; report remote enforcement as optional insurance. Report measured violations and their count as **Observed**; an unrun check is **Unknown**, not evidence of drift.
- A guard checks a mutable working copy while the action operates on a different revision or artifact. For pre-push checks, unstaged fixes must not hide a failing outgoing commit; use the disposable-push proof in [build](build.md#verify-the-mechanism).
- A check is satisfied by suppressions, shrinking the denominator, or altering its own threshold.

For an existing read-only review, do not mutate the source or trigger deployments to prove a point. Use existing evidence, read-only inspection, or isolated temporary fixtures within the authorized scope.

## Recommend fewer, better changes

Distinguish three kinds of improvement:

1. **Make correct work easier:** better knowledge, a shared helper, an explicit input, a simpler procedure.
2. **Detect mistakes sooner:** local validation and clear diagnostics using the same criteria as later gates.
3. **Protect the boundary:** remote enforcement, scoped tool access, release qualification, or a human decision where warranted.

Do not translate every judgment into a proposed check. Whether a layout communicates the idea or a feature is worth building can remain a person's decision. Explain what automation can establish and what it cannot.

Keep findings compact: actionable defect, user impact, evidence, smallest useful fix, and verification. Separate intentional exceptions, optional improvements, and unknowns. Cite file locations for static findings; for executed proof, give the command, tested revision/artifact, working-tree differences, and result. Never attach results to a later revision. Close with each mechanism's depth: **referenced only / read / executed**, and what remains unchecked. Avoid scores or boilerplate process prescriptions.
