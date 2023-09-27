import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import trackingOrderSlice from "../slice/Bosta-Slice"


export const store = configureStore({
    reducer: {
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