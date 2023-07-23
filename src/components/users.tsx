import { MdHome, MdLocationPin, MdOutlineLocalPhone, MdOutlineMailOutline, MdSettingsCell } from 'react-icons/md';
import { useAppSelector } from '../helpers/hooks';
// Import Components
import User from '../components/user';
import TextPlaceholder from './textPlaceholder';
import Loader from './loader';
import Error from './error';
// Import images
import default_avatar from '../assets/default_avatar.jpg';

const Users: React.FC = () => {
    // Get user
    const users = useAppSelector((state) => state.users.value);
    // Get loader State
    const loader = useAppSelector((state) => state.loader.value);
    // Get Error State
    const error = useAppSelector((state) => state.error.value);

    return (
        <div className='items-center h-full pt-24 lg:pt-20 scroll-smooth'>
            <Error errorState={error} />
            <Loader loaderState={loader} />
            { (users.length == 0) ?
                <div className="flex justify-center items-center max-w-7xl h-auto flex-wrap mx-auto py-16">
                    <h1 className='text-white text-lg font-bold pb-5'>Please add a new User</h1>
                    <div className="flex justify-center items-center w-full max-w-7xl h-auto flex-wrap mx-auto py-16">
                        <div
                            id="profile"
                            className="rounded-lg shadow-2xl opacity-75 mx-6 lg bg-white w-[36rem]"
                        >
                            <div className="p-5 md:p-12 text-center">
                                <div
                                    className="block rounded-full shadow-xl mx-auto -mt-16 lg:-mt-28 h-48 w-48 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${default_avatar})`,
                                    }}
                                ></div>

                                <h1 className="text-3xl font-bold pt-8"><TextPlaceholder /></h1>
                                <div className="mx-auto lg:mx-0 w-4/5 lg:w-full pt-3 border-b-2 border-blue-900 opacity-25"></div>
                                <div className="pt-4 text-base font-bold flex items-center justify-center">
                                    <span className='h-4 fill-current pr-4 text-lg'><MdOutlineMailOutline /></span>
                                    <TextPlaceholder />
                                </div>
                                <div className="pt-5 text-gray-600 text-xs lg:text-sm items-center justify-center">
                                    <div className='flex justify-center pb-5'>
                                        <span className='h-4 fill-current pr-4 text-xl'><MdHome /></span><TextPlaceholder />
                                    </div>
                                    <div className='flex justify-center'>
                                        <span className='h-4 fill-current text-blue-900 pr-4 text-xl'><MdLocationPin /></span><TextPlaceholder />
                                    </div>
                                </div>
                                <div className="py-2 text-sm">
                                    <div className="pt-4 text-base flex items-center justify-center">
                                        <span className='h-4 fill-current text-blue-900 pr-4 text-xl'><MdSettingsCell /></span><TextPlaceholder />
                                    </div>
                                    <div className="pt-4 text-base flex items-center justify-center">
                                        <span className='h-4 fill-current text-blue-900 pr-4 text-xl'><MdOutlineLocalPhone /></span><TextPlaceholder />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :
                users.length > 0 && users.map((user) =>
                    <User key={user.email} {...user} />
                )
            }
        </div>
    )   
};

export default Users;