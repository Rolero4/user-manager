import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../services/users/user.slice"; // Import the reducer

const store = configureStore({
    reducer: {
        users: usersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
