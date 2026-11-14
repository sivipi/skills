# Policy, rollout, and revision evidence walkthrough

Method: editorial walkthrough of cases 13–17 in [the evaluation specification](../workspace-engineering.md), plus compatibility checks against cases 1, 8, and 12. This reviews the instructions and expected decisions; it is not an independent agent run, an executed hook fixture, or a behavioral pass rate.

| Case | Decision supported by the revised guidance |
| --- | --- |
| 13 — Intentional policy | Keep contributor-enforced checks as the explicit exception. Remote protection remains unknown. Missing agreed merge evidence is a policy mismatch, not proof of test failure. |
| 14 — Contributor rollout | Inspect and exercise installation paths in disposable contexts, including existing configuration and repeated setup. Report which contexts work; do not infer contributor adoption from one checkout. |
| 15 — Outgoing revision | A passing dirty working tree cannot qualify its failing committed revision. Require actual rejected and successful pushes, receiver revision checks, and coverage for a different outgoing ref. |
| 16 — Concise evidence | Lead with the supported static defect. Keep referenced, read, and executed mechanisms distinct; tests on A do not certify B. |
| 17 — Shared implementation | Reuse the existing graph and classifier, route local and CI callers through shared logic, and check representative cases through both callers. |

Compatibility: case 1 still distinguishes unknown remote settings from observed local failures. Case 8 still proposes a useful default loop when the user explicitly asks for one and no process exists. Case 12 retains stricter full-suite and human-review requirements. Neither default recommendations nor stronger existing policies erase explicit user exceptions.

Remaining validation: these five behavioral fixtures have not been executed by an independent agent. Structural repository checks and skill validation are separate and do not establish runtime hook behavior or successful contributor rollout.
