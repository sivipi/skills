# Maintaining this collection

- Author skills in `skills/<name>/`. Keep shared repository guidance here.
- Read the skill and its relevant references before changing its behavior. Do not duplicate instructions across agent-specific files.
- Preserve the user's scope. A review must not silently become an implementation, and implementation must not acquire extra approval steps without a concrete reason.
- Keep examples independent of private source projects. Do not commit client identities, local source paths, credentials, source snapshots, or internal endpoints.
- Explain when a reference should be loaded. Avoid making every invocation load every file.
- Preserve role-specific judgment. Do not turn a sample project's thresholds or release policy into a universal rule.
- Run `npm run check` for changes. For behavior changes, update and exercise the relevant cases in `evals/`; distinguish an actual agent run from an editorial walkthrough.
- Do not claim CI is a required merge gate without checking the repository's remote protection settings.
