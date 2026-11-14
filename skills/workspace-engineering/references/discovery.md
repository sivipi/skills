# Discover the process

Use this when the workspace's users, intended process, or actual practice are unclear. Do not make discovery a prerequisite questionnaire when the answer is already in the materials.

## Start from a document

Read the supplied document through the available file or connected-source tool. Follow relevant links selectively; record its version/date and distinguish policy from examples or aspirations. If inaccessible, name the access gap and ask for a reachable reference or the relevant text. Continue with available evidence without pretending to have read it.

Extract:

| Element | What to capture |
| --- | --- |
| Role and outcome | Who uses the process, their expertise, and what they deliver |
| Trigger and inputs | How work starts, required context, source of truth, missing inputs |
| Steps and tools | Actions, dependencies, credentials, integrations, manual transfers |
| Decisions | Who chooses direction, accepts quality, or permits an outward action |
| Validation | Criteria, where checked, failure response, evidence retained |
| Handoff | Recipient, output format, revision, what counts as complete |
| Recovery | Saved state, retries, partial failure, cleanup, rollback |

For a repo-backed review, trace these statements to actual instructions, scripts, hooks, workflow files, tool permissions, and a recent artifact where available. Mark contradictions explicitly. A workflow file does not prove branch protection is enabled, and a checklist item does not prove a human followed it.

## Interview for the gaps

Start with a recent task: **“Walk me through the last time you did this, from the request to the final result. Where did you have to step in?”**

Use one to three focused questions per round, not the entire list below. Read the answer and available evidence before choosing the next question. For asynchronous interviews, do useful independent work while waiting; silence is not an answer.

- Who does the work, and what should they not need to learn to get a good result?
- What do you keep explaining or fixing? Show one example if it is available.
- What would make an output unacceptable even if it looked convincing?
- Where do you get the authoritative data, requirements, measurements, or expected result?
- What should the agent decide itself? Which decisions belong to a person?
- Which tools or environments are available? Which actions cost money or affect others?
- What happens when a session stops halfway through? How do you resume or undo it?
- Which stage takes the most time: doing the work, finding mistakes, waiting for checks, or handing it off?

Stop when you can describe one complete workflow, its success criteria, its main failure, and its decision boundaries. Present that understanding briefly and proceed within the requested scope. Ask a follow-up only where uncertainty materially changes the work; record low-impact assumptions instead of extending the interview indefinitely.

## Output

Use a compact map:

`Request → inputs → agent actions → checks → human decision → delivery → recovery`

Follow with the gaps that matter. For each, separate what the person reported, what the document promises, what the implementation supports, and what remains unverified. Suggest changes to the process itself when that removes unnecessary work; do not simply automate every existing step.
