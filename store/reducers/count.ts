import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppThunk } from '@store/index';

interface CountState {
  count: number;
}

const initialState: CountState = {
  count: 0,
};
const reducers = {
  increment: (state: CountState) => {
    state.count++;
  },
  decrement: (state: CountState) => {
    state.count--;
  },
  incrementByAmount: (state, action: PayloadAction<number>) => {
    state.count += action.payload;
  },
  set: (state: CountState, action: PayloadAction<number>) => {
    state.count = action.payload;
  },
};
export const incrementAsync =
  (count: number): AppThunk =>
  async (dispatch, getState) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
    await dispatch(incrementByAmount(count));
  };

export const countSlice = createSlice<CountState, typeof reducers>({
  name: 'count',
  initialState,
  reducers,
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.count,
      };
    },
  },
});
export const { increment, decrement, incrementByAmount, set } = countSlice.actions;
const countReducer = countSlice.reducer;
export default countReducer;
