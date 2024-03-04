import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/post/postSlice";
import usersReducer from "../features/user/usersSlice"

export const store = configureStore({
    reducer: {
        posts: postReducer,
        users: usersReducer
    }
})