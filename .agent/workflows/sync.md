---
description: Automatically commit and push changes with generated commit messages
---

# Git Sync Workflow

Use this workflow to quickly commit all changes and push them to the remote repository.

## Steps

1. **Stage Changes**
   - Stage all relevant files:
   ```bash
   git add .
   ```

2. **Generate Commit Message**
   - Analyze the staged changes using `git diff --cached`.
   - Create a concise commit message that summarizes the changes.

// turbo
3. **Commit and Push**
   - Execute the commit and push:
   ```bash
   git commit -m "[Generated Message]"
   git push origin main
   ```

> [!NOTE]
> If a 403 error occurs, ensure you are authenticated in the browser and the remote URL is correct.
