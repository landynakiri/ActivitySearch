/**
 * 免費開放資料服務 - 串接文化部 iCulture API
 * 零成本、無需 API Key
 */

export interface OpenDataActivity {
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
    startDate: string;
    endDate: string;
    location: string;
    sourceUrl: string;
}

export class OpenDataService {
    private static readonly API_URL = 'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6';

    /**
     * 根據關鍵字搜尋活動
     */
    static async search(keyword: string): Promise<OpenDataActivity[]> {
        try {
            // 由於 iCulture API 沒支援後端過濾，我們先抓取最近的活動並在前端過濾
            // 在現實生產環境，這可能需要一個簡單的 proxy 或快取，
            // 但為了 Backendless，我們直接在前端處理
            const response = await fetch(this.API_URL);
            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();

            return data
                .filter((item: any) =>
                    item.title.includes(keyword) ||
                    item.description.includes(keyword) ||
                    (item.location && item.location.includes(keyword))
                )
                .slice(0, 10) // 限制數量
                .map((item: any) => ({
                    id: item.UID,
                    title: item.title,
                    description: item.description || '無描述',
                    startDate: item.startDate,
                    endDate: item.endDate,
                    location: item.location || '未知地點',
                    sourceUrl: item.sourceWebPromote || 'https://www.culture.tw/'
                }));
        } catch (error) {
            console.error('Error fetching iCulture data:', error);
            return [];
        }
    }
}
