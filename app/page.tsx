'use client'
import { MainPoster } from "@/components/home/mainPoster";
import MembershipItem from "@/components/home/MembershipItem";
import TopServices from "@/components/home/topServices";
import { Button } from "@/components/ui/button";
import { memberships, topServices } from "@/data/home";
import { faCartShopping, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function Home() {
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
      <div
        className="fixed navbar w-full p-4 bg-white shadow-sm shadow-green-800 z-10"
        ref={navbarRef}
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

      {/* Main content */}
      <div
        className="mx-auto max-w-screen-md flex flex-col gap-4 w-full py-4"
        style={{ marginTop: `${navbarHeight}px` }} // Set the margin-top dynamically based on navbarHeight
      >
        <MainPoster />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col text-violet-700 font-semibold items-center">
            <h5 className="text-lg">We take for you</h5>
            <h3 className="text-xl">Best Services</h3>
          </div>
          <div className="grid grid-cols-3 gap-4 w-full mx-auto">
            {topServices.map(item => (
              <TopServices service={item} />
            ))}
            <button className="bg-gradient-to-r col-span-3 mx-auto from-blue-500 to-purple-600 rounded-md px-4 py-2 text-white font-bold hover:duration-200  hover:from-violet-600 hover:to-blue-500 ">LEARN MORE</button>
          </div>
          <div className="w-full  aspect-[10/3] flex relative">
            <div className="w-1/3 flex flex-col gap-3 p-2">
              <h5 className="text-violet-600 text-lg font-bold">Sweet & Healthy Products</h5>
              <h2 className="text-violet-600 text-xl font-bold">Wellness Therapy</h2>
              <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iusto tenetur culpa? Aut quasi reprehenderit atque eveniet repellat, qui laudantium. Dolores quidem facere qui minus tempore iure tempora quos atque!</p>
              <Button className="bg-gradient-to-tr from-violet-400 to-teal-400 mx-auto">Read More</Button>
            </div>
            <div className="w-2/3 h-full bg-center relative bg-contain bg-no-repeat" style={{ background: `url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNwYXxlbnwwfHwwfHx8MA%3D%3D')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              <div className="bg-gradient-to-r from-white w-full h-full absolute"></div>
            </div>
          </div>
          <div className="w-full  aspect-[10/4] flex relative ">
            <div className="w-full h-full bg-center relative bg-contain bg-no-repeat flex flex-col gap-3" style={{ background: `url('https://images.unsplash.com/photo-1521052313888-1181c2f5f406?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGFyayUyMHNwYXxlbnwwfHwwfHx8MA%3D%3D')`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              <div className="absolute bg-white bg-opacity-0 w-full h-full"></div>
              <div className="text-violet-400 bg-black bg-opacity-80 font-bold text-center">
                <h5>where nature meet bliss</h5>
                <h3>Get Membership</h3>
              </div>
              <div className="grid grid-cols-3 gap-3 p-4">
                {memberships.map(item => (
                  <MembershipItem membershipItem={item} />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
