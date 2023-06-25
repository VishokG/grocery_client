import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {value: new Map()},
    reducers: {
        addItemToCart: (state, action) => {
            if(!state.value.get(action.payload.id)) {
                state.value.set(action.payload.id, 1);
            } else {
                state.value.set(action.payload.id, state.value.get(action.payload.id) + 1);
            }
        },
        deleteItemFromCart: (state, action) => {
            if(state.value.get(action.payload.id) == 1) {
                state.value.delete(action.payload.id);
            } else {
                state.value.set(action.payload.id, state.value.get(action.payload.id) - 1);
            }
        }
    }
})

export const { addItemToCart, deleteItemToCart } = cartSlice.actions;
export default cartSlice.reducer;