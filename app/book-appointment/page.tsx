'use client'
import { DatePicker } from '@/components/DatePicker'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { imgBooking, imgShortInfo } from '@/data/imgLinks'
import React from 'react'

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

const page = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())


    return (
        <div className='flex flex-col'>
            <div className="flex w-full p-4 items-center">
                <div className="flex items-center justify-center w-2/5 text-lg font-semibold">Select a date and time that works for you, and we’ll take care of the rest</div>
                <div className="w-3/5 aspect-video bg-center relative bg-contain bg-no-repeat" style={{ background: `url(${imgBooking})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className="bg-gradient-to-r from-white w-full h-full absolute"></div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h4 className='text-lg font-bold'>Enter your information here</h4>
                <div className="flex gap-4">
                    <div className="w-7/12 grid grid-cols-2 gap-4">
                        <div className="w-full items-center">
                            {/* <label htmlFor="email">Email</label> */}
                            <Input type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="w-full items-center">
                            {/* <label htmlFor="email">Last name</label> */}
                            <Input type="email" id="email" placeholder="Last name" />
                        </div>
                        <div className="w-full items-center">
                            {/* <label htmlFor="email">Email</label> */}
                            <Input type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="w-full items-center">
                            {/* <label htmlFor="email">Phone number</label> */}
                            <Input type="email" id="email" placeholder="Phone number" />
                        </div>
                        <div className="flex gap-2 flex-col">
                            <DatePicker />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className='font-bold'>Choose a time slot you will arrive on {'Dec. 11, 2021:'}</h4>
                            <RadioGroup defaultValue="r1">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="r1" id="r1" />
                                    <Label htmlFor="r1">10AM - 11AM</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="r2" id="r2" />
                                    <Label htmlFor="r2">11AM - 12PM</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="r3" id="r3" />
                                    <Label htmlFor="r3">12PM - 1PM</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="r4" id="r4" />
                                    <Label htmlFor="r4">1PM - 2PM</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="r5" id="r5" />
                                    <Label htmlFor="r5">2PM - 3PM</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-5/12">
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
