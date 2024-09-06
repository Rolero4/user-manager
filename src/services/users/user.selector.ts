import { RootState } from "../../app/store";

export const selectUsers = (state: RootState) => state.users.users;
export const selectUserLoading = (state: RootState) => state.users.loading;
export const selectUserError = (state: RootState) => state.users.error;
