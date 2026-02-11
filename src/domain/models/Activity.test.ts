import { describe, it, expect } from 'vitest';
import { Activity } from './Activity';

describe('Activity Domain Model', () => {
    const validProps = {
        id: '1',
        title: '台北路跑',
        date: new Date('2026-12-31'),
        location: '台北市',
        type: 'Sport',
        sourceUrl: 'https://example.com'
    };

    it('should create a valid activity', () => {
        const activity = new Activity(validProps);
        expect(activity.id).toBe('1');
        expect(activity.title).toBe('台北路跑');
    });

    it('should throw error if title is empty', () => {
        expect(() => new Activity({ ...validProps, title: '' })).toThrow('Activity title cannot be empty');
    });

    it('should correctly identify upcoming activities', () => {
        const futureActivity = new Activity(validProps);
        const pastActivity = new Activity({ ...validProps, date: new Date('2020-01-01') });

        expect(futureActivity.isUpcoming()).toBe(true);
        expect(pastActivity.isUpcoming()).toBe(false);
    });
});
