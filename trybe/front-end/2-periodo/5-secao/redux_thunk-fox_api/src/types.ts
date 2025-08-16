
import type { ThunkDispatch } from 'redux-thunk';
import type { AnyAction } from 'redux';


export type ReduxState = {
  useDefaultImg: boolean;
  imgURL: string;
  isLoading: boolean;
};

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;
