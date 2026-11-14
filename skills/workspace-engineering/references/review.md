# Review the workspace

Use the representative task to guide inspection. Do not read an entire repository or every transcript just because they exist. Start with entrypoint instructions, relevant skills, process docs, tool contracts, validation commands, hooks, release configuration, and recent evidence.

Assess the [baseline process](baseline.md), including practices absent from the current documentation. For code-writing workspaces, explicitly check test authoring for changed behavior, bug regression tests, final-file local validation before push, and required CI before merge. Return a proposed development loop with actual commands or identified implementation gaps, not just observations about the current loop.

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

Check the implementation and its callers. If authorized and feasible, exercise an isolated valid case and an invalid case. Preserve the raw result separately from the interpretation. If execution needs unavailable credentials or a live mutation, report the gap; static inspection is still useful.

Look for false confidence:

- A tenant test changes the visible selection but never verifies the server request or returned tenant data.
- A test and implementation share the same incorrect assumption. Find an independent expected result: a known fixture, specification, measured dimension, or trusted service response.
- Missing, skipped, empty, or flaky results are presented as success.
- A helper prints an error but exits successfully, leaving its caller to continue.
- A check exists but its hook is uninstalled, its workflow never runs, or its remote status is not required.
- A guard checks a mutable working copy while the action operates on a different revision or artifact.
- A check is satisfied by suppressions, shrinking the denominator, or altering its own threshold.

For an existing read-only review, do not mutate the source or trigger deployments to prove a point. Use existing evidence, read-only inspection, or isolated temporary fixtures within the authorized scope.

## Recommend fewer, better changes

Distinguish three kinds of improvement:

1. **Make correct work easier:** better knowledge, a shared helper, an explicit input, a simpler procedure.
2. **Detect mistakes sooner:** local validation and clear diagnostics using the same criteria as later gates.
3. **Protect the boundary:** remote enforcement, scoped tool access, release qualification, or a human decision where warranted.

Do not translate every judgment into a proposed check. Whether a layout communicates the idea or a feature is worth building can remain a person's decision. Explain what automation can establish and what it cannot.

Lead each finding with its effect on the user, then evidence, proposed change, effort/tradeoff, and verification. Separate defects from possible improvements and unknowns. Avoid fabricated maturity scores or universal thresholds.
