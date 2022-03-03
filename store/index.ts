import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import countReducer from '@store/reducers/count';
import commonReducer from '@store/reducers/common';
import { createWrapper } from 'next-redux-wrapper';

export function makeStore() {
  return configureStore({
    reducer: { count: countReducer, common: commonReducer },
    devTools: true,
  });
}

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const wrapper = createWrapper<AppStore>(makeStore);
