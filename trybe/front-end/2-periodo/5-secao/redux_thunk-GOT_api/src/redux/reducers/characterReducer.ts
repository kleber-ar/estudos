
import type { CharacterState, CharacterType } from '../../types';

const initialState = {
  isLoading: false,
  character: null,
  error: null,
};

function characterReducer(
  state: CharacterState = initialState,
  action: { type: string; character?: CharacterType; error?: string },
) {
  switch (action.type) {
    case 'SEARCH_BEGIN':
      return {
        ...state,
        isLoading: true,
      };
    case 'SEARCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        character: action.character || null,
      };
    case 'SEARCH_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.error || 'Erro desconhecido',
      };
    default:
      return state;
  }
}

export default characterReducer;
