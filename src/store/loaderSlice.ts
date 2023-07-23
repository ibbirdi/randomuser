import { createSlice } from '@reduxjs/toolkit';

interface loaderInterface {
    value: boolean
};

const initialUsersState: loaderInterface = {
    value: false
};

const usersSlice = createSlice({
    name: 'loader',
    initialState: initialUsersState,
    reducers: {
        enableLoader: (state) => {
            state.value = true;
        },
        disableLoader: (state) => {
            state.value = false;
        }
    }
});

export const { enableLoader, disableLoader } = usersSlice.actions;
export default usersSlice.reducer;