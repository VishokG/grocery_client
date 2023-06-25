import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: "wishList",
    initialState: {value: new Map()},
    reducers: {
        addItemToWishList: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        deleteItemFromWishList: (state, action) => {
            
        }
    }
})

export const { addItemToWishList, deleteItemFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;