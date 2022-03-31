export const DirectionType = {
  Top: "top",
  Right: "right",
  Left: "left",
  Bottom: "bottom",
} as const;

export type Direction = typeof DirectionType[keyof typeof DirectionType];
