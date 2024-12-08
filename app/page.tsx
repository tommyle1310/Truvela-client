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
import React, { useEffect, useRef, useState } from "react";


const Home = () => {


  return (
    <>
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
    </>
  );
}


export default Home