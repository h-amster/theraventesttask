import { CurrencyValues } from '../types/CurrencyValues';

export function getNormalizedPrice(
  price: number,
  exchangeRate: number,
  currency: string,
) {
  const normalizedPrice =
    currency === CurrencyValues.UAH
      ? Math.round(price * exchangeRate * 100) / 100
      : price;

  if (isNaN(normalizedPrice)) {
    return '';
  }

  return normalizedPrice.toFixed(2);
}
