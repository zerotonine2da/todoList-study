import { configureStore } from '@reduxjs/toolkit';
import todos from '../module/todoSlice';
import darkMode from '../module/darkMode';

const store = configureStore({
    reducer: { todos, darkMode },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
