import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DocsByTypeData } from "../../../api";

export interface DocsByType {
    docsByType: DocsByTypeData[]
}

const initialState: DocsByType = {
    docsByType: []
};

const docsByTypeSlice = createSlice({
  name: 'docsByType',
  initialState,
  reducers: {
    setDocsByType(state, action: PayloadAction<DocsByTypeData[]>) {
      state.docsByType = action.payload;
    },
  },
});

export const { setDocsByType } = docsByTypeSlice.actions;
export default docsByTypeSlice.reducer;