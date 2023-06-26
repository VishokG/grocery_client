import { createSlice } from "@reduxjs/toolkit";

// const cartstructure = [
//     id,
//     quantity,
//     img,
//     name,
//     offer: { if exists or else {}
//         id,
//         desc,
//         quantity
//     }
// ];

const cartSlice = createSlice({
    name: "cart",
    initialState: {value: []},
    reducers: {
        addItemToCart: (state, action) => {
            const index = state.value.findIndex((obj => obj.id === action.payload.id));
            if(index === -1) {
                state.value.push({...action.payload, quantity: 1});
            } else {
                state.value[index].quantity++;
            }
        },
        deleteItemFromCart: (state, action) => {
            const index = state.value.findIndex((obj => obj.id === action.payload));
            if(state.value[index].quantity === 1) {
                state.value.splice(index, 1);
            } else {
                state.value[index].quantity--;
            }
        }
    }
})

export const { addItemToCart, deleteItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;