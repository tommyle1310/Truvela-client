'use client'
import { DatePicker } from '@/components/DatePicker'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { imgBooking, imgShortInfo } from '@/data/imgLinks'
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from '@/components/ui/textarea'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'

const hoursOfOperation = [
    {
        day: 'Sunday',
        from: '10AM',
        to: '10PM'
    },
    {
        day: 'Monday',
        from: '10AM',
        to: '10PM'
    },
    {
        day: 'Tuesday',
        from: '10AM',
        to: '10PM'
    },
    {
        day: 'Wednesday',
        from: '10AM',
        to: '10PM'
    },
    {
        day: 'Thursday',
        from: '10AM',
        to: '10PM'
    },
    {
        day: 'Friday',
        from: '10AM',
        to: '10PM'
    },
    {
        day: 'Saturday',
        from: '10AM',
        to: '10PM'
    },
]
const timeSlot = [
    {
        value: '1',
        label: '10AM - 11AM'
    },
    {
        value: '2',
        label: '11AM - 12PM'
    },
    {
        value: '3',
        label: '12PM - 1PM'
    },
    {
        value: '4',
        label: '1PM - 2PM'
    },
    {
        value: '5',
        label: '2PM - 3PM'
    },
    {
        value: '6',
        label: '3PM - 4PM'
    },
    {
        value: '7',
        label: '4PM - 5PM'
    },
    {
        value: '8',
        label: '5PM - 6PM'
    },
    {
        value: '9',
        label: '6PM - 7PM'
    },
    {
        value: '10',
        label: '7PM - 8PM'
    },
    {
        value: '11',
        label: '8PM - 9PM'
    },
    {
        value: '12',
        label: '9PM - 10PM'
    }
];



const page = () => {
    const [selectedDate, setSelectedDate] = useState<number>(Math.floor(new Date().getTime() / 1000));



    return (
        <div className='flex flex-col -mt-4'>
            <div className="flex w-full p-4 items-center">
                <div className="flex items-center justify-center w-2/5 text-lg font-semibold">Select a date and time that works for you, and we’ll take care of the rest</div>
                <div className="w-3/5 aspect-video bg-center relative bg-contain bg-no-repeat" style={{ background: `url(${imgBooking})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className="bg-gradient-to-r from-white w-full h-full absolute"></div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h4 className='text-lg font-bold'>Enter your information here</h4>
                <div className="flex gap-16">
                    <div className="w-8/12 grid grid-cols-2 gap-4">
                        <div className="w-full items-center">
                            <label htmlFor="first-name">First name</label>
                            <Input type="first-name" id="first-name" placeholder="First name" />
                        </div>
                        <div className="w-full items-center">
                            <label htmlFor="last-name">Last name</label>
                            <Input type="email" id="last-name" placeholder="Last name" />
                        </div>
                        <div className="w-full items-center">
                            <label htmlFor="email">Email</label>
                            <Input type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="w-full items-center">
                            <label htmlFor="phone">Phone number</label>
                            <Input type="email" id="phone" placeholder="Phone number" />
                        </div>
                        <div className="w-full items-center">
                            <label htmlFor="guest-quantity">How many guests are you booking for?</label>
                            <Select>
                                <SelectTrigger id='guest-quantity'>
                                    <SelectValue placeholder="2" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                                            <SelectItem key={item} value={item.toString()}>{item}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-full flex flex-col">
                            <label className='flex-grow' htmlFor="select-service">Choose your service</label>
                            <Select>
                                <SelectTrigger id='select-service'>
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex gap-2 flex-col">
                            <h4 className='flex-grow '>Select Date of arrival</h4>
                            <DatePicker selectedDate={selectedDate} setPropSelectedDate={setSelectedDate} />
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <h4 className=''>Choose a time slot you will arrive on {selectedDate ? format(new Date(selectedDate * 1000), "PPP") : 'indefiend'}</h4>
                            <Select>
                                <SelectTrigger id='select-service'>
                                    <SelectValue placeholder="Pick your timeslot" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {timeSlot.map(item => (
                                            <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="w-full flex flex-col gap-2 col-span-2">
                            <label htmlFor="note">Note</label>
                            <Textarea id='note' placeholder="Any special note for your appointment..." />
                        </div>
                        <div className="w-full col-span-2 flex items-center justify-center">
                            <Button className='bg-green-600 text-green-100 font-bold'>Book Appointment</Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-4/12">
                        <div className="w-full aspect-square bg-violet-100"></div>
                        <div className="flex justify-between gap-4">
                            <div className="flex w-5/12 flex-col">
                                <h4 className='font-semibold'>Our Address:</h4>
                                <p className='text-sm'>38 Mac Thi Teo, p.Ben Trau, District 1, Saigon, Vietname</p>
                            </div>
                            <div className="flex w-7/12 flex-col">
                                <h4 className='font-semibold'>Hours of Operation:</h4>
                                {hoursOfOperation.map((item, index) => (
                                    <p className='flex gap-1 text-sm' key={index}>{item.day}: {item.from} - {item.to}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
