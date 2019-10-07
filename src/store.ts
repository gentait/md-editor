import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from "redux-starter-kit";
import logger from "redux-logger";
import menusModules from "./modules/menusModule";

// rootReducer の準備
const rootReducer = combineReducers({
  menus: menusModules.reducer
});

// setup 関数を用意してエクスポートする。
export const setupStore = () => {
  const middlewares = [...getDefaultMiddleware(), logger];

  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares
  });
  return store;
};
