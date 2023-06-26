import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";
import categoryReducer from "./categorySlice";
import searchReducer from "./searchSlice";

export default configureStore({
    reducer: {
        cart: cartReducer,
        // wishlist: wishlistReducer,
        search: searchReducer,
        category: categoryReducer
    }
});

