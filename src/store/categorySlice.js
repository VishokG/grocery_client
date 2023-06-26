import { createSlice } from "@reduxjs/toolkit";

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