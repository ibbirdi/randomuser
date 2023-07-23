// Import Icons
import { MdLocationPin, MdOutlineMailOutline, MdSettingsCell, MdOutlineLocalPhone, MdHome } from 'react-icons/md';
// Import Types
import UserInterface from '../types/userInterface';

const User: React.FC<UserInterface> = ({ name, picture, location, email, gender, phone, cell }) => {
    return (
        <div className="flex justify-center items-center w-full max-w-7xl h-auto flex-wrap mx-auto py-16">
            <div
                id="profile"
                className="rounded-lg shadow-2xl opacity-75 mx-6 lg bg-white w-[36rem] fade-in-down_1s_ease-in-out"
            >
                <div className="p-5 md:p-12 text-center">
                    <div
                        className={`block rounded-full shadow-xl mx-auto -mt-16 lg:-mt-28 h-48 w-48 bg-cover bg-center border-2 ${(gender === 'male') ? 'border-blue-900' : 'border-fuchsia-400'}`}
                        style={{
                        backgroundImage: `url(${picture.large})`,
                        }}
                    ></div>

                    <h1 className="text-3xl font-bold pt-8">{ `${name.title} ${name.first} ${name.last}` }</h1>
                    <div className="mx-auto lg:mx-0 w-4/5 lg:w-full pt-3 border-b-2 border-blue-900 opacity-25"></div>
                    <div className="pt-4 text-base font-bold flex items-center justify-center">
                        <span className='h-4 fill-current text-blue-900 pr-4 text-lg'><MdOutlineMailOutline /></span>
                        { email }
                    </div>
                    <div className="pt-5 text-gray-600 text-xs lg:text-sm items-center justify-center">
                        <div className='flex justify-center pb-5'>
                            <span className='h-4 fill-current text-blue-900 pr-4 text-xl'><MdHome /></span>
                            <span className='font-bold'>{ location.country } / {location.city}</span>
                        </div>
                        <div className='flex justify-center'>
                            <span className='h-4 fill-current text-blue-900 pr-4 text-xl'><MdLocationPin /></span>
                            {location.coordinates.latitude}° N, {location.coordinates.longitude}° W
                        </div>
                    </div>
                    <div className="py-2 text-sm">
                        <p className="pt-4 text-base flex items-center justify-center">
                            <span className='h-4 fill-current text-blue-900 pr-4 text-xl'><MdSettingsCell /></span>{ phone }
                        </p>
                        <p className="pt-4 text-base flex items-center justify-center">
                            <span className='h-4 fill-current text-blue-900 pr-4 text-xl'><MdOutlineLocalPhone /></span>{ cell }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;