import { renderHook, act } from '@testing-library/react-hooks';
import { useConversion } from './useConversion';

describe('useConversion', () => {
  it('converts currency correctly', () => {
    const { result } = renderHook(() => useConversion());

    act(() => {
      result.current.setAmount('100');
    });

    act(() => {
      result.current.convertCurrency();
    });

    expect(result.current.convertedAmount).toBe('2485.00');
  });
});
