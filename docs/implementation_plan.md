# 活動查詢工具 (Activity Search Tool) 需求規格與實作計畫

## 1. 目標 (Goal Description)
開發一款輕量級 Web 應用，讓使用者查詢東亞區域（以台灣為主）的活動。為節省伺服器成本，資料搜尋與採集邏輯將優先設計在使用者瀏覽器端執行。

## 2. 技術棧 (Technology Stack)
- **前端**: React (Vite, Tailwind CSS, Vitest)
- **部署**: Vercel (單頁應用託管)
- **核心設計模式**: **Backendless / Pure Frontend**
  - 所有領域邏輯、搜尋解析與 API 採集均在使用者瀏覽器端執行，實現真正的零伺服器成本。

## 3. 領域驅動與測試驅動開發 (Domain-Driven TDD)
本專案採用 **Domain-Driven TDD**，以 User Story 為核心驅動開發。

### 開發循環
1. **User Story**: 描述使用者目標。
2. **Domain Modeling**: 定義 `Activity` 實體與 `ActivityDate`, `Location` 等數值對象。
3. **TDD**: 撰寫 Vitest 測試 -> 實作功能 -> 重構。

### 核心領域概念
- **Entity**: `Activity` (含標題、時間、地點、來源)。
- **Value Objects**: `ActivityDate`, `ActivityType` (含業務驗證邏輯)。

## 4. 實作步驟 (Execution Plan)
1. **環境配置**: 初始化 Vite + Vitest。
2. **領域開發**: 根據第一個 User Story 建立活動領域模型並通過測試。
3. **UI 開發**: 打造 Glassmorphism 風格的搜尋介面。
4. **搜尋整合**: 實作客戶端搜尋 Logic (如 Google Custom Search API 或 搜尋語法生產生器)。

## 5. 驗證計劃 (Verification Plan)
- **單元測試**: 領域模型 100% 覆蓋。
- **UI 驗證**: 確保在不同搜尋情境下呈現正確。
