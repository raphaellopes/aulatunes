import { createStore, compose, applyMiddleware } from 'redux';
import '../config/reactotron';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSagas } from './ducks';

const isDevelopment = process.env.NODE_ENV === 'development';

const sagaMonitor = isDevelopment ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [sagaMiddleware];

const composer = isDevelopment
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...middlewares);

const store = createStore(rootReducer, composer);

sagaMiddleware.run(rootSagas);

export default store;
