import { createSlice } from '@reduxjs/toolkit';
import uuid4 from 'uuid4';
import { Todo } from '../../type/Todo';

const initialState: Todo[] = [
    {
        title: 'Redux Toolkit Todo',
        content: '만들기',
        isDone: true,
        id: uuid4(),
    },
    {
        title: 'Next Todo...',
        content: '오예',
        isDone: false,
        id: uuid4(),
    },
    {
        title: '수영가기',
        content: '저녁 8시',
        isDone: false,
        id: uuid4(),
    },
    {
        title: '점심먹기',
        content: '고등어구이 냠',
        isDone: false,
        id: uuid4(),
    },
];

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodos(state, action) {
            state.push(action.payload);
        },
        deleteTodos(state, action) {
            return state.filter((todo) => todo.id !== action.payload);
        },
        switchTodoState(state, action) {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, isDone: !todo.isDone };
                } else {
                    return todo;
                }
            });
        },
    },
});

export const { addTodos, deleteTodos, switchTodoState } = todoSlice.actions;
export default todoSlice.reducer;
