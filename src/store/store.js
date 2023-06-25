import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";
import categoryReducer from "./categorySlice";

export default configureStore({
    reducer: {
        // cart: cartReducer,
        // wishlist: wishlistReducer,
        category: categoryReducer
    }
});

