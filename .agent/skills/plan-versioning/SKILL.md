---
name: plan-versioning
description: 使用 Git 與實體歷史目錄進行實作計畫版本控制的策略。
---

# 計畫版本控制 Skill (Plan Versioning Skill)

本 Skill 定義了管理專案實作計畫生命週期與版本歷史的穩健策略。

## 核心原則 (Core Principles)

1.  **主文件 (Main Living Document)**：檔案 `docs/implementation_plan.md` 永遠包含當前、已核准且活耀的計畫。這是單一事實來源 (SSOT)。
2.  **版本快照 (Version Snapshots)**：每當重大變更被核准或達到里程碑時，計畫副本會被儲存至 `docs/history/`。
3.  **命名規範 (Naming Convention)**：快照命名格式為 `YYYYMMDD_implementation_plan_vX.md`。
4.  **Git 追蹤 (Git Tracking)**：所有對主文件與歷史目錄的變更都必須提交至版本控制系統 (Git)。

## 工作流程 (Workflow)

1.  **修改 (Modify)**：在計畫階段根據需求更新 `docs/implementation_plan.md`。
2.  **建立快照 (Snapshot)**：當使用者核准版本後，複製當前計畫：
    ```bash
    cp docs/implementation_plan.md docs/history/$(date +%Y%m%d)_implementation_plan_vN.md
    ```
3.  **提交 (Commit)**：將變更提交至 Git，並附上具描述性的訊息：
    ```bash
    git add docs/implementation_plan.md docs/history/
    git commit -m "docs: archive implementation plan vN and update main plan"
    ```
4.  **參考 (Reference)**：開發工作應始終參考主計畫。歷史目錄僅用於審計或回滾。

## 自動同步功能 (Auto-Sync Feature)

執行自動同步時，請遵循以下規則：
1.  **分析差異 (Analyze Diffs)**：使用 `git diff --cached` 查看即將提交的內容。
2.  **生成訊息 (Generate Message)**：以簡潔的約定式提交 (Conventional Commit) 格式摘要變更（例如：`feat:`, `fix:`, `docs:`）。
3.  **推送 (Push)**：確保將變更推送到遠端倉庫。
