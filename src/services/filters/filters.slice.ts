import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterKey, Filters } from "../../models/filters.model";

type FilterState = {
    filters: Filters;
};

const initialState: FilterState = {
    filters: {
        name: "",
        username: "",
        email: "",
        phone: "",
    },
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setFilter: (
            state,
            action: PayloadAction<{ field: FilterKey; value: string }>
        ) => {
            const { field, value } = action.payload;
            state.filters[field] = value;
        },
    },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
