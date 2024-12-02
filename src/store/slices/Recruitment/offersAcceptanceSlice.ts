import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OffersAcceptanceData } from "../../../api";

export interface OffersAcceptance {
    offersAcceptance: OffersAcceptanceData[]
}

const initialState: OffersAcceptance = {
    offersAcceptance: []
};

const offersAcceptanceSlice = createSlice({
  name: 'offersAcceptance',
  initialState,
  reducers: {
    setOffersAcceptance(state, action: PayloadAction<OffersAcceptanceData[]>) {
      state.offersAcceptance = action.payload;
    },
  },
});

export const { setOffersAcceptance } = offersAcceptanceSlice.actions;
export default offersAcceptanceSlice.reducer;