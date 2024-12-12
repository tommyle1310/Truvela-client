'use client'
import { faCartShopping, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { usePathname } from "next/navigation";

// Define the props interface
interface NavbarProps {
    navbarRef: React.RefObject<HTMLDivElement>; // Type the navbarRef properly
}


export type TypeNavbarItem = { left?: { title: string | React.ReactNode, href?: string, onClick?: () => void }[], center?: { title: string | React.ReactNode, href?: string, onClick?: () => void }[], right?: { title: string | React.ReactNode, href?: string, onClick?: () => void }[] }

export const NavbarItem: TypeNavbarItem =
{
    left: [{
        title: < FontAwesomeIcon icon={faSearch} />,
        href: '/'
    }],

    center: [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'Products',
            href: '/products',
        },
        {
            title: 'Spa Services',
            href: '/spa-services',
        },
        {
            title: 'Book Appointment',
            href: '/book-appointment',
        },
        {
            title: 'Blogs',
            href: '/blogs',
        },
        {
            title: 'About Us',
            href: '/about-us',
        },
        {
            title: 'Contact Us',
            href: '/contact-us',
        },
    ],
    right: [
        {
            title: < FontAwesomeIcon icon={faSearch} />,
            onClick: () => console.log('click search')
        },
        {
            title: < FontAwesomeIcon icon={faCartShopping} />,
            href: '/cart'
        },
        {
            title: < FontAwesomeIcon icon={faUser} />,
            href: '/profile'
        },
    ],
}

export const RenderNavBarItem = (type: 'left' | 'center' | 'right') => {
    const currentRoute = usePathname();
    return NavbarItem[type] && NavbarItem[type].map((item, index) => (
        item.href
            ? <Link key={index} href={item.href} className={`hover:duration-200 hover:text-violet-600 ${currentRoute === item.href && type !== 'left' && 'text-violet-600  px-2 py-1 bg-violet-50 rounded-md  font-semibold'}`}>{item.title}</Link> :
            <div key={index} onClick={item.onClick} className={`hover:duration-200 hover:text-violet-600 cursor-pointer`}>{item.title}</div>
    ))
}


// Functional component with the correct type
const Navbar: React.FC<NavbarProps> = ({ navbarRef }) => {
    return (
        <div
            className="fixed navbar w-full p-4 bg-white shadow-sm shadow-green-800 z-20"
            ref={navbarRef} // Use the passed ref here
        >
            <div className="mx-auto max-w-screen-lg flex justify-between gap-4 items-center">

                <div className="flex gap-4 items-center">
                    {RenderNavBarItem('left')}
                </div>
                <div className="flex gap-4 items-center">
                    {RenderNavBarItem('center')}
                </div>
                <div className="flex gap-4 items-center">
                    {RenderNavBarItem('right')}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
