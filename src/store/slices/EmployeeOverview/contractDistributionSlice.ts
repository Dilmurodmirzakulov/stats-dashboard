import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContractDistData } from "../../../api";

export interface ContractDists {
    contractDists: ContractDistData[]
}

const initialState: ContractDists = {
    contractDists: []
};

const contractDistsSlice = createSlice({
  name: 'contractDists',
  initialState,
  reducers: {
    setContractDists(state, action: PayloadAction<ContractDistData[]>) {
      state.contractDists = action.payload;
    },
  },
});

export const { setContractDists } = contractDistsSlice.actions;
export default contractDistsSlice.reducer;