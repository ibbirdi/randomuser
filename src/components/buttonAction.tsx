import { ReactNode } from 'react';

interface buttonActionInterface {
    icon: ReactNode
    label: string
    onClickHandler: React.MouseEventHandler<HTMLButtonElement>
};

const ButtonAction: React.FC<buttonActionInterface> = ({ icon, label, onClickHandler }) => {
    return (
        <button className="bg-blue-800/100 hover:bg-blue-900/100 focus:outline-none text-white font-bold py-2 px-4 rounded-full mx-2 mb-1" onClick={onClickHandler}>
            <span className="flex leading-4">
                <span className='pt-0'>
                    <svg className={`animate-spin -ml-1 mr-3 h-5 w-5 text-white ${(false) ? '' : 'hidden' }`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                { icon }</span><span className="hidden md:block lg:block pl-1">{ label }</span>
            </span>
        </button>
    );
};

export default ButtonAction;