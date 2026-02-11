# 活動查詢工具 (Activity Search Tool) 實作計畫 v3

## 1. 目標 (Goal Description)
開發一款具備「日期區間查詢」功能的活動搜尋工具，並直接在 App 內列出所有符合條件的活動。採用 **Backendless** 架構，由瀏覽器直接串接開放資料或 API 並進行前端篩選。

## 2. 核心變更與需求校準
- **日期區間輸入**：新增開始日期與結束日期的選擇器。
- **內部列表顯示**：搜尋結果不再導向 Google，而是直接在 App 內渲染為活動卡片列表。
- **多來源擷取**：
  - 優先整合 **KKTIX 開放資料 API**。
  - 針對其他來源，初步使用 Mock Data 模擬，或研究具備 CORS 支援的開放資料集。

## 預計變更 (Proposed Changes)

### 1. 領域模型調整 (Domain Logic)
- [MODIFY] `src/domain/models/Activity.ts`: 強化日期處理邏輯。
- [NEW] `src/domain/value-objects/DateRange.ts`: 處理日期區間評估與驗證。

### 2. UI 組件開發 (UI Development)
- [MODIFY] `src/App.tsx`: 
  - 加入「開始日期」與「結束日期」輸入框（採用現代化 Tailwind 風格）。
  - 新增結果顯示區域 (Result List)。
- [NEW] `src/components/SearchResultCard.tsx`: 顯示單一活動資訊，包含標題、日期、地點、來源連結。

### 3. 搜尋服務整合 (Integration)
- [NEW] `src/infrastructure/KktixService.ts`: 串接 `https://kktix.com/events.json` 獲取即時資料。
- [NEW] `src/domain/services/ActivityFilter.ts`: 根據使用者選取的日期區間，過濾獲取到的活動資料。

## 驗證計劃 (Verification Plan)

### 自動化測試
- **單元測試**: 驗證 `DateRange` 是否能正確判斷某個日期是否落在區間內。
- **整合測試**: 模擬 API 回傳資料，驗證篩選 logic 是否正確列出活動。

### 手動驗證
1. 選取 2026/03/01 至 2026/03/31。
2. 點擊搜尋後，介面應出現該月份的 KKTIX 活動列表。
3. 確認點選卡片能正確開啟活動詳情。
