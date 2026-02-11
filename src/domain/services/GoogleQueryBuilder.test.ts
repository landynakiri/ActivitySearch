import { describe, it, expect } from 'vitest';
import { GoogleQueryBuilder } from './GoogleQueryBuilder';

describe('GoogleQueryBuilder', () => {
    it('should build query with keyword and date range', () => {
        const query = GoogleQueryBuilder.build({
            keyword: '路跑',
            startDate: new Date('2026-03-01'),
            endDate: new Date('2026-03-31')
        });
        expect(query).toContain('"路跑"');
        expect(query).toContain('"2026-03-01".."2026-03-31"');
    });

    it('should include site filters', () => {
        const query = GoogleQueryBuilder.build({
            keyword: '音樂會',
            sites: ['kktix.com', 'accupass.com']
        });
        expect(query).toContain('(site:kktix.com OR site:accupass.com)');
    });

    it('should handle single date', () => {
        const query = GoogleQueryBuilder.build({
            keyword: '講座',
            startDate: new Date('2026-01-01')
        });
        expect(query).toContain('"2026-01-01"');
    });
});
