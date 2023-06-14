import { configureStore } from "@reduxjs/toolkit"
import product from "./slice/productSlice"
import user from "./slice/userSlice"

const store = configureStore({
    reducer:{
        product:product,
        user:user
    }
})

export default store;