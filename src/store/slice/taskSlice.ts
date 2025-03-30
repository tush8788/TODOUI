import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllTasks } from "../../services/TaskService";

export type taskSliceTypes = {
    task: any[]
    status: boolean
}

export const fetchTaskList = createAsyncThunk('fetchTasks', async (_, thunkApi) => {
    try {
        let resp: any = await getAllTasks()
        console.log("task ",resp)
        return resp.data
    }
    catch (err: any) {
        thunkApi.rejectWithValue(err)
    }
})

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        task: [],
        status: false
    } as taskSliceTypes,
    reducers: {
        updateTask: (state, action) => {
            state.task = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTaskList.fulfilled, (state, action) => {
            state.task = action.payload || []
            console.log("action payload",action.payload);
            state.status = false
        }).addCase(fetchTaskList.pending, (state) => {
            state.status = true
        }).addCase(fetchTaskList.rejected, (state) => {
            state.status = false
        })
    }
})

export const { updateTask } = taskSlice.actions
export default taskSlice.reducer