import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DocsStatusDistData } from "../../../api";

export interface DocsStatusDist {
    docsStatusDist: DocsStatusDistData[]
}

const initialState: DocsStatusDist = {
    docsStatusDist: []
};

const docsStatusDistSlice = createSlice({
  name: 'docsStatusDist',
  initialState,
  reducers: {
    setDocsStatusDist(state, action: PayloadAction<DocsStatusDistData[]>) {
      state.docsStatusDist = action.payload;
    },
  },
});

export const { setDocsStatusDist } = docsStatusDistSlice.actions;
export default docsStatusDistSlice.reducer;