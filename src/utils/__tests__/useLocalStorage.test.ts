import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useLocalStorage } from '../useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('should initialize with initial value', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'initial'));

    expect(result.current[0]).toBe('initial');
  });

  it('should initialize with value from localStorage', () => {
    localStorage.setItem('key', JSON.stringify('stored value'));
    const { result } = renderHook(() => useLocalStorage('key', 'initial'));

    expect(result.current[0]).toBe('stored value');
  });

  it('should update localStorage when state changes', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'initial'));

    act(() => {
      result.current[1]('new value');
    });

    expect(localStorage.getItem('key')).toBe(JSON.stringify('new value'));
  });

  it('should handle JSON parsing errors gracefully', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    localStorage.setItem('key', 'invalid JSON');
    const { result } = renderHook(() => useLocalStorage('key', 'initial'));

    expect(result.current[0]).toBe('initial');
    expect(errorSpy).toHaveBeenCalledWith(
      'Error retrieving localStorage:',
      expect.any(SyntaxError)
    );

    errorSpy.mockRestore();
  });

  it('should handle localStorage setItem errors gracefully', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const setItemSpy = vi
      .spyOn(Storage.prototype, 'setItem')
      .mockImplementation(() => {
        throw new Error('QuotaExceededError');
      });

    const { result } = renderHook(() => useLocalStorage('key', 'initial'));

    act(() => {
      result.current[1]('new value');
    });

    expect(errorSpy).toHaveBeenCalledWith(
      'Error saving to localStorage:',
      expect.any(Error)
    );

    errorSpy.mockRestore();
    setItemSpy.mockRestore();
  });
});
