import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
export const setThemeReduxAsync = createAsyncThunk('theme/async', async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 100);
  });
  return;
});
export const commonSlice = createSlice<CommonState, typeof reducers>({
  name: 'common',
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder.addCase(setThemeReduxAsync.fulfilled, (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    });
  },
});
export const { setTheme } = commonSlice.actions;
const commonReducer = commonSlice.reducer;
export default commonReducer;
