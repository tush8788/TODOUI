import { createSlice } from "@reduxjs/toolkit";

export type userReducerTypes = {
    name: string,
    email: string,
    token: string
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        email: '',
        token: ''
    } as userReducerTypes,
    reducers: {
        updateUser: (state, action) => {
            const { email, name, token } = action.payload
            state.email = email;
            state.name = name;
            state.token = token
        }
    }
})

export const { updateUser } = userSlice.actions
export default userSlice.reducer