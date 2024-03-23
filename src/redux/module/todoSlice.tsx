import { createSlice } from '@reduxjs/toolkit';
import uuid4 from 'uuid4';

export interface Todo {
    title: string;
    content: string;
    isDone: boolean;
    id: string;
}

const initialState: Todo[] = [
    {
        title: 'Redux Toolkit Todo',
        content: '툴킷',
        isDone: false,
        id: uuid4(),
    },
    {
        title: 'Next Todo...',
        content: '오예',
        isDone: true,
        id: uuid4(),
    },
];

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        getTodos(state, action) {
            state.push(action.payload);
        },
        deleteTodos() {},
    },
});

export const { getTodos, deleteTodos } = todoSlice.actions;
export default todoSlice.reducer;
