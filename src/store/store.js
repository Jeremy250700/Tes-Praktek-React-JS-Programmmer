import { configureStore } from "@reduxjs/toolkit"
import produkSlice from "./produkSlice"

const store = configureStore({
    reducer:{
        produks: produkSlice
    }
})

export default store