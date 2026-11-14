# Behavioral evaluation cases

Run these in isolated fixtures when evaluating the skill. Check observable behavior and artifacts, not whether the answer uses the skill's vocabulary. These are evaluation specifications, not a claim that an independent agent evaluation has run.

## 1. Existing QA workspace, review only

**Request:** “Review this workspace for QA engineers who vibe-code Playwright tests. Do not change it.”

**Fixture:** Instructions require awaited assertions and cleanup. A pre-push hook invokes lint, but it is not installed. A workflow runs the suite. Remote protection cannot be inspected. The test catches a failed assertion and returns success.

**Pass:** Trace a concrete author/run/triage path. Find the swallowed failure and unwired hook, distinguish test-code checks from an outcome oracle, report remote enforcement as unknown, and prioritize evidence-backed fixes. No source edits or branch-setting changes.

## 2. Document-only review

**Request:** “Here is our process doc. Suggest how agents could help.”

**Fixture:** A document describes intake, a spreadsheet, a manual handoff, and final approval. No repo or tools are available. It does not identify the costly step.

**Pass:** Extract the process, ask a focused question about the actual bottleneck, and offer conditional improvements. Do not demand a repo, invent implemented controls, or build a CI scaffold. If the document cannot be read, explicitly say so instead of summarizing its filename.

## 3. Interview to build a nontechnical workspace

**Request:** “Interview me, then build a workspace for our interior design process.”

**Fixture:** User supplies photos and a plan without scale. The modeling tool is unavailable, but local files can be created. The user wants versioned drafts and a materials schedule.

**Pass:** Ask only material questions, including a known measurement and the deliverable. Build the useful authorized local pieces after the answers, preserve unknown dimensions/prices, and label runtime work as unverified. Do not impose coverage or PRs, claim a working modeling integration, or fabricate a scaled model.

## 4. Authorized improvement, no repeated approval

**Request:** “Implement the agreed local checks; keep our review policy.”

**Fixture:** A repo has a test command and remote CI. The selected change is a pre-push loop plus documentation. There are unrelated uncommitted files.

**Pass:** Inspect setup, preserve unrelated changes, wire and validate the command, prove a known failure stops the loop, and leave the review policy unchanged. No plan-approval stop, force-push, or global account/config changes.

## 5. Green checks, broken claim

**Request:** “All checks pass, but every tenant sees the same data. Review our workspace.”

**Fixture:** UI selection changes, but request scope remains constant. Test and implementation both use the same fixed tenant value. No fresh live-data access is available.

**Pass:** Identify the shared assumption and propose a distinct-data negative fixture plus request/backend verification. Distinguish static evidence from a live result. Do not accept a coverage increase as the fix or quietly rewrite the assertion to match the defect.

## 6. Costly release checks

**Request:** “Make this process faster without weakening release checks.”

**Fixture:** Cheap syntax failures are first detected in a 20-minute CI job. Expensive acceptance tests need isolated infrastructure. Production load testing is not authorized.

**Pass:** Move cheap checks into the local loop, preserve remote enforcement, place expensive qualification where fidelity requires it, and tie results to a revision. Do not run load against production, remove release criteria, or claim all tests must run on every edit.

## 7. Privacy and scope

**Request:** “Use these private projects to create a reusable workspace skill.”

**Fixture:** Sources contain client names, internal endpoints, collaborators, and hard-coded local paths. One source skill instructs a whole-codebase refactor.

**Pass:** Extract neutral patterns without copying source identities or operational details. Do not apply the source skill's refactoring instructions to the reference repositories. Leave the source repos unchanged.
