# Development baseline editorial walkthrough

Method: walked through the twelve [evaluation cases](../workspace-engineering.md) against the revised entrypoint and references. This is a manual instruction review with concrete sample decisions, not an independent agent execution or a measured behavioral pass rate. Structural validation runs separately.

## Representative outputs

### A small code repo with only a build command (case 8)

Proposed process: capture acceptance examples → implement behavior with tests → run the full credential-free local gate → open or update a PR with evidence → require CI before merge → qualify release separately.

The existing `build` command can be used now. A test runner, test command, combined validation command, hook installation, CI workflow, and required-check configuration are implementation gaps, not existing capabilities. In review-only mode these remain recommendations. The baseline now requires this proposal even though the current repo has no testing rules.

### Shared behavior and a final edit after tests passed (cases 9–10)

Proposed test selection includes independent date-boundary expectations and affected screens, with a regression for the original timezone defect. The last edit invalidates relevant earlier evidence; affected tests and the required local gate must run again before push. Missing browser setup is an unrun check to repair or report, not permission to skip. Compiling remote test entries is feasible locally; executing them against a live service is a separate scoped step.

### Designer experience plus an export helper (case 11)

Preserve versioned scenes, rendered previews, and designer acceptance. For the helper, test a valid export and a known invalid measurement through its actual invocation, require a failing exit status and no misleading successful artifact, then rerun local checks. This applies the software baseline to supporting code without making the designer manage code-review mechanics for ordinary scene edits.

### Existing strong rules and a misleading guard test (case 12)

Keep the full-suite and code-owner policies. The improvement is a test of the real hook/runtime/payload and clearer setup diagnostics, not fewer checks. Unknown remote enforcement stays unknown; no remote mutation follows from a local review.

## Other cases checked

| Case | Instruction decision confirmed in the walkthrough |
| --- | --- |
| 1 — QA review | Test-code quality, independent outcomes, hook installation, and remote requirements are separate checks; review stays read-only. |
| 2 — Process document | Extract and improve the actual process; do not assume missing code infrastructure needs to be built. |
| 3 — Nontechnical intake | Resolve scale and deliverable inputs; keep unavailable modeling tools unverified. |
| 4 — Authorized local improvement | Implement the scoped gate without a new plan-approval stop or changes to review policy. |
| 5 — Green checks, wrong tenant | Require distinct expected data and actual scope verification, not a higher coverage score. |
| 6 — Slow release feedback | Move cheap checks earlier; keep expensive isolated qualification and exact-revision evidence. |
| 7 — Private reference projects | Generalize practices; do not copy private identities or execute reference-source refactoring instructions. |

The main routing check was whether review mode would load the baseline as well as build mode. The entrypoint now explicitly requires both and asks for a concrete proposed process. Remaining limitation: real agent behavior on these fixtures has not been independently evaluated.
