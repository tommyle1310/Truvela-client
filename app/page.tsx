'use client'
import { MainPoster } from "@/components/home/mainPoster";
import MembershipItem from "@/components/home/MembershipItem";
import TopServices from "@/components/home/topServices";
import Navbar from "@/components/Nav/Navbar";
import { Button } from "@/components/ui/button";
import { memberships, topServices } from "@/data/home";
import { imgMembershipBg, imgShortInfo } from "@/data/imgLinks";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
      <Navbar navbarRef={navbarRef} />

      {/* Main content */}
      <div
        className="mx-auto max-w-screen-md flex flex-col gap-4 w-full py-4"
        style={{ marginTop: `${navbarHeight}px` }}
      >
        <MainPoster />
        <div className="flex flex-col gap-4">
          {/* services */}
          <div className="flex flex-col">
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
          </div>
          {/* short info */}
          <div className="w-full  aspect-[10/3] flex relative">
            <div className="w-1/3 flex flex-col gap-3 p-2">
              <h5 className="text-violet-600 text-lg font-bold">Sweet & Healthy Products</h5>
              <h2 className="text-violet-600 text-xl font-bold">Wellness Therapy</h2>
              <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iusto tenetur culpa? Aut quasi reprehenderit atque eveniet repellat, qui laudantium. Dolores quidem facere qui minus tempore iure tempora quos atque!</p>
              <Button className="bg-gradient-to-tr from-violet-400 to-teal-400 mx-auto">Read More</Button>
            </div>
            <div className="w-2/3 h-full bg-center relative bg-contain bg-no-repeat" style={{ background: `url(${imgShortInfo})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              <div className="bg-gradient-to-r from-white w-full h-full absolute"></div>
            </div>
          </div>
          {/* membership */}
          <div className="w-full  aspect-[10/4] flex relative ">
            <div className="w-full h-full bg-center relative bg-contain bg-no-repeat flex flex-col gap-3" style={{ background: `url(${imgMembershipBg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
              <div className="absolute bg-white bg-opacity-0 w-full h-full"></div>
              <div className="text-violet-400 bg-black bg-opacity-80 font-bold text-center">
                <h5>where nature meet bliss</h5>
                <h3 >Get Membership</h3>
              </div>
              <div className="grid grid-cols-3 gap-3 p-4 z-10" >
                {memberships.map(item => (
                  <MembershipItem key={item.id} membershipItem={item} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* footer */}
      <div className="bg-violet-100 p-4 w-full ">
        <div className="mx-auto max-w-screen-md grid grid-cols-12 gap-4">
          <div className="flex flex-col col-span-4 gap-4">
            <div className="w-32 h-20 bg-violet-500"></div>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. culpa nostrum id blanditiis maiores, eos animi facilis deserunt nobis architecto asperiores natus!</p>
            <div className="flex gap-4 items-center">
              <p>Social media:</p>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon className="text-[#0866ff]" icon={faFacebook} />
                <FontAwesomeIcon className="text-[#d81295]" icon={faInstagram} />
                <FontAwesomeIcon className="text-[#ff0033]" icon={faYoutube} />
                <FontAwesomeIcon icon={faTwitter} />

              </div>
            </div>
          </div>
          <div className="flex gap-4 col-span-5">
            <div className="flex flex-col gap-4">
              <h5 className="text-lg font-bold">Our Services</h5>
              <div className="flex flex-col gap-2 text-xs">
                <Link className="w-full py-0" href='/'>Nail Styling</Link>
                <Link className="w-full py-0" href='/'>Health Shower</Link>
                <Link className="w-full py-0" href='/'>Spa Masks</Link>
                <Link className="w-full py-0" href='/'>Special Guiding</Link>
                <Link className="w-full py-0" href='/'>Mind Relax</Link>
              </div>
            </div>
            <div className="flex flex-col flex-grow gap-4">
              <h5 className="text-lg font-bold">Image Gallery</h5>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map(item => (
                  <div key={item} className="w-full aspect-square" style={{
                    background: `url('${'https://github.com/shadcn.png'}')`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}></div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-4 col-span-3">
            <div className="flex flex-col gap-4">
              <h5 className="text-lg font-bold">Contact Us</h5>
              <div className="flex flex-col gap-2 text-xs">
                <div className="w-full py-0" >Call now: <span>{'+84 707171164'}</span></div>
                <div className="w-full py-0" >Email: {`tommyle1310@gmail.com`}</div>
                <div className="w-full py-0" >Opening time: {`10:00 - 22:00`}</div>
                <div className="w-full py-0" >Address: {`102 Phan Van Hon, P.TTN, District 12, SG, VN`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
