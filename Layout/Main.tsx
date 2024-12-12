'use client'
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Nav/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Footer from '@/components/Footer';

// Define a type for the children that might include navbarHeight prop
interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({
    children,
}: MainLayoutProps) => {
    const navbarRef = useRef<HTMLDivElement | null>(null); // Create a ref for the navbar
    const [navbarHeight, setNavbarHeight] = useState<number>(0); // State to store the navbar height

    useEffect(() => {
        const updateNavbarHeight = () => {
            if (navbarRef.current) {
                setNavbarHeight(navbarRef.current.clientHeight); // Set the height in state
            }
        };

        // Set the initial height when the component mounts
        updateNavbarHeight();

        // Listen for window resizing events and update the navbar height
        window.addEventListener("resize", updateNavbarHeight);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", updateNavbarHeight);
        };
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    return (
        <div className="flex flex-col gap-4">
            {/* nav */}
            <Navbar navbarRef={navbarRef} />

            <div
                className="mx-auto max-w-screen-lg flex flex-col gap-4 w-full py-4"
                style={{ marginTop: `${navbarHeight}px` }}
            >
                {children}
            </div>

            {/* footer */}
            <Footer />

        </div>
    );
};

export default MainLayout;
