import { createSlice } from "@reduxjs/toolkit";

//Used for storing the search text
//Redux is required as the search bar is not restricted to one page
const searchSlice = createSlice({
    name: "search",
    initialState: {value: ""},
    reducers: {
        setSearchText: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setSearchText } = searchSlice.actions;
export default searchSlice.reducer;