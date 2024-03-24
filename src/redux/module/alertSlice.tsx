import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
    name: 'alert',
    initialState: false,
    reducers: {
        closeAlert(state, action) {
            if (action.payload) {
                return (state = false);
            } else {
                return (state = true);
            }
        },
    },
});

export const { closeAlert } = alertSlice.actions;
export default alertSlice.reducer;
