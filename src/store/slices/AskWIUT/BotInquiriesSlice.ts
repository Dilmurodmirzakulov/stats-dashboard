import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BotInquiriesData } from "../../../api";

export interface BotInquiries {
  botInquiries: BotInquiriesData[];
}

const initialState: BotInquiries = {
  botInquiries: [],
};

const botInquiriesSlice = createSlice({
  name: "botInquiries",
  initialState,
  reducers: {
    setBotInquiries(state, action: PayloadAction<BotInquiriesData[]>) {
      state.botInquiries = action.payload;
    },
  },
});

export const { setBotInquiries } = botInquiriesSlice.actions;
export default botInquiriesSlice.reducer;
