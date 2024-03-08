import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        todoAdded(state, action) {
            console.log(state);
            console.log(action.payload);
        }
    }
})

export const { todoAdded } = todosSlice.actions
export default todosSlice.reducer