import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ErrorToastState {
    text: string;
    time: number;
}

const initialState: ErrorToastState = {
    text: '',
    time: 0,
};

export const errorToastSlice = createSlice({
    name: 'errorToast',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<[string, number]>) => {
            state.text = action.payload[0];
            state.time = action.payload[1];
        },
        end: state => {
            state.text = '';
            state.time = 0;
        },
    },
});
export const { set, end } = errorToastSlice.actions;

export default errorToastSlice.reducer;
