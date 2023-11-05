const { createSlice } = require("@reduxjs/toolkit");

const filterSlise = createSlice({
    name: "filter",
    initialState: { value: "" },
    reducers: { onChangeFilter(state, action) {
        state.value = action.payload;
        },
    },
})

export const filterReducer = filterSlise.reducer;
export const { onChangeFilter } = filterSlise.actions;