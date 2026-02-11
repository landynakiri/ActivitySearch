---
description: 自動根據變動生成 commit 訊息並推送至遠端倉庫。
---

# Git 同步流程 (Git Sync Workflow)

使用此流程快速提交所有變更並推送到遠端倉庫。

## 步驟 (Steps)

1. **暫存變更 (Stage Changes)**
   - 暫存所有相關檔案：
   ```bash
   git add .
   ```

2. **生成 Commit 訊息 (Generate Commit Message)**
   - 使用 `git diff --cached` 分析已暫存的變更。
   - 建立一個簡潔的 commit 訊息來摘要這些變動。

// turbo
3. **提交並推送 (Commit and Push)**
   - 執行提交與推送：
   ```bash
   git commit -m "[產生的訊息]"
   git push origin main
   ```

> [!NOTE]
> 如果發生 403 錯誤，請確保您已在瀏覽器中完成身份驗證，且遠端 URL 正確。
