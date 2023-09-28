import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import trackingOrderSlice from "../slice/bosta_slice"
import langReducer from '../slice/lang_slice';

export const store = configureStore({
    reducer: {
      lang: langReducer,
        shipping: trackingOrderSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;