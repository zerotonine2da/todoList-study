import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
    name: 'alert',
    initialState: false,
    reducers: {
        closeAlert(state, action) {
            if (action.payload) {
                console.log('true');
                return (state = false);
            } else {
                console.log('false');
                return (state = true);
            }
        },
    },
});

export const { closeAlert } = alertSlice.actions;
export default alertSlice.reducer;
