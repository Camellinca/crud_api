import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface LoadingState {
    isLoading: boolean;
}

const initialState: LoadingState = {
    isLoading: false,
};

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoadingScreen: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});
export const { setLoadingScreen } = loadingSlice.actions;

export default loadingSlice.reducer;
