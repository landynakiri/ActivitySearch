# 活動查詢工具 (Activity Search Tool) 實作計畫 v8 - 零成本 Backendless 方案

## 1. 目標 (Goal Description)
回歸專案初衷：開發一個 **完全零預算 (Zero Cost)** 且 **純前端 (Backendless)** 的活動搜尋工具。我們將放棄需要付費或綁定信用卡之 Google API，改採「開放資料」與「外部搜尋連結」相結合的混合策略。

## 2. 核心變更 (Proposed Changes)

### 1. 資料獲取策略 (Data Acquisition)
- **內建列表：開放資料 (Open Data)**
  - [NEW] 串接 **文化部 iCulture 開放資料 API**：這是一個免費且不需要 API Key (或有大額免費額度) 的來源，可用於在 App 內「直接列出」台灣各類藝文與活動資訊。
  - 此部分將解決 API 成本問題，同時滿足使用者「在 App 內列出結果」的需求。
- **全網擴充：智慧連結 (Smart Links)**
  - 繼續利用 `GoogleQueryBuilder` 生成高品質搜尋字串。
  - 當使用者需要搜尋全網或特定平台時，點擊按鈕直接**跳轉至預設好的 Google 搜尋頁面**。這不消耗任何 API 額度且 $0 成本。

### 2. UI/UX 調整 (UI Refinement)
- [MODIFY] `src/App.tsx`:
  - 整合 `iCulture` 數據抓取邏輯。
  - 增加一個明顯的「全網智慧搜尋」按鈕，用於處理非開放資料的搜尋請求。
  - 移除所有關於 Google Custom Search API 的填寫需求。

### 3. 架構優化 (Architecture)
- [NEW] `src/domain/services/OpenDataService.ts`: 負責解析政府開放資料。

## 3. 驗證計畫 (Verification Plan)
- **網路測試**: 確保瀏覽器能直接呼叫 iCulture API (處理可能的 CORS 代理)。
- **功能驗證**: 搜尋關鍵字時，App 內顯示藝文活動卡片，且能順利產出 Google 智慧連結。

> [!NOTE]
> 這個方案確保了 $0 維護成本，且能發揮 Fluent UI 的展示優勢。
