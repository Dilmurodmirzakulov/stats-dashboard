import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TopTenSignedPersonelData } from "../../../api";

export interface TopTenSignedPersonel {
    topTenSignedPersonel: TopTenSignedPersonelData[]
}

const initialState: TopTenSignedPersonel = {
    topTenSignedPersonel: []
};

const topTenSignedPersonelSlice = createSlice({
  name: 'topTenSignedPersonel',
  initialState,
  reducers: {
    setTopTenSignedPersonel(state, action: PayloadAction<TopTenSignedPersonelData[]>) {
      state.topTenSignedPersonel = action.payload;
    },
  },
});

export const { setTopTenSignedPersonel } = topTenSignedPersonelSlice.actions;
export default topTenSignedPersonelSlice.reducer;