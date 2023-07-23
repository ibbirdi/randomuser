import axios from 'axios';
import { useAppDispatch } from '../helpers/hooks';
import { addUser, clearAllUsers } from '../store/usersSlice';
import { disableLoader, enableLoader } from '../store/loaderSlice';
// Import Components
import { MdPersonAdd, MdPersonOff } from 'react-icons/md';
import ButtonAction from './buttonAction';
import { showError, hideError } from '../store/errorSlice';

const UsersActions: React.FC = () => {
    const dispatch = useAppDispatch();
    const baseApiUrl: string = import.meta.env.VITE_API_URL || 'https://randomuser.me/api/';
    const handleClickaddUserAction = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        dispatch(enableLoader());
        dispatch(hideError());
        // Get random user Action from API
        axios.get(baseApiUrl)
            .then(function (response) {
                // handle success
                // dispatch store addUser action
                dispatch(addUser(response.data.results[0]));
                dispatch(disableLoader());
            })
            .catch(function (error) {
                // handle error
                dispatch(showError());
                dispatch(disableLoader());
                console.log(error);
            });
    };

    const handleClickClearUsersAction = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        dispatch(hideError());
        dispatch(enableLoader());
        dispatch(clearAllUsers([]));
        dispatch(disableLoader());
    };

    return (
        <>
            <div className="flex justify-end">
                <ButtonAction icon={<MdPersonAdd />} label='Add' onClickHandler={handleClickaddUserAction} />
                <ButtonAction icon={<MdPersonOff />} label='Clear' onClickHandler={handleClickClearUsersAction} />
            </div>
        </>
    );
};

export default UsersActions;