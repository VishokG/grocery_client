import { createSlice } from "@reduxjs/toolkit";

//Category slice is used for current category to be used for filtering data retrieved from API
const categorySlice = createSlice({
    name: "category",
    initialState: {value: "all"},
    reducers: {
        setCategory: (state, action) => {
            switch(action.payload) {
                case "ALL": state.value = "all";
                break;
                case "DRINKS": state.value = "drinks";
                break;
                case "FRUIT": state.value = "fruit";
                break;
                case "BAKERY": state.value = "bakery";
                break;
                default: ;
            }
        }
    }
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;