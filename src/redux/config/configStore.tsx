import { configureStore } from '@reduxjs/toolkit';
import todos from '../module/todoSlice';
import darkMode from '../module/darkMode';
import alert from '../module/alertSlice';

const store = configureStore({
    reducer: { todos, darkMode, alert },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
