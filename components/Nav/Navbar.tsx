import { faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

// Define the props interface
interface NavbarProps {
    navbarRef: React.RefObject<HTMLDivElement>; // Type the navbarRef properly
}

// Functional component with the correct type
const Navbar: React.FC<NavbarProps> = ({ navbarRef }) => {
    return (
        <div
            className="fixed navbar w-full p-4 bg-white shadow-sm shadow-green-800 z-20"
            ref={navbarRef} // Use the passed ref here
        >
            <div className="mx-auto max-w-screen-md flex justify-between gap-4 items-center">
                <div className="">logo</div>
                <div className="flex gap-4 items-center">
                    <div className="">Home</div>
                    <div className="">Products</div>
                    <div className="">Spa Services</div>
                    <div className="">Book Appointment</div>
                    <div className="">Blogs</div>
                    <div className="">About Us</div>
                    <div className="">Contact Us</div>
                </div>
                <div className="flex gap-4 items-center">
                    <FontAwesomeIcon icon={faSearch} />
                    <FontAwesomeIcon icon={faCartShopping} />
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
