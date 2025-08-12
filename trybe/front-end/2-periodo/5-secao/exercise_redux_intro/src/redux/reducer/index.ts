import { AnyAction } from 'redux'
import { getRandomColor } from '../../utils';
import { NEXT_COLOR, PREVIOUS_COLOR, RANDOM_COLOR } from '../actions';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case NEXT_COLOR:
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };

    case PREVIOUS_COLOR:
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };

    case RANDOM_COLOR:
      return {
        ...state,
        colors: [...state.colors, getRandomColor()],
        index: state.colors.length,
      };
    default:
      return state;
  }
};

export default reducer;
