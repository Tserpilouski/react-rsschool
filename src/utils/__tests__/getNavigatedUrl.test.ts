import { describe, it, expect } from 'vitest';
import { getNavigatedUrl } from '../getNavigatedUrl';

describe('getNavigatedUrl', () => {
  it('should return the correct URL with default parameters', () => {
    const searchParams = new URLSearchParams();
    const id = 'testId';
    const url = getNavigatedUrl(searchParams, id);
    expect(url).toBe('testId/?page=1');
  });

  it('should return the correct URL with given parameters', () => {
    const searchParams = new URLSearchParams({ page: '2', search: 'query' });
    const id = 'testId';
    const url = getNavigatedUrl(searchParams, id);
    expect(url).toBe('testId/?page=2&search=query');
  });

  it('should return the correct URL with only page parameter', () => {
    const searchParams = new URLSearchParams({ page: '3' });
    const id = 'testId';
    const url = getNavigatedUrl(searchParams, id);
    expect(url).toBe('testId/?page=3');
  });

  it('should return the correct URL with only search parameter', () => {
    const searchParams = new URLSearchParams({ search: 'query' });
    const id = 'testId';
    const url = getNavigatedUrl(searchParams, id);
    expect(url).toBe('testId/?page=1&search=query');
  });
});
