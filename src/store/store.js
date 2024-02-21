import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";

const middleWares = [logger];
const composeEnhancers = compose(applyMiddleware(...middleWares));

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};
console.log (process.env )

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store);
