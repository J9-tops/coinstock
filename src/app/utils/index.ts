import { CoinItem } from '../types';

type TValue = number;

export function toTrillion(value: TValue) {
  return value / 1_000_000_000_000;
}

export function toBillion(value: TValue) {
  return value / 1_000_000_000;
}

export function getTopGainers(coins: CoinItem[], top = 3): CoinItem[] {
  if (!Array.isArray(coins) || coins.length === 0) {
    throw new Error('Invalid data format: expected a non-empty array of CoinItem objects');
  }

  // Filter out coins missing the price change data
  const validCoins = coins.filter(
    (coin) => typeof coin.data?.price_change_percentage_24h?.['usd'] === 'number',
  );

  // Sort by 24h USD change (descending)
  validCoins.sort(
    (a, b) =>
      (b.data?.price_change_percentage_24h?.['usd'] ?? 0) -
      (a.data?.price_change_percentage_24h?.['usd'] ?? 0),
  );

  // Return top N full CoinItem objects
  return validCoins.slice(0, top);
}
