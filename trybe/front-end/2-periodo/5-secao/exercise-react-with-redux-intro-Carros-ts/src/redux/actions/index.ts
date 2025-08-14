import { Cars } from '../../types';

export const MOVE_CAR = 'MOVE_CAR';

export const moveCar = (car: Cars) => ({
  type: MOVE_CAR,
  payload: {
    car,
  },
});
