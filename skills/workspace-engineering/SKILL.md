---
name: "workspace-engineering"
description: "Review, improve, or build agent workspaces around a role and its process. Use for workspace audits, turning process docs or interviews into repeatable workflows, and connecting skills, rules, tools, and validation. Applies to software and nontechnical work; not a general code refactoring skill."
---

# Workspace engineering

Treat the workspace as a product for the person using it. Engineer the process that makes useful work repeatable, not just the prompt that gets one good result.

The central question: **What does this person still have to remember, repair, or explain that the workspace should handle?**

## 1. Establish the job

Infer the requested mode from the user's words:

- **Review:** inspect the current process, explain gaps, and recommend improvements. Leave implementation unchanged.
- **Build or improve:** implement the requested scope, including validation and a usable handoff. A build request already authorizes ordinary reversible implementation; do not add a plan-approval ceremony.

Start with whichever evidence exists: repository, process document, or the user's account. A repository is not required for process discovery. Read applicable repository instructions before inspecting implementation or running commands. Inspect setup scripts before executing them. Preserve existing work and follow the target's canonical skill/instruction layout.

Identify the primary role, recurring task, acceptable result, current pain, and human decisions. Use [discovery](references/discovery.md) for interviews, process documents, or unclear ownership. Read available material first, then ask only questions whose answers change the design. Continue independent work while waiting; do not invent a missing answer.

## 2. Trace a complete task

Choose one representative request and follow it from intake through execution, validation, handoff, and recovery. Include a failure or correction if evidence exists. For broad reviews, sample each materially different workflow rather than claiming one sample covers everything.

Record what the user does, what the agent does, which tools act, what state is saved, and what proves completion. Compare intended practice with implementation and observed behavior. Keep these evidence labels distinct:

- **Documented:** a rule or process says this should happen.
- **Implemented:** a concrete mechanism exists and is wired into the path.
- **Observed:** a run demonstrates the behavior for a named revision or artifact.
- **Unknown:** evidence or access is missing. This is not proof of absence.

Use [review](references/review.md) to examine the path and prioritize findings. A green test is evidence of what it asserted, not of every claim attached to it.

## 3. Design the improvement

Group symptoms by their underlying cause. Prefer a shared utility, better input, clearer tool contract, or shorter procedure over adding another warning for the agent to remember. Remove redundant instructions and checks only when their purpose is preserved elsewhere.

For each proposed change, specify:

| Field | Answer |
| --- | --- |
| User problem | What gets slower, fails, or requires repeated explanation? |
| Evidence | Which file, process step, incident, or run supports the finding? |
| Change | What will the workspace do differently? |
| Placement | Knowledge, skill, rule, tool, local check, remote gate, or human decision? |
| Proof | How will we know the change works, including a relevant failure case? |
| Tradeoff and owner | What does it cost to run or maintain, and who can change the policy? |

Prioritize by user impact, recurrence, confidence, effort, and feedback delay. Lead with the few changes worth doing first, not a score or a pile of boilerplate. Use [patterns](references/patterns.md) when a concrete example or workspace layout would help.

## 4. Review or implement

For a **review**, deliver the current process in brief, the strongest existing mechanisms, prioritized findings with evidence, and the next useful step. State what could not be checked. A process-document-only review should distinguish proposed controls from controls known to exist.

For a **build or improvement**, use [build](references/build.md). Implement the authorized scope end to end. If the user wants a new workspace but the role or deliverable is still unknown, resolve that before choosing the stack. Do not turn every process problem into a software project.

## 5. Close the loop

Report what changed or was recommended, how it helps the role, what was actually verified, and what remains dependent on access or human judgment. For implementation, leave one clear way to start the workflow and one way to run its checks.

Keep operational limits explicit:

- Never make a failing check pass by weakening the criterion, bypassing the hook, or accepting missing evidence. A legitimate policy change must be identified separately and authorized by its owner.
- Preserve authorization already given; distinguish a local build from spending credits, publishing, or changing live systems. Resolve permission only at an action that actually needs it.
- Do not prescribe automatic merging, no code review, a fixed coverage percentage, test-first development, or a particular CI system as the definition of a workspace.
- Keep secrets and private source details out of reusable instructions. When source material is private, extract the pattern with neutral examples.
