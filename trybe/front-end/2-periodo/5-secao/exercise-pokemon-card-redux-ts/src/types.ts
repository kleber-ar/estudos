import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type ReduxState = {
  reducer: {
    isFetching: boolean;
    imagePath: string;
    name: string;
    error: string;
  }
};

export type Dispatch = ThunkDispatch<ReduxState, void, Action>;
