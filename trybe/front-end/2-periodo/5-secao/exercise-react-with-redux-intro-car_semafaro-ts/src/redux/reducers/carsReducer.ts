import { ActionType } from '../../types';
import { MOVE_CAR } from '../actions';

const INITIAL_STATE = {
  redCar: false,
  blueCar: false,
  yellowCar: false,
};

function reducer(
  state = INITIAL_STATE,
  action: ActionType,
) {
  switch (action.type) {
    case MOVE_CAR:
      return {
        ...state,
        [action.payload.car]: !state[action.payload.car],
      };
    default:
      return state;
  }
}

export default reducer;
