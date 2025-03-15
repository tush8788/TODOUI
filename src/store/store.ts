import { configureStore } from "@reduxjs/toolkit"
import userReducer, { userReducerTypes } from "./slice/userSlice"

export const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export type RootState = {
    user:userReducerTypes
}

export type AppDispatch = typeof store.dispatch