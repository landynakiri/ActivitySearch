export interface QueryParams {
    keyword: string;
    startDate?: Date;
    endDate?: Date;
    sites?: string[];
}

export class GoogleQueryBuilder {
    static build(params: QueryParams): string {
        const parts: string[] = [];

        if (params.keyword.trim()) {
            parts.push(`"${params.keyword.trim()}"`);
        }

        if (params.sites && params.sites.length > 0) {
            const siteQuery = params.sites.map(site => `site:${site}`).join(' OR ');
            parts.push(`(${siteQuery})`);
        }

        if (params.startDate && params.endDate) {
            const startStr = this.formatDate(params.startDate);
            const endStr = this.formatDate(params.endDate);
            // Google 數字範圍語法: "start date".."end date"
            // 或者使用 daterange:語法，但 daterange 需要 Julian 日期，較複雜。
            // 最簡單且支援索引的寫法是 "YYYY-MM-DD..YYYY-MM-DD"
            parts.push(`"${startStr}".."${endStr}"`);
        } else if (params.startDate) {
            parts.push(`"${this.formatDate(params.startDate)}"`);
        }

        return parts.join(' ');
    }

    private static formatDate(date: Date): string {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }
}
