'use client'
import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from '@/components/ui/button'
import { CalendarIcon } from 'lucide-react'
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Avatar } from '@radix-ui/react-avatar'
import { imgLeafMassage } from '@/data/imgLinks'
import { Separator } from '@/components/ui/separator'
import { dataSpaServices } from '@/data/spa-services'
import { ServiceCategory } from '@/types/service'
import { serviceCategory } from '@/constants/service-category'

const RenderListServiceCard = (type: ServiceCategory) => {
    const listServiceCard = (dataSpaServices.find(item => item.category === type)?.services)
    return <>
        {listServiceCard?.map(item => (
            <HoverCard>
                <HoverCardTrigger asChild>
                    <div className="p-3 rounded-md shadow-sm border flex flex-col ">
                        <div className="flex gap-2 w-full">
                            <div className='w-2/4 '>
                                <div
                                    className="w-full aspect-square"
                                    style={{
                                        background: `url('${item.img}')`,
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                    }}
                                ></div>
                            </div>
                            <div className="w-3/5  flex flex-col gap-1">
                                <h5 className='font-bold leading-4 text-sm text-violet-500'>{item.name}</h5>
                                <p className='text-xs'>{item.shortDescription}</p>
                            </div>
                        </div>
                    </div>
                </HoverCardTrigger>
                <HoverCardContent className="">
                    <div className="flex flex-col ">
                        <div className="flex items-center gap-4 justify-between text-sm flex-wrap">
                            <strong className='text-violet-500 text-center'>{item.name}</strong>
                            <div className='border-red-300 border px-2 py-1 rounded-md  text-red-300'>{item.tag}</div>
                        </div>
                        <Separator orientation='horizontal' className='my-3' />
                        <p className='text-xs text-slate-500'>{item.detailedDescription}</p>
                        <Separator orientation='horizontal' className='my-3' />
                        <div className="flex flex-col text-sm">
                            {item.duration_price.map(item => (

                                <div className="flex items-center justify-between">
                                    <strong>{item.duration}</strong>
                                    <strong>.</strong>
                                    <strong className='text-green-500'>${item.price}</strong>
                                </div>
                            ))}
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        ))}
    </>
}

const page = () => {
    return (
        <div className='flex gap-4 mt-4 flex-col min-h-screen'>
            <div className="flex flex-col items-center">
                <h2 className='text-lg font-bold'>Our Services</h2>
                <h5 className='text-lg font-thin'>Relax, Rejuvenate, and Reimagine Your Spa Experience</h5>
            </div>
            {dataSpaServices.map(item => (
                <div className="flex flex-col gap-1">
                    <h5 className='text-teal-600 font-bold'>{item.category}</h5>
                    <div className="grid grid-cols-4 gap-3">
                        {RenderListServiceCard(item.category)}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default page
