import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './ducks';

const middlewares = [];

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...middlewares);

const store = createStore(rootReducer, composer);

export default store;
