import { createSlice } from '@reduxjs/toolkit';
import uuid4 from 'uuid4';
import { Todo } from '../../type/todo';

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
        addTodos(state, action) {
            console.log(state);
            console.log(action.payload);
            state.push(action.payload);
        },
        deleteTodos(state, action) {},
    },
});

export const { addTodos, deleteTodos } = todoSlice.actions;
export default todoSlice.reducer;
