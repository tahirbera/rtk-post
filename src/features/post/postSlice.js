import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';


const initialState = [
    {
        id: 0,
        title: 'First Post',
        content: 'This is first post of data-flow project.',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        },
        userId: '1'

    },
    {
        id: 1,
        title: 'Second Post',
        content: 'Second post about life...',
        date: sub(new Date(), { minutes: 5 }).toISOString(),

        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        },
        userId: '0'
    },
]

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer(state, action){
                state.push(action.payload);
            },        
            prepare({title, content, userId}) {
            return {
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    userId,
                    date: new Date().toISOString(),
                    reactions: {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                     },                    
                 }
              }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
})


export const selectAllPosts = (state) => state.posts; 

export const { addPost, reactionAdded } = postSlice.actions;


export default postSlice.reducer