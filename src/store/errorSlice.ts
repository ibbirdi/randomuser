import { createSlice } from '@reduxjs/toolkit';

interface loaderInterface {
    value: boolean
};

const initialErrorState: loaderInterface = {
    value: false
};

const usersSlice = createSlice({
    name: 'error',
    initialState: initialErrorState,
    reducers: {
        showError: (state) => {
            state.value = true;
        },
        hideError: (state) => {
            state.value = false;
        }
    }
});

export const { showError, hideError } = usersSlice.actions;
export default usersSlice.reducer;