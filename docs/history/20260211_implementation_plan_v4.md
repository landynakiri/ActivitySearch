# 活動查詢工具 (Activity Search Tool) 實作計畫 v4

## 1. 目標 (Goal Description)
開發一款以 **Google 搜尋引擎** 為核心的活動查詢工具，支援使用者輸入「日期區間」，並將搜尋到的活動資訊（透過 Google Index）直接在 App 內列出。

## 2. 核心技術挑戰與對策
- **透過 Google 搜尋**：利用 Google 的強大索引能力，搜尋包含 KKTIX、Accupass、FB 活動等各類平台。
- **日期區間過濾**：
  - 策略 A (推薦)：使用 Google Custom Search API (JSON)，支援精確的關鍵字與日期範圍參數。
  - 策略 B (基礎)：生成包含 `開始日期..結束日期`（Google 的數字範圍語法）的搜尋字串。
- **在 App 內列出**：將 Google 返回的 JSON 結果渲染為 App 內部的卡片清單，而非單純跳轉分頁。

## 預計變更 (Proposed Changes)

### 1. UI 組件開發 (UI Development)
- [MODIFY] `src/App.tsx`: 
  - 加入「開始日期」與「結束日期」日期選擇器。
  - 實作「搜尋結果展示區」，包含載入狀態與無結果提示。
- [NEW] `src/components/SearchSettings.tsx`: 設定搜尋範圍（如：僅限台灣、特定網站）。

### 2. 搜尋邏輯實作 (Search Logic)
- [NEW] `src/domain/services/GoogleQueryBuilder.ts`: 
  - 將日期區間轉換為 Google 識別的格式（如 `2026-03-01..2026-03-31` 或透過搜尋語法）。
- [NEW] `src/infrastructure/GoogleSearchService.ts`: 
  - 封裝 Google Custom Search API。
  - 初步使用 Mock Data 模擬 Google 的回傳格式，以便在無 API Key 時也能展示列表功能。

### 3. 活動模型強化 (Domain Logic)
- [MODIFY] `src/domain/models/Activity.ts`: 調整以相容 Google Search 結果的資料結構（包含 Snippet、Link、Image）。

## 驗證計劃 (Verification Plan)

### 自動化測試
- **Query 產成測試**: 驗證日期區間是否正確轉換為 Google 搜尋語法。
- **列表渲染測試**: 驗證傳入 Mock Data 後，卡片是否正確顯示。

### 手動驗證
1. 設定日期區間為「2026-05-01」至「2026-05-31」。
2. 輸入「馬拉松」。
3. 觀察 App 內容區塊是否出現搜尋結果列表（非跳轉）。
