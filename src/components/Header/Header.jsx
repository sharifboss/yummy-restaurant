import img from '../Header/../../image/Frame 5.png'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
    return (
        <header className="max-w-7xl mx-auto flex justify-between items-center p-4 border-gray-200 shadow-md">
            <h3 className="text-2xl font-extrabold">Recipe Calories</h3>
            {/* <div className="md:block md:w-auto" items-center font-medium flex p-4 mt-4 md:p-0 rounded md:flex-row md:space-x-8 md:mt-0 md:border-0> */}
            <nav>
                <ul className="flex space-x-8">
                    <li>
                        <a className=" text-gray-600 md:hover:text-green-700" href="#">Home</a>
                    </li>
                    <li>
                        <a className="text-gray-600 md:hover:text-green-700" href="#">Recipe</a>
                    </li>
                    <li>
                        <a className="text-gray-600 md:hover:text-green-700" href="#">About Us</a>
                    </li>
                    <li>
                        <a className=" text-gray-600 md:hover:text-green-700" href="#">Contact</a>
                    </li>
                </ul>
            </nav>
            <div className='flex items-center space-x-4'>
                <div className='relative'>
                <input type="text" id="search-navbar" className="p-2 border pl-10 rounded-full bg-zinc-100" placeholder="Search..."></input>
                <span className="absolute left-3 top-2 text-gray-500">
                        <i className="fas fa-search"></i>
                    </span>

                </div>
                <div>
                    <img className='w-8 h-8 rounded-full ' src={img} alt="" />
                </div>



            </div>



        </header>
    );
};

export default Header;