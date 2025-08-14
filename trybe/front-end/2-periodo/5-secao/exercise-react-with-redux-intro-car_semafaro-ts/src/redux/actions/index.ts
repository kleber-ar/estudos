import { Cars, Signals } from '../../types';

export const CHANGE_SIGNAL = 'CHANGE_SIGNAL';
export const MOVE_CAR = 'MOVE_CAR';

export const changeSignal = (payload: Signals) => ({
  type: CHANGE_SIGNAL,
  payload,
});

export const moveCar = (car: Cars) => ({
  type: MOVE_CAR,
  payload: {
    car,
  },
});
