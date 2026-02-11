---
name: plan-versioning
description: A strategy for version controlling implementation plans using Git and a physical history directory.
---

# Plan Versioning Skill

This skill defines a robust strategy for managing the lifecycle and version history of project implementation plans.

## Core Principles

1.  **Main Living Document**: The file `docs/implementation_plan.md` always contains the current, approved, and active plan. This is the Single Source of Truth (SSOT).
2.  **Version Snapshots**: Whenever a major change is approved or a milestone is reached, a copy of the plan is saved to `docs/history/`.
3.  **Naming Convention**: Snapshots are named using the format `YYYYMMDD_implementation_plan_vX.md`.
4.  **Git Tracking**: All changes to both the main document and the history directory are committed to version control.

## Workflow

1.  **Modify**: Update `docs/implementation_plan.md` as needed during the planning phase.
2.  **Snapshot**: When the user approves a version, copy the current plan:
    ```bash
    cp docs/implementation_plan.md docs/history/$(date +%Y%m%d)_implementation_plan_vN.md
    ```
3.  **Commit**: Commit the changes to Git with a descriptive message:
    ```bash
    git add docs/implementation_plan.md docs/history/
    git commit -m "docs: archive implementation plan vN and update main plan"
    ```
4.  **Reference**: Always refer to the main plan for current development work. Use the history directory only for auditing or rollbacks.

## Auto-Sync Feature (New)

When performing an automated sync, follow these rules:
1.  **Analyze Diffs**: Use `git diff --cached` to see what is being committed.
2.  **Generate Message**: Summarize the changes in a concise, conventional commit format (e.g., `feat:`, `fix:`, `docs:`).
3.  **Push**: Ensure the changes are pushed to the remote repository.
