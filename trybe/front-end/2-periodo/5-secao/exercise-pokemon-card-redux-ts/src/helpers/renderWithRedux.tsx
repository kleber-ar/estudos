import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  Store,
} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/reducer';

const getStore = (initialState: any) => createStore(
  combineReducers({ reducer }),
  initialState,
  applyMiddleware(thunk),
);

type Options = {
  initialState?: any,
  store?: Store,
};

const renderWithRedux = (
  component: ReactElement,
  { initialState, store = getStore(initialState) }: Options = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store,
});

export default renderWithRedux;
