import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InterviewsByCategoryData } from "../../../api";

export interface InterviewsByCategory {
    interviewsByCategory: InterviewsByCategoryData[]
}

const initialState: InterviewsByCategory = {
    interviewsByCategory: []
};

const interviewsByCategorySlice = createSlice({
  name: 'interviewsByCategory',
  initialState,
  reducers: {
    setInterviewsByCategory(state, action: PayloadAction<InterviewsByCategoryData[]>) {
      state.interviewsByCategory = action.payload;
    },
  },
});

export const { setInterviewsByCategory } = interviewsByCategorySlice.actions;
export default interviewsByCategorySlice.reducer;