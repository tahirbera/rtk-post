import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Tahir Bera'},
    { id: '1', name: 'Bera Dev'},
    { id: '2', name: 'ReduxToolkit Admin'},
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer