import { cleanup, render, screen } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event'; 
// Import Components
import App from './App';

const initalStoreState = {
    users: {
        value: []
    },
    loader: {
        value: false
    },
    error: {
        value: false
    }
};

const mockStore = configureStore([]);
const mockedStore = mockStore(initalStoreState);

describe('Random Users App Tests', () => {
    const user = userEvent.setup();

    beforeEach(() => {
        render(<Provider store={mockedStore}><App/></Provider>);
    });

    afterEach(() => {
        cleanup();
    });

    it('Should Render App', async () => {
        const defaultText = screen.getByRole('heading', {
            name: /please add a new user/i
        });
        expect(defaultText).toBeInTheDocument();
    });

    it('Should Render Add Button', async () => {
        const addButton = screen.getByRole('button', {
            name: /add/i
        })
        expect(addButton).toBeInTheDocument();
        await user.click(addButton);
    });

    it('Should Render Clear Button', async () => {
        const clearButton = screen.getByRole('button', {
            name: /clear/i
        })
        expect(clearButton).toBeInTheDocument();
        await user.click(clearButton);
    });
});