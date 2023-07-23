// Import Components
import UsersActions from "./usersActions";

const Header: React.FC = () => {
    return (
        <nav className="fixed z-50 w-full bg-white top-0 flex flex-wrap items-center justify-between px-2 py-3 shadow-lg">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block md:justify-start">
                    <a
                        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-blue-700"
                    >
                        Random Users
                    </a>
                </div>
                <div
                    className="lg:flex flex-grow items-center"
                >
                    <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <UsersActions />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
