import { createSlice } from "@reduxjs/toolkit";

const intitialCart = [
    {
        id: 642,
        name: "Coca-Cola",
        img: "https://py-shopping-cart.s3.eu-west-2.amazonaws.com/coca-cola.jpeg",
        price: "£0.99",
        available: 10,
        quantity: 1,
        offer: {
            name: "Coca-Cola",
            img: "https://py-shopping-cart.s3.eu-west-2.amazonaws.com/coca-cola.jpeg",
            price: "£0.99",
            product1_quantity_required: 6,
            product2_quantity: 1,
            desc: "Buy 6 cans of Coca-Cola, and get one free"
        }
    },
    {
        id: 532,
        name: "Croissants",
        img: "https://py-shopping-cart.s3.eu-west-2.amazonaws.com/croissants.jpeg",
        price: "£3.50",
        available: 9,
        quantity: 1,
        offer: {
            name: "Coffee",
            img: "https://py-shopping-cart.s3.eu-west-2.amazonaws.com/coffee.jpeg",
            price: "£0.65",
            product1_quantity_required: 3,
            product2_quantity: 1,
            desc: "Buy 3 croissants and get a free coffee"
        }
    }

]

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: intitialCart
    },
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
        },
        deleteAllUnitsFromCart: (state, action) => {
            const index = state.value.findIndex((obj => obj.id === action.payload));
            state.value.splice(index, 1);
        }
    }
})

export const { addItemToCart, deleteItemFromCart, deleteAllUnitsFromCart } = cartSlice.actions;
export default cartSlice.reducer;