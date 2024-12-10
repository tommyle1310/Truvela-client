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


const page = () => {
    return (
        <div className='flex gap-4 flex-col min-h-screen'>
            <div className="flex flex-col items-center">
                <h2 className='text-lg font-bold'>Our Services</h2>
                <h5 className='text-lg font-thin'>Relax, Rejuvenate, and Reimagine Your Spa Experience</h5>
            </div>
            <div className="grid grid-cols-3 gap-3">
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <div className="p-3 rounded-md shadow-sm border flex flex-col ">
                            <div className="flex gap-2 w-full">
                                <div className='w-2/4 '>
                                    <div
                                        className="w-full aspect-square"
                                        style={{
                                            background: `url('${imgLeafMassage}')`,
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                </div>
                                <div className="w-3/5  flex flex-col">
                                    <h5 className='font-bold text-violet-500'>Leaf Massage</h5>
                                    <p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing  dignissimos fugiat expedita?</p>
                                </div>
                            </div>
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="">
                        <div className="flex flex-col ">
                            <strong className='text-violet-500 text-center'>Leaf</strong>
                            <Separator orientation='horizontal' className='my-3' />
                            <p className='text-xs text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ea reiciendis, accusamus saepe minima debitis ratione, laborum impedit molestias pariatur maiores veniam non libero odit natus dolorem placeat nobis. Quos.</p>
                            <Separator orientation='horizontal' className='my-3' />
                            <div className="flex flex-col">
                                <div className="flex items-center justify-between">
                                    <strong>{"60'"}</strong>
                                    <strong>.</strong>
                                    <strong className='text-green-500'>$20</strong>
                                </div>
                                <div className="flex items-center justify-between">
                                    <strong>{"60'"}</strong>
                                    <strong>.</strong>
                                    <strong className='text-green-500'>$20</strong>
                                </div>
                                <div className="flex items-center justify-between">
                                    <strong>{"60'"}</strong>
                                    <strong>.</strong>
                                    <strong className='text-green-500'>$20</strong>
                                </div>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <div className="p-3 rounded-md shadow-sm border flex flex-col ">
                            <div className="flex gap-2 w-full">
                                <div className='w-2/4 '>
                                    <div
                                        className="w-full aspect-square"
                                        style={{
                                            background: `url('${imgLeafMassage}')`,
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                </div>
                                <div className="w-3/5  flex flex-col">
                                    <h5 className='font-bold text-violet-500'>Leaf Massage</h5>
                                    <p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing  dignissimos fugiat expedita?</p>
                                </div>
                            </div>
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="">
                        <div className="flex flex-col ">
                            <strong className='text-violet-500 text-center'>Leaf</strong>
                            <Separator orientation='horizontal' className='my-3' />
                            <p className='text-xs text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ea reiciendis, accusamus saepe minima debitis ratione, laborum impedit molestias pariatur maiores veniam non libero odit natus dolorem placeat nobis. Quos.</p>
                            <Separator orientation='horizontal' className='my-3' />
                            <div className="flex flex-col">
                                <div className="flex items-center justify-between">
                                    <strong>{"60'"}</strong>
                                    <strong>.</strong>
                                    <strong className='text-green-500'>$20</strong>
                                </div>
                                <div className="flex items-center justify-between">
                                    <strong>{"60'"}</strong>
                                    <strong>.</strong>
                                    <strong className='text-green-500'>$20</strong>
                                </div>
                                <div className="flex items-center justify-between">
                                    <strong>{"60'"}</strong>
                                    <strong>.</strong>
                                    <strong className='text-green-500'>$20</strong>
                                </div>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <div className="p-3 rounded-md shadow-sm border flex flex-col ">
                            <div className="flex gap-2 w-full">
                                <div className='w-2/4 '>
                                    <div
                                        className="w-full aspect-square"
                                        style={{
                                            background: `url('${imgLeafMassage}')`,
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                        }}
                                    ></div>
                                </div>
                                <div className="w-3/5  flex flex-col">
                                    <h5 className='font-bold text-violet-500'>Leaf Massage</h5>
                                    <p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing  dignissimos fugiat expedita?</p>
                                </div>
                            </div>
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="">
                        <div className="flex flex-col ">
                            <strong className='text-violet-500 text-center'>Leaf</strong>
                            <Separator orientation='horizontal' className='my-3' />
                            <p className='text-xs text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ea reiciendis, accusamus saepe minima debitis ratione, laborum impedit molestias pariatur maiores veniam non libero odit natus dolorem placeat nobis. Quos.</p>
                            <Separator orientation='horizontal' className='my-3' />
                            <div className="flex flex-col">
                                <div className="flex items-center justify-between">
                                    <strong>{"60'"}</strong>
                                    <strong>.</strong>
                                    <strong className='text-green-500'>$20</strong>
                                </div>
                                <div className="flex items-center justify-between">
                                    <strong>{"60'"}</strong>
                                    <strong>.</strong>
                                    <strong className='text-green-500'>$20</strong>
                                </div>
                                <div className="flex items-center justify-between">
                                    <strong>{"60'"}</strong>
                                    <strong>.</strong>
                                    <strong className='text-green-500'>$20</strong>
                                </div>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
        </div>
    )
}

export default page
