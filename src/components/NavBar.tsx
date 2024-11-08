import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    return (
        <>
            <div className="bg-[#ECE9E2]">

                <div className="flex items-center justify-between p-6">

                    <div className="w-24">
                        <Link to="">
                            <img src="https://cdn.prod.website-files.com/6649a073ce571a7f8882641d/66520df92e7578426e374ed7_BlogMin.svg" alt="logo" />
                        </Link>
                    </div>
                    <div className="hidden md:flex flex-grow justify-center  ">
                        <ul className="flex text-[#e43c13] space-x-10 text-[18px]">
                            <li className=' hover:underline'><Link to="/">Home</Link></li>
                            <li className=' hover:underline'><Link to="/Blog">Blog</Link></li>
                            <li className=' hover:underline'><Link to="/About">About</Link></li>
                            <li className=' hover:underline'><div>Page</div></li>
                        </ul>
                    </div>

                    <div className="hidden md:block pr-10">
                        <button className="bg-[#e43c13] rounded-[100px] text-[16px] text-center px-6 py-[14px] hover:bg-white hover:text-[#e43c13] text-white">
                            Subscribe
                        </button>
                    </div>

                    <div className="md:hidden flex items-center pr-4">
                        <button onClick={toggleMenu} className="text-[#e43c13]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-[#ECE9E2] p-4 space-y-4">
                        <ul className="flex flex-col text-[#e43c13] text-[18px] space-y-4">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Blog">Blog</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><div>Page</div></li>
                        </ul>
                        <div className="mt-4">
                            <button className="w-full bg-[#e43c13] rounded-[100px] text-[16px] text-center px-6 py-[14px] hover:bg-white hover:text-[#e43c13] text-white">
                                Subscribe
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <Outlet />
        </>
    );
};

export default NavBar;
