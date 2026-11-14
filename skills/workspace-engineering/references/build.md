# Build or improve a workspace

Use this once the user has asked for implementation. Complete that scope without asking them to approve routine reversible steps again.

Implement the applicable [baseline process](baseline.md) within that scope. Make its steps discoverable in the target's instructions and skills, put deterministic mechanics in reusable commands, and wire hooks and CI where appropriate. A prose instruction to run tests is incomplete when the task is to build an enforced development loop. Verify wiring and report any remote settings or unavailable tools that remain unconfigured.

## Build one usable path

For a new workspace, begin with one recurring task and make it work from request to accepted output. For an existing one, preserve its conventions and implement the selected improvements. Favor removing unnecessary handoffs over adding orchestration.

Add components only when the workflow needs them:

- **Shared instructions:** role, authoritative inputs, essential constraints, decision boundaries, and where to find procedures. Use the repository's existing canonical arrangement; for a new repo, prefer `AGENTS.md` unless the target platform requires otherwise.
- **Knowledge:** verified conventions and contracts, with provenance for facts that change. Keep project history separate from current guidance.
- **Skills:** reusable procedures that map a user's intent to tools, checks, recovery, and output. Reference existing skills rather than duplicating them.
- **Tools and helpers:** explicit inputs, scoped effects, useful errors, and a result the next step can consume. Inspect setup before running it; do not add unavailable tools as if they work.
- **State and artifacts:** durable checkpoints, versioned outputs, and enough context for another session to continue. Keep secrets, authentication state, and sensitive raw evidence outside tracked files; configure tools through the target's supported user or organization configuration.
- **Validation and delivery:** the appropriate local checks, Git hooks, PR process, CI, release checks, and acceptance steps. Non-code deliverables may need a preview, manifest, export audit, or approved version instead.

## Shift feedback left

Place each check at the earliest stage that has enough information to make it meaningful. Later stages should add fidelity or enforce the boundary, rather than discover cheap mistakes for the first time.

| Stage | Purpose |
| --- | --- |
| While building | Skills, rules, shared utilities, and tool schemas make correct work easier. |
| Before push or handoff | Run the relevant local validation loop; let the agent repair actionable failures before remote waiting. Hooks can make this habitual. |
| PR and CI | Recheck in a controlled environment, add checks requiring that environment, and protect the integration boundary. Verify remote required-check settings separately from workflow YAML. |
| Staging or preview | Validate the integrated result, realistic workflows, performance, or load when relevant. |
| Release | Qualify the exact artifact or revision with additional expensive tests where justified, then check delivery and recovery. Heavy testing for a production release can run in isolation before deployment; it need not target live users. |

Use the baseline's explicit test-selection policy and shared local/CI commands. Explain what each later stage adds, its cost, and why it cannot usefully move earlier.

## Verify the mechanism

1. Run a representative successful path using isolated fixtures or a safe sample.
2. Introduce a relevant invalid input or known defect in a disposable fixture and confirm it produces the intended failure signal. Restore any temporary change.
3. Verify failure leaves recoverable state and useful diagnostics. For mutation workflows, verify a safe resume, cleanup, or rollback path.
4. Inspect the delivered artifact where appearance or presentation matters. Do not infer visual correctness from a tool's success response.
5. Show the user the working entrypoint, validation command, and remaining human decisions.

Do not disable a failing rule, repeatedly retry an unchanged failure, or expand into unrelated repairs. Diagnose failures within scope; stop the affected action when progress requires missing access, a policy decision, or new authorization, and continue independent work where possible.

## Keep it maintainable

Document each new criterion beside its mechanism and owner. Preserve the existing merge and release policy unless changing it is part of the request. Record unknown runtime behavior as unverified, not “ready.” A setup guide, tool list, or CI file alone is not a finished workspace.

When a new incident appears, decide whether its durable fix belongs in knowledge, a reusable helper, a procedure, a validation check, or a human decision. Do not automatically turn every incident into another permanent rule.
