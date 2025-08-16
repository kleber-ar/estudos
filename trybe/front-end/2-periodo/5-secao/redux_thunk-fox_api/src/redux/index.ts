import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import gallery from './reducers/gallery';
import { thunk } from 'redux-thunk';

const store = createStore(gallery, applyMiddleware(thunk));

export default store;
