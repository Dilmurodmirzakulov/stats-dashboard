import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OffersData } from "../../../api";

export interface Offers {
    offers: OffersData[]
}

const initialState: Offers = {
    offers: []
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setOffers(state, action: PayloadAction<OffersData[]>) {
      state.offers = action.payload;
    },
  },
});

export const { setOffers } = offersSlice.actions;
export default offersSlice.reducer;