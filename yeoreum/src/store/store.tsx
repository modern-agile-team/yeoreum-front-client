import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from './modules/login';
import modalReducer from './modules/modal';

const rootReducer = {
  modal: modalReducer,
  login: loginSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
