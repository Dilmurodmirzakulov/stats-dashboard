import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GenderData } from "../../../api";

export interface Genders {
    genders: GenderData[]
}

const initialState: Genders = {
    genders: []
};

const genderSlice = createSlice({
  name: 'gender',
  initialState,
  reducers: {
    setGenders(state, action: PayloadAction<GenderData[]>) {
      state.genders = action.payload;
    },
  },
});

export const { setGenders } = genderSlice.actions;
export default genderSlice.reducer;