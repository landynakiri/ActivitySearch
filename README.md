# 活動查詢工具 (Activity Search Tool)

一款基於 **Microsoft Fluent UI (v9)** 的輕量級 Web 應用，旨在提供高效、專業的東亞區域（以台灣為主）活動查詢體驗。

## 🎯 專案目標 (Project Goals)
本專案的目標是解決使用者在尋找跨平台（如 KKTIX, Accupass, FB Events）活動時，難以進行精確「日期區間」過濾的痛點。

- **智慧搜尋**：整合 Google 進階搜尋語法，自動生成高效的檢索指令。
- **日期優先**：提供直覺的日期區間選擇器，精確鎖定符合時間條件的活動。
- **精品介面**：採用企業級 Fluent UI 設計語言，提供穩定且具質感的作業環境。
- **隱私與效能**：採 **Backendless** 架構，搜尋與處理邏輯優先在前端執行，保護使用者隱私且反應迅速。

## 🛠️ 技術棧 (Technology Stack)
- **核心框架**: React 19 + TypeScript 5
- **建置工具**: Vite 7
- **UI 系統**: [Microsoft Fluent UI (v9)](https://react.fluentui.dev/)
- **動態效果**: Framer Motion
- **測試體系**: Vitest (TDD 驅動開發)
- **樣式引擎**: Tailwind CSS v4

## 🚀 快速開始 (Getting Started)

### 安裝依賴
```bash
npm install
```

### 開發模式
```bash
npm run dev
```

### 執行測試
```bash
npm run test
```

### 生產環境建置
```bash
npm run build
```

## 📂 專案架構 (Project Structure)
- `src/domain/`: 領域驅動設計 (DDD) 核心組件，包含模型與服務邏輯。
- `src/components/`: 可複用的 UI 元件。
- `src/App.tsx`: 主應用入口，包含搜尋介面與結果展示。
- `docs/`: 包含實作計畫與技術文件紀錄。

## 📝 備註 (Notes)
目前的版本為 **UI 邏輯雛型 (Plan v6)**，搜尋結果目前採用動態模擬數據 (Mock Data) 展示，旨在驗證 Fluent UI 的交互與視覺效果。

---
開發者：Antigravity (AI Coding Assistant)
