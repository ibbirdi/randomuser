import { createSlice } from '@reduxjs/toolkit';
// Import Types
import UserInterface from '../types/userInterface';

interface UsersInterface {
    value: UserInterface[]
};

const initialUsersState: UsersInterface = {
    value: []
};

const usersSlice = createSlice({
    name: 'users',
    initialState: initialUsersState,
    reducers: {
        addUser: (state, action) => {
            state.value = [action.payload, ...state.value];
        },
        clearAllUsers: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { addUser, clearAllUsers } = usersSlice.actions;
export default usersSlice.reducer;