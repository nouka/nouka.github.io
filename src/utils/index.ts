import { Direction, DirectionType } from "../types/Direction";
import { Position } from "../types/Position";

/**
 * srcをminとmaxの間に収まる数字に変換する
 */
const range = (src: number, min: number, max: number) => {
  return Math.min(Math.max(src, min), max);
};

/**
 * srcがminとmaxの間に収まっているか
 */
const inRange = (src: number, min: number, max: number) => {
  return src >= min && src <= max;
};

/**
 * 2地点の座標から方位を返す
 */
const getDirection = (p1: Position, p2: Position): Direction => {
  const degree = Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI);
  if (degree > -135 && degree <= -45) {
    return DirectionType.Top;
  } else if (degree > -45 && degree <= 45) {
    return DirectionType.Right;
  } else if (degree > 45 && degree <= 135) {
    return DirectionType.Bottom;
  } else if (degree > 135 || degree <= -135) {
    return DirectionType.Left;
  }
  throw Error("Unexpected radian.");
};

export { range, inRange, getDirection };
