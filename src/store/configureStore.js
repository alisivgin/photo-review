import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";

import * as reducers from "./reducers";
import { getRandomPhoto } from "./sagas";

export const rootReducer = combineReducers(reducers);

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(getRandomPhoto);
  return { store, persistor };
};

export default configureStore;
