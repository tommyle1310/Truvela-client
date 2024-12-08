import { faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
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
                <Link href='/' className="">logo</Link>
                <div className="flex gap-4 items-center">
                    <Link href='/' className="">Home</Link>
                    <Link href='/products' className="">Products</Link>
                    <Link href='/spa-services' className="">Spa Services</Link>
                    <Link href='/book-appointment' className="">Book Appointment</Link>
                    <Link href='/blogs' className="">Blogs</Link>
                    <Link href='/about-us' className="">About Us</Link>
                    <Link href='/contact-us' className="">Contact Us</Link>
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
