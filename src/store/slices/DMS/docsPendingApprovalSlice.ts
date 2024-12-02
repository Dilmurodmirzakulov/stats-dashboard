import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DocsPendingApprovalData } from "../../../api";

export interface DocsPendingApproval {
    docsPendingApproval: DocsPendingApprovalData[]
}

const initialState: DocsPendingApproval = {
    docsPendingApproval: []
};

const docsPendingApprovalSlice = createSlice({
  name: 'docsPendingApproval',
  initialState,
  reducers: {
    setDocsPendingApproval(state, action: PayloadAction<DocsPendingApprovalData[]>) {
      state.docsPendingApproval = action.payload;
    },
  },
});

export const { setDocsPendingApproval } = docsPendingApprovalSlice.actions;
export default docsPendingApprovalSlice.reducer;