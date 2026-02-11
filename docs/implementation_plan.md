# 活動查詢工具 (Activity Search Tool) 實作計畫 v5

## 1. 目標 (Goal Description)
全面重構 UI 介面，以 **v0.dev / Shadcn UI** 為美學標準，打造具備極致設計感、直覺互動與高質感的 React 應用。保留 v4 的「Google 日期區間搜尋」核心邏輯，但大幅提升視覺品質。

## 2. 視覺設計指南 (Design System)
- **風格語彙**：清潔、現代、大量留白、細膩的陰影、微小動畫。
- **組件庫**：參考 Shadcn UI (Radix UI + Tailwind) 的設計規範。
- **色彩計畫**：優雅的深色模式 (Deep Slate/Zinc) 或 極簡亮色模式，搭配亮眼的品牌色 (Indigo/Violet)。
- **排版**：使用 Google Fonts 的 Inter 或 Outfit 字體，強化資訊層級感。

## 預計變更 (Proposed Changes)

### 1. 基礎建設 (Foundations)
- [NEW] 導入 Lucide React 圖標庫以替換原本的原生 SVG。
- [MODIFY] `tailwind.config.js`：擴展配色方案，加入 Shadcn 風格的顏色變量。

### 2. UI 組件重構 (UI Overhaul)
- [MODIFY] `src/App.tsx`：將原本的單一卡片結構改為具備側邊欄 (Sidebar) 或 更優雅的兩欄式佈局。
- [NEW] `src/components/ui/`：定義具備高品質互動效果的 Input, Button, DatePicker 等基礎組件。
- [MODIFY] `src/components/ActivityCard.tsx`：重設計為更具「資訊卡」感的樣式，包含懸浮縮放、平滑轉換與清晰的 Metadata 佈局。

### 3. 動態效果 (Framer Motion)
- [NEW] 導入 `framer-motion`（視需要）來達成如 v0.dev 般絲滑的切換動畫。

## 驗證計劃 (Verification Plan)
- **視覺比對**：確保最終結果具備與 v0.dev 同等級的設計細節。
- **互動性測試**：驗證搜尋過程中的載入骨架屏 (Skeleton) 與成功獲取資料後的呈現流暢度。
- **回應式設計**：確保在不同螢幕尺寸下皆能維持精緻度。
