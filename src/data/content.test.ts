import { describe, expect, it } from 'vitest';
import { books, calendar, links, permissionForms } from './content';

describe('Open House content', () => {
  it('keeps all registration URLs secure', () => {
    expect(Object.values(links).every((url) => url.startsWith('https://'))).toBe(true);
  });
  it('includes both middle-school reading plans', () => {
    expect(books['7th Grade']).toHaveLength(6);
    expect(books['8th Grade']).toHaveLength(6);
  });
  it('keeps the full calendar and permission set', () => {
    expect(calendar.length).toBeGreaterThanOrEqual(12);
    expect(permissionForms).toHaveLength(5);
  });
});
