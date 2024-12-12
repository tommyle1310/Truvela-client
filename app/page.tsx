'use client'
import { MainPoster } from "@/components/home/mainPoster";
import MembershipItem from "@/components/home/MembershipItem";
import TopServices from "@/components/home/topServices";
import Navbar from "@/components/Nav/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { memberships, topServices } from "@/data/home";
import { imgHappyMan, imgMembershipBg, imgShortInfo } from "@/data/imgLinks";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faShare, faStar, faStarHalf, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const Home = () => {


  return (
    <div className="flex flex-col gap-16">
      <MainPoster />
      {/* services */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col font-semibold items-center">
          <h5 className="text-lg">We take for you</h5>
          <h3 className="text-xl text-violet-700">Best Services</h3>
        </div>
        <div className="grid grid-cols-4 gap-4 w-full mx-auto">
          {topServices.map(item => (
            <TopServices service={item} />
          ))}
          <Link href='/spa-services' className="bg-gradient-to-r col-span-4 mx-auto from-blue-500 to-purple-600 rounded-md px-4 py-2 text-white font-bold hover:duration-200  hover:from-violet-600 hover:to-blue-500 ">LEARN MORE</Link>
        </div>
      </div>
      {/* products & short info */}
      <div className="w-full  aspect-[10/3] flex relative">
        <div className="w-1/3 flex flex-col gap-3 p-2">
          <h5 className="text-lg font-bold">Sweet & Healthy Products</h5>
          <h2 className="text-xl font-bold">Wellness Therapy</h2>
          <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iusto tenetur culpa? Aut quasi reprehenderit atque eveniet repellat, qui laudantium. Dolores quidem facere qui minus tempore iure tempora quos atque!</p>
          <Link href='/products' className="bg-gradient-to-tr px-3 py-2 text-white font-bold rounded-md from-violet-400 to-teal-400 mx-auto">Read More</Link>
        </div>
        <div className="w-2/3 h-full bg-center relative bg-contain bg-no-repeat" style={{ background: `url(${imgShortInfo})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <div className="bg-gradient-to-r from-white w-full h-full absolute"></div>
        </div>
      </div>
      {/* membership */}
      <div style={{ marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)', background: `url(${imgMembershipBg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="w-screen  aspect-[10/4] flex relative ">
        <div className="w-full h-full mx-auto max-w-screen-md bg-center relative bg-contain bg-no-repeat flex flex-col gap-3" >
          <div className="absolute bg-white bg-opacity-0 w-full h-full"></div>
          <div className="text-violet-400 p-4 bg-black bg-opacity-80 font-bold text-center">
            <h5 className="text-slate-300">where nature meet bliss</h5>
            <h3 >Get Membership</h3>
          </div>
          <div className="grid grid-cols-3 gap-3 p-4 z-10" >
            {memberships.map(item => (
              <MembershipItem key={item.id} membershipItem={item} />
            ))}
          </div>
        </div>

      </div>


      {/* reviews */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-center">Our Happy Customer</h3>
        <div className="flex flex-col items-center">
          <div className="flex gap-2 items-center">
            <strong>15K</strong>
            <p> reviews on</p>
            <div className="flex items-center gap-1 text-green-600">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfStroke} />
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faShare} />
            <strong>{4.4}</strong>
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <Avatar key={index} className="w-10 border-2 border-violet-800 shadow-md shadow-violet-100">
                  <AvatarImage className="w-full h-full" src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              ))}

            </div>
          </div>
        </div>
        <Carousel className="w-full ">
          <CarouselContent className="-ml-1 py-6 gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 ">
                <div className="p-1">
                  <Card>
                    <CardContent className=" p-3 rounded-md relative bg-black text-slate-400 ">
                      <div className="flex gap-2">
                        <div className="basis-1/5"></div>
                        <div className="basis-4/5 flex flex-col gap-2">
                          <strong className="text font-bold text-white">David Copperfield</strong>
                          <p className="text-xs font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quas voluptatum, commodi natus ex quod, deleniti exercitationem ipsum velit, perferendis tempora animi nobis repellendus nemo libero? Praesentium distinctio ipsum illo.</p>
                          <div className="flex items-center gap-1 w-full justify-end">
                            <div className="flex items-center  gap-1 text-green-600">
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStar} />
                              <FontAwesomeIcon icon={faStarHalfStroke} />
                            </div>
                            <span className="mt-1 text-sm">{'4.6'} rating</span>
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          background: `url('${imgHappyMan}')`,
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                        }}
                        className="absolute rounded-md border-[0.2rem] shadow-md shadow-violet-50 border-violet-100 w-20 h-20 -bottom-4 -left-4 "
                      ></div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
    </div>
  );
}


export default Home