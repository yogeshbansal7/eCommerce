import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slices/CartSlice";

const store = configureStore({
    reducer:{
        cart : cartSlice,
    }
})

export default store;