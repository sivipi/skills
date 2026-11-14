# Design notes

The first skill was developed from read-only inspection of four existing workspaces: a builder studio, a QA workspace, a small product workspace, and an interior design workspace. The reusable content deliberately omits private project identities and implementation-specific details.

| Workspace perspective | Useful lesson | Limit that shaped the skill |
| --- | --- | --- |
| Builder studio | Integration knowledge, reusable procedures, scoped tools, and recorded decisions reduce repeated explanation. | Local instructions and current remote policy can differ. Distinguish source intent from live enforcement. |
| QA | A rule-to-check map and shared local/CI checks support people writing tests with agents. Synthetic defects test the harness itself. | Good test code can still assert the wrong thing. Outcome correctness needs an independent source of truth. |
| Small product team | Separate work ownership, local feedback, PR readiness, and exact-revision release qualification. | A successful merge is not necessarily completed user acceptance or permission to release. |
| Interior design | Save versions, preserve measurements and provenance, inspect renders, and retain client feedback in the same workflow. | Instructions may mention tools or helpers not yet implemented or runtime-verified. Visual plausibility does not establish scale or correctness. |

Inspection covered shared instructions, relevant skills and process documentation, hook/workflow configuration, and available review records. It was not a fresh execution of the four workspaces, an audit of every remote setting, or a verification of all historical incidents.

The skill therefore asks for evidence instead of a maturity score, starts with one complete task instead of a universal scaffold, and treats interviews and documents as valid entrypoints. Its main focus is code writing: it actively proposes a development baseline rather than only reflecting the existing process. Nontechnical workflows keep the same principles with checks appropriate to their artifacts.

A second source review strengthened that baseline: the QA workspace contributed test-quality rules, independent expectations, and exact-resource cleanup; the builder studio contributed reusable knowledge and realistic guard-liveness probes; the product-team example contributed affected-flow test selection, a credential-free pre-push loop, draft readiness, and exact-revision release qualification. The skill retains these patterns without copying source-specific thresholds, release permissions, or private identities.

The external references are acknowledged in the [collection README](../README.md). Their organization and problem-solving approach were considered; their instruction text and broad refactoring mandates were not copied.
