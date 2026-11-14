# Patterns to adapt

These are illustrative designs, not mandatory templates or claims about a particular team's live configuration.

## A builder studio

**Role:** people who know the product they want but need help implementing it consistently.

The workspace holds shared product contracts, integration knowledge, reusable app-building procedures, preview checks, and release boundaries. If several apps interpret date ranges differently, a shared date utility plus a clear convention may solve more than another prompt warning. Check both the shared behavior and its adoption by callers.

The person owns product and UX decisions. Whether merge requires code review is a separate policy, not part of the definition of workspace engineering.

## A QA team

**Role:** QA engineers who know what to test but may not be experienced programmers.

They describe a scenario and vibe-code a Playwright test. The workspace helps turn that into maintainable test code: shared adapters and fixtures, awaited assertions, reliable locators, deterministic setup, useful traces, and exact-resource cleanup. Local checks catch common code defects; synthetic harness fixtures prove the harness can detect a known bug.

Keep two questions separate: “Is this good test code?” and “Does this test verify the right behavior?” A linter cannot supply an independent expected result. Live runs need explicit environment and data scope; no selected tests or missing evidence must not become a green result.

## A small product team

**Role:** builders who want to spend their attention on product behavior and UX.

For a product team, an illustrative layout could be:

```text
workspace/
  AGENTS.md                 # shared context and operating rules
  docs/
    process.md              # intake, ownership, delivery, recovery
    knowledge/              # authoritative contracts and conventions
    validation.md           # criterion, mechanism, evidence, owner
  skills/                   # canonical location; adapt to agent tooling
    build-feature/SKILL.md
    review-experience/SKILL.md
    release/SKILL.md
  scripts/                  # helpers and repeatable verification
  .githooks/pre-push         # early feedback; not remote enforcement
  .github/workflows/        # CI and delivery if GitHub is used
  src/
  tests/
```

Tool setup instructions describe permissions and credential locations without embedding credentials. A local validation command feeds the same criteria used in CI. Staging and release qualify a specific revision. Human acceptance checks whether the behavior solves the intended problem; a merge alone does not close that question.

## An interior design workspace

**Role:** a designer working from plans, photographs, measurements, and client feedback.

The workspace can combine a brief, modeling tools, a scale convention, versioned scene files, renders, a materials schedule, and a feedback log. “Put this chair in that corner” should produce an inspectable edit and a recoverable version.

The checks fit the work: verify units and measured dimensions, preserve unknown values, inspect the render, retain asset provenance, and validate an export before handoff. Do not infer exact dimensions from an unscaled photograph. A convincing image is not proof of an accurate model, and a correct model is not proof the designer likes the result.

This workflow need not acquire PRs, coverage thresholds, or a deployment pipeline unless they serve an actual need. Its common structure is intent, context, tools, feedback, judgment, and delivery.
