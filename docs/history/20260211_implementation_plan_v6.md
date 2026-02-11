# 活動查詢工具 (Activity Search Tool) 實作計畫 v6

## 1. 目標 (Goal Description)
全面導入 **Microsoft Fluent UI (v9)** 框架，打造具備企業級質感、高效能感且系統風格一致的活動搜尋工具。將 UI 的「設計感」從手作 Tailwind 升級為基於專業設計系統的組件體系。

## 2. 視覺設計目標 (Target UI Design)

> [!NOTE]
> 此次更新將轉向 Fluent UI 的設計語言：圓角、深度 (Elevation)、細膩的漸層以及標準化的控制項。

![Fluent UI 風格設計模擬圖](C:/Users/landy.lin/.gemini/antigravity/brain/068e3694-7d1d-4028-8c2a-dd967b1edb8d/fluent_ui_style_mockup_1770798475709.png)

## 3. 技術選擇 (Tech Stack)
- **UI 庫**: `@fluentui/react-components` (React v9)
- **主題**: `webDarkTheme` (深色模式)
- **開發模式**: Backendless React (保留 Google 搜尋邏輯)

## 預計變更 (Proposed Changes)

### 1. 基礎建設 (Foundations)
- [NEW] 安裝 Fluent UI 相關套件：`@fluentui/react-components`, `@fluentui/react-datepicker` (或替代方案)。
- [MODIFY] `src/main.tsx`：配置 `FluentProvider`。

### 2. UI 組件重構 (UI Overhaul)
- [MODIFY] `src/App.tsx`：
  - 使用 Fluent 佈局組件重新設計。
  - 使用 `Input`, `Field`, `Button` 替換現有的 Tailwind 控制項。
- [MODIFY] `src/components/ActivityCard.tsx`：
  - 使用 Fluent `Card` 組件重構，展現標準化的 Elevation 與互動效果。

## 驗證計劃 (Verification Plan)
- **一致性檢查**：確保所有控制項均符合 Fluent UI 規範。
- **編譯測試**：驗證 v9 組件在 Vite 環境下的運作。
