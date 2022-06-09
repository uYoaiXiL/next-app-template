import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from '@store/index';

interface CommonState {
  theme: 'dark' | 'light';
}

const initialState: CommonState = {
  theme: 'light',
};
const reducers = {
  setTheme: (state) => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
  },
};
export const setThemeAsync = (): AppThunk => async (dispatch, getState) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 100);
  });
  await dispatch(setTheme());
};
export const commonSlice = createSlice<CommonState, typeof reducers>({
  name: 'common',
  initialState,
  reducers,
});
export const { setTheme } = commonSlice.actions;
const commonReducer = commonSlice.reducer;
export default commonReducer;
