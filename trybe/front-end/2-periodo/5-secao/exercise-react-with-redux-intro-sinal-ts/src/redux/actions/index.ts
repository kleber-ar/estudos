import { Signals } from '../../types';

export const CHANGE_SIGNAL = 'CHANGE_SIGNAL';

export const changeSignal = (payload: Signals) => ({
  type: CHANGE_SIGNAL,
  payload,
});
