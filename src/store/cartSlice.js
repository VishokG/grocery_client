import { createSlice } from "@reduxjs/toolkit";

// const cartstructure = [
//     id,
//     quantity,
//     stock,
//     img,
//     name,
//     offer: { if exists or else {}
//         id,
//         img,
//         name
//         desc,
//         quantity
//     }
// ];

const cartSlice = createSlice({
    name: "cart",
    initialState: {value: [{
      id: 431,
      img: 'https://py-shopping-cart.s3.eu-west-2.amazonaws.com/bananas.jpeg',
      name: 'Bananas',
      price: '£2',
      quantity: 3,
      available: 9,
      offer: {
      id: 432,
        img: 'https://py-shopping-cart.s3.eu-west-2.amazonaws.com/apples.jpeg',
        name: 'Crispy Pink Lady Apples',
        price: '£0.50',
        product1_quantity_required: 4,
        product2_quantity: 1,
        desc: "Get 1 Apple free for the purchase of 4 bananas"
        },
    }]},
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