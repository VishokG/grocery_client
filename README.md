# Grocery E Commerce Website


 #### Redux/@toolkit
- Three slices are present in redux: Cart, Search and Category
- cartSlice is responisble for storing the items of the cart
- searchSlice stores the search text used for filtering
- categorySlice stores category based on which data is retrieved
- Wishlist is an unimplemented feature which is almost identical to cart

#### Search
- Search is part of the header component and is present in all pages (Header is fixed at the top as part of the layout)
- The functionality is simple and filters based on product name and description. It checks if the text includes search query

#### Navigation provided by React-router-dom
#### Checkout calculates subtotal, discount from offers and total