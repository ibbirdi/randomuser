import { configureStore } from '@reduxjs/toolkit';
// Import Slices
import usersSlice from './usersSlice';
import loaderSlice from './loaderSlice';
import errorSlice from './errorSlice';

export const store = configureStore({
    reducer: {
        users: usersSlice,
        loader: loaderSlice,
        error: errorSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;