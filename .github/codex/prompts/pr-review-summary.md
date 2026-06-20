You are reviewing a pull request for this repository.

Produce a concise PR review summary for the author. Do not modify files.

Review scope:
- Inspect the current PR diff against the base branch.
- Focus on behavior changes, user-facing impact, risks, and missing verification.
- Call out likely bugs only when they are grounded in the diff.
- Ignore generated output and unrelated repository history unless it is needed to understand the change.

Useful commands:
- `git status --short`
- `git diff --stat origin/${PR_BASE_REF}...HEAD`
- `git diff origin/${PR_BASE_REF}...HEAD`

Output format:

## Codex PR Review Summary

### What Changed
- 2-5 bullets.

### Review Notes
- Bullet notable risks or say `No obvious issues found.`

### Suggested Verification
- 1-4 concrete checks the author should run.
