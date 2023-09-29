import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Shipment } from "../types/types"

export const getTrackingOrders = createAsyncThunk<any,any>(
    "bosta/getstatus",
    async ( id , thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const response = await axios.get
        (
            `https://tracking.bosta.co/shipments/track/${id}`)
            console.log("sliceeeeeeeee ", response.data);
        return response.data;
      } catch ({ response } : any ) {
        if (response.status === 400 || response.status === 401) {
            console.log("not found");
        }
        return rejectWithValue(response.data);
      }
    }
  );
  
  interface InitialState{
    shippings: Shipment ;
    loading:boolean;
    isSuccess:boolean|null;
    errors:boolean|null;
  }
  
  const initialState:InitialState = {
    shippings: {} as Shipment ,
    loading: true,
    isSuccess: null,
    errors: null,
  };

  const trackingOrderSlice = createSlice({
    name: "shipping",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getTrackingOrders.pending, (state) => {
            state.loading = true;
            state.errors = null;
          })
          .addCase(getTrackingOrders.fulfilled, (state : any, action) => {
            state.loading = false;
            state.isSuccess = true;
            state.trackingOrdersNums = action.payload;
          })
          .addCase(getTrackingOrders.rejected, (state : any, action) => {
            state.loading = false;
            state.errors = action.payload;
          });
    },
  });

  export default trackingOrderSlice.reducer;
