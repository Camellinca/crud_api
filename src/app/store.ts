import { configureStore } from '@reduxjs/toolkit';
import pryanikiReducer from '../features/Pryaniky.com/lib/store/pryanikiSlice';
import errorToastReducer from '../shared/ErrorToast/lib/errorToastSlice';
import loadingReducer from '../shared/LoadingScreen/lib/loadingSlice';
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        pryaniki: pryanikiReducer,
        errorToast: errorToastReducer,
        loading: loadingReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
