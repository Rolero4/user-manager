import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsersFromApi } from "../../api/user.api";
import { User } from "../../models/user.model";

type UsersState = {
    users: User[];
    loading: boolean;
    error: string | null;
};

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const users = await fetchUsersFromApi();
    return users;
});

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchUsers.fulfilled,
                (state, action: PayloadAction<User[]>) => {
                    state.loading = false;
                    state.users = action.payload;
                }
            )
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch users";
            });
    },
});

export default usersSlice.reducer;
