import React, { useState } from 'react';
import { Heart, BriefcaseBusiness, User, Search, Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import LoginModal from './Modal/Login';
import SignupModal from './Modal/Signup';
import Logo from '../images/namelogo.png';
import Logo1 from '../images/namelogo2.png';
import { Sparkles } from 'lucide-react';

import './Navbar.css'


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false)
    const [route, setRoute] = useState("Login");

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleSearchModal = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const handleModal = () => {
        setIsOpen(!isOpen);
    };

    const isHomePage = location.pathname === '/';

    const navItems = [
        { name: "NEW IN", path: "/new-in", icon: Sparkles },
        { name: "COLLECTION", path: "/collection" },
        { name: "ACCESSORIES", path: "/accessories" },
        { name: "RUNWAY", path: "/runway" },
        { name: "VOWS", path: "/new-in" },
        { name: "ABOUT", path: "/about" },
      ];

    return (
        <>
        <div className='positionsticky'>
            <header
                className={`relative z-10 px-8 py-4 ${isHomePage ? 'bg-transparent text-white' : 'bg-white text-black'
                    } transition-colors duration-300 ease-in-out ${isHomePage ? '' : 'shadow-md'}`}
            >
                <div className="flex justify-between md:justify-center items-center">
                     <div className="text-lg font-semibold tracking-wider flex flex-col items-center">
                     <img 
  src={isHomePage ? Logo : Logo1} 
  alt="Logo" 
  className="w-[300px] h-[106px]" 
/>

                    </div>

                    <button className="md:hidden block focus:outline-none" onClick={toggleMobileMenu}>
                        <Menu className={`w-8 h-8 ${isHomePage ? 'text-white' : 'text-black'}`} />
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden fixed top-0 left-0 right-0 ${isHomePage ? 'bg-black' : 'bg-white'
                        } bg-opacity-90 p-8 text-center z-20 transition-all duration-500 ease-in-out transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                        }`}
                >
                    <button
                        className="absolute top-4 right-4 focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <X className={`w-8 h-8 ${isHomePage ? 'text-white' : 'text-black'}`} />
                    </button>

                    <nav className="flex flex-col items-center gap-4 mt-8">
                        {["NEW IN", "COLLECTION", "ACCESSORIES", "RUNWAY", "VOWS", "ABOUT"].map((item, index) => (
                            <a
                                key={index}
                                href="/"
                                className={`block text-lg font-semibold ${isHomePage ? 'text-white' : 'text-black'}`}
                                onClick={() => setIsMobileMenuOpen(false)}  // Close menu when link is clicked
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    <div className="flex justify-center mt-4 space-x-5">
                        <button className={`${isHomePage ? 'text-white' : 'text-black'} hover:text-gray-500 cursor-pointer transition duration-300`}>
                            <Heart className="h-5 w-5" />
                        </button>
                        <button className={`${isHomePage ? 'text-white' : 'text-black'} hover:text-gray-500 cursor-pointer transition duration-300`}>
                            <BriefcaseBusiness className="h-5 w-5" />
                        </button>
                        <button className={`${isHomePage ? 'text-white' : 'text-black'} hover:text-gray-500 cursor-pointer transition duration-300`}
                            onClick={handleModal}>
                            <User className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2"
                        onClick={toggleSearchModal}>
                        <Search className={`w-5 h-5 ${isHomePage ? 'text-white' : 'text-black'}`} />
                       

<input
  type="text"
  placeholder="SEARCH ...."
  className={`px-4 py-2 w-full max-w-xs bg-transparent focus:outline-none 
    ${isHomePage ? 'text-white' : 'text-black'}`}
  style={{
    '::placeholder': {
      color: isHomePage ? 'black !important' : 'black !important',
    },
  }}
/>


                    </div>

                    {/* <nav className="flex gap-6 mx-8 flex-grow justify-center">
                        {["NEW IN", "COLLECTION", "ACCESSORIES", "RUNWAY", "VOWS", "ABOUT"].map((item, index) => (
                            <div key={index} className="relative">
                                <a href="/new-in" className={`cursor-pointer ${index === 0 ? "flex space-x-2 items-center" : "block"} flex ${isHomePage ? 'text-white' : 'text-black'}`}>
                                    {index === 0 && <Sparkles size={18} />}   <span>{item}</span>
                                </a>
                            </div>
                        ))}
                    </nav> */}



<nav className="flex gap-6 mx-8 flex-grow justify-center">
    {navItems.map((item, index) => (
      <div key={index} className="relative">
        <a
          href={item.path}
          className={`cursor-pointer ${index === 0 ? "flex space-x-2 items-center" : "block"} flex ${
            isHomePage ? "text-white" : "text-black"
          }`}
        >
          {index === 0 && item.icon && <item.icon size={18} />} {/* Use icon for the first item */}
          <span>{item.name}</span>
        </a>
      </div>

    ))}
  </nav>







                    <div className="flex items-center gap-4">
                        <button className={`hover:text-gray-500 cursor-pointer transition duration-300 ${isHomePage ? 'text-white' : 'text-black'}`}>
                            <Heart className="h-5 w-5" />
                        </button>
                        <button className={`hover:text-gray-500 cursor-pointer transition duration-300 ${isHomePage ? 'text-white' : 'text-black'}`}>
                            <BriefcaseBusiness className="h-5 w-5" />
                        </button>
                        <button className={`hover:text-gray-500 cursor-pointer transition duration-300 ${isHomePage ? 'text-white' : 'text-black'}`}
                            onClick={handleModal}>
                            <User className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </header>

            {isSearchOpen && (
                <div className={`fixed inset-0 h-52 bg-white z-50 p-8 transition-transform duration-700 ease-out ${isSearchOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    <button className="absolute top-4 right-4 focus:outline-none" onClick={toggleSearchModal}>
                        <X className="w-8 h-8 text-black" />
                    </button>

                    <div className="flex flex-col mt-8 w-full max-w-3xl mx-auto">
                        <h2 className="text-3xl mb-4 text-left"
                            style={{ fontFamily: 'Galada' }}>What Are You Looking For?</h2>

                        <div className="flex items-center w-full border-b-2 border-gray-500">
                            <input
                                type="text"
                                placeholder="Search Products..."
                                className="w-full py-3 text-lg text-gray-600 placeholder-gray-500 focus:outline-none"
                            />
                            <Search className="text-gray-500 ml-2" />
                        </div>
                    </div>
                </div>


            )}

            {route === "Login" && isOpen && <LoginModal onClose={handleModal} setRoute={setRoute} route={route} />}
            {route === "Signup" && isOpen && <SignupModal onClose={handleModal} setRoute={setRoute} route={route} />}
            </div>
        </>
    );
};

export default Navbar;
