# Sivan's skills

Reusable skills for doing better work with agents. Each skill is independent; install the ones you need.

| Skill | What it does |
| --- | --- |
| [workspace-engineering](skills/workspace-engineering/SKILL.md) | Review, improve, or build a workspace around the people using it. Start from a repository, a process document, or an interview. |

## Workspace engineering

Vibe coding works when you engineer the process around it. The workspace is a product for a particular role: it gives the agent the knowledge, skills, tools, and feedback to help that person finish useful work repeatedly.

This skill looks beyond the code. Where does a request begin? What does the agent need to know? What can it verify? Where does a person need to decide? What happens when the process fails?

Example requests:

```text
Use $workspace-engineering to review this repo for QA engineers who
vibe-code Playwright tests. Find the three changes that would help most.

Use $workspace-engineering with docs/delivery-process.md. Compare the
documented process with the repo and suggest improvements. Don't edit yet.

Use $workspace-engineering to interview me about our design process,
then build a workspace for the first complete workflow.

Use $workspace-engineering to implement the agreed local validation loop.
Preserve our current review and release policies.
```

The primary focus is writing code with agents. The skill actively proposes a [baseline development process](skills/workspace-engineering/references/baseline.md):

- Meaningful tests for new or changed behavior, and regression tests for bug fixes.
- Relevant tests and static checks locally before pushing, with a fix-and-rerun loop on the final files.
- Reusable validation commands, installed hooks, and verified required CI checks before merge.
- Separate staging and release qualification, with evidence tied to the delivered revision.

It recommends missing practices in review mode and implements the requested scope in build mode. Test scope, coverage thresholds, and human-review policies are adapted to the team; existing stricter requirements are preserved. For nontechnical work, the same principles become previews, artifact checks, recoverable versions, and human acceptance. Any supporting code still follows the development baseline.

## Install

Install directly from this public repository using the [skills CLI](https://github.com/vercel-labs/skills):

```sh
npx skills add sivipi/skills --skill workspace-engineering
```

The installer requires Node 22.20+ and lets you choose the target agent. It installs into the current project by default; add `-g` for a global installation. In Codex, invoke it with `$workspace-engineering`; other agents use their own skill invocation syntax. No GitHub login or manual clone is needed.

### Optional telemetry opt-out

The skills CLI collects anonymous installation telemetry by default, which contributes to the [skills.sh leaderboard](https://skills.sh/docs/faq). To opt out for this installation:

```sh
DISABLE_TELEMETRY=1 npx skills add sivipi/skills --skill workspace-engineering
```

The CLI also supports `DO_NOT_TRACK=1`. See its [telemetry documentation](https://github.com/vercel-labs/skills#telemetry) for details.

## Add a skill

1. Create `skills/<skill-name>/SKILL.md` with `name` and `description` frontmatter.
2. Keep the entrypoint short. Add references or executable helpers only when they earn their place.
3. Add a row to the catalog above and realistic evaluation cases under `evals/`.
4. Run `npm run check` before pushing.

The collection uses Node 22+ with no package dependencies. CI runs the same check. The metadata validator accepts JSON-quoted, single-line `name` and `description` fields, a deliberately small valid YAML subset; extend it with tests before using other metadata. It also checks relative Markdown file links, not remote URLs or heading anchors. These structural checks do not establish the quality of a skill's advice; use the [behavioral cases](evals/workspace-engineering.md) for that.

## Influences

The collection format draws on [Matt Pocock's skills](https://github.com/mattpocock/skills). [Caldo's untangle-codebase](https://github.com/caldoai/skills/tree/main/skills/untangle-codebase) informed the idea of finding a shared cause behind several symptoms. This is an original workflow for workspace design, not a copy of either skill set or a requirement to run them.

The [design notes](docs/design-notes.md) explain the generalized lessons behind the first skill. No private source repositories are required to use it.
