import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActiveUserData } from "../../../api";

export interface ActiveUsers {
    activeUsers: ActiveUserData[]
}

const initialState: ActiveUsers = {
    activeUsers: []
};

const activeUsersSlice = createSlice({
  name: 'activeUsers',
  initialState,
  reducers: {
    setActiveUsers(state, action: PayloadAction<ActiveUserData[]>) {
      state.activeUsers = action.payload;
    },
  },
});

export const { setActiveUsers } = activeUsersSlice.actions;
export default activeUsersSlice.reducer;