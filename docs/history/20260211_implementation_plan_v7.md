# 活動查詢工具 (Activity Search Tool) 實作計畫 v7 - 真實數據串接

## 1. 目標 (Goal Description)
將應用程式從目前的設計模擬階段（Mock Data）推進至實作階段。透過串接 **Google Custom Search API**，讓使用者能真正搜尋並看到來自 KKTIX, Accupass 等平台的活動資訊，並保留現有的 Fluent UI 精緻介面。

## 2. 核心變更 (Proposed Changes)

### 1. 領域服務增強 (Domain Services)
- [MODIFY] `src/domain/services/GoogleQueryBuilder.ts`: 移除或標記模擬邏輯，確保其生成的語法能被 API 使用。
- [NEW] `src/domain/services/SearchService.ts`: 
  - 封裝 API 請求邏輯。
  - 處理環境變數中的 API Key 與 Search Engine ID。
  - 實作資料轉換（將 Google 搜尋結果轉換為我們的 `Activity` 模型）。

### 2. 介面邏輯整合 (UI Logic)
- [MODIFY] `src/App.tsx`: 
  - 替換 `handleSearch` 中的 `setTimeout` 模擬邏輯。
  - 串接 `SearchService`。
  - 加入錯誤處理 (Error States) 與空結果提示。

### 3. 環境配置 (Environment)
- [NEW] `.env.local`: 預留 API 金鑰填寫位置（不會提交至 Git）。

## 3. 驗證計畫 (Verification Plan)

### 自動化測試
- 為 `SearchService` 撰寫單元測試（使用 Mocked Fetch）。
- 驗證資料轉換器的正確性。

### 手動驗證
- 測試輸入「馬拉松」，觀察是否產出真實的 KKTIX 或 Accupass 連結。

> [!IMPORTANT]
> 為了保護您的個資，我會請您手動在 `.env.local` 填入 API 金鑰，我只會提供設定範本。
