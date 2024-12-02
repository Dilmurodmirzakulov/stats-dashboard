import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BotInquiriesTrendData } from "../../../api";

export interface BotInquiriesTrend {
  botInquiriesTrend: BotInquiriesTrendData[];
}

const initialState: BotInquiriesTrend = {
  botInquiriesTrend: [],
};

const botInquiriesTrendSlice = createSlice({
  name: "botInquiriesTrend",
  initialState,
  reducers: {
    setBotInquiriesTrend(state, action: PayloadAction<BotInquiriesTrendData[]>) {
      state.botInquiriesTrend = action.payload;
    },
  },
});

export const { setBotInquiriesTrend } = botInquiriesTrendSlice.actions;
export default botInquiriesTrendSlice.reducer;
