import { configureStore } from "@reduxjs/toolkit"
import userReducer, { userReducerTypes } from "./slice/userSlice"
import taskReducer, {taskSliceTypes} from './slice/taskSlice'
export const store = configureStore({
    reducer: {
        user: userReducer,
        tasks: taskReducer
    }
})

export type RootState = {
    user:userReducerTypes,
    tasks:taskSliceTypes
}

export type AppDispatch = typeof store.dispatch