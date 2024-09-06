import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../services/filters/filters.slice";
import usersReducer from "../services/users/user.slice";

const store = configureStore({
    reducer: {
        users: usersReducer,
        filters: filterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
