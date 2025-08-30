const TIERS = [
  { min: 1,   max: 9,         pct: 0 },
  { min: 10,  max: 49,        pct: 10 },
  { min: 50,  max: 99,        pct: 18 },
  { min: 100, max: Infinity,  pct: 25 },
] as const;

export function calcPricePerSeat(base: number, seats: number) {
  const tier = TIERS.find((t) => seats >= t.min && seats <= t.max) ?? TIERS[0];
  const discount = (base * tier.pct) / 100;
  return Math.round(base - discount);
}
