'use client'
import { DatePicker } from '@/components/DatePicker'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { imgBooking, imgShortInfo } from '@/data/imgLinks'
import React, { useEffect, useState } from 'react'
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
import { Combobox, ComboboxData } from '@/components/book-appointment/Combobox'
import { THERAPIST_REQUEST_GENDER } from '@/constants/common'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faPlus, faPlusCircle, faPlusMinus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { timeRanges } from '@/data/time-ranges'
import { randomUUID } from 'crypto'
import { therapistListCombobox } from '@/data/therapist'

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

const data: ComboboxData[] = [
    {
        value: 'THE_MALE',
        label: THERAPIST_REQUEST_GENDER.MALE,
    },
    {
        value: 'THE_FEMALE',
        label: THERAPIST_REQUEST_GENDER.FEMALE,
    },
    {
        value: 'THE_FLEXIBLE',
        label: THERAPIST_REQUEST_GENDER.FLEXIBLE,
    },
    ...therapistListCombobox
]

type GeneralData = {
    fullname: string,
    email: string,
    phone: string,
    note: string,
    timeRange: string,
    date: number,
    services: ServiceDetail[]
}

type ServiceDetail = {
    service: string,
    therapist: string,
    note: string,
    id: number
}

const page = () => {
    const [selectedDate, setSelectedDate] = useState<number>(Math.floor(new Date().getTime() / 1000));
    useEffect(() => {
        setGeneralData((prevData) => ({
            ...prevData,
            date: selectedDate // dynamically updates the field based on input name
        }));
    }, [selectedDate])

    const [selectedServices, setSelectedServices] = useState<ServiceDetail[]>([{ service: '', therapist: '', note: '', id: Math.random() }])
    const servicesFunctions = {
        add: () => {
            setSelectedServices((prev) => [
                ...prev,
                { therapist: '', note: '', service: '', id: Math.random() },
            ]);
        },
        delete: (id: number) => {
            setSelectedServices((selectedServices) =>
                selectedServices.filter((item) => item.id !== id)
            );
        },
        duplicate: (id: number) => {
            // Find the service with the matching id
            const serviceToDuplicate = selectedServices.find((item) => item.id === id);

            if (serviceToDuplicate) {
                // Create a new service object with the same properties and a new id
                const duplicatedService = { ...serviceToDuplicate, id: Math.random() };

                // Add the duplicated service to the list
                setSelectedServices((prev) => [...prev, duplicatedService]);
            }
        },
    };

    const [generalData, setGeneralData] = useState<GeneralData>({
        fullname: '',
        email: '',
        phone: '',
        note: '',
        timeRange: '',
        date: selectedDate,
        services: selectedServices
    });
    useEffect(() => {
        setGeneralData((prevData) => ({
            ...prevData,
            services: selectedServices
        }));
    }, [selectedServices])


    const handleGeneralDataChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string
    ) => {
        if (typeof e === 'string') {
            // This handles the case for the Select component (onValueChange)
            setGeneralData((prevData) => ({
                ...prevData,
                timeRange: e, // Directly update timeRange when Select value changes
            }));
        } else {
            const { id, value } = e.target;
            setGeneralData((prevData) => ({
                ...prevData,
                [id]: value, // Dynamically updates based on input name or id
            }));
        }
    };

    const handleSelectedServicesDataChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string,
        id?: number // Add id parameter to handle specific service items
    ) => {
        if (typeof e === 'string') {
            // If it's a string (for Select or Combobox), update the service or therapist
            if (e.toString().startsWith('THE_')) {
                setSelectedServices((prevData) =>
                    prevData.map((service) =>
                        service.id === id
                            ? { ...service, therapist: e } // This handles service selection
                            : service
                    )
                );
            }
            else {
                setSelectedServices((prevData) =>
                    prevData.map((service) =>
                        service.id === id
                            ? { ...service, service: e } // This handles service selection
                            : service
                    )
                );
            }
        } else {
            const { id: inputId, value } = e.target;
            setSelectedServices((prevData) =>
                prevData.map((service) =>
                    service.id === id ? { ...service, [inputId]: value } : service
                )
            );
        }
    };

    const submitBookAppoitnment = () => {
        console.log(generalData)

    }
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
                    <div className="w-8/12 grid grid-cols-3 gap-4">
                        {/* fullname */}
                        <div className="w-full max-h-24 items-center">
                            <label htmlFor="fullname">Full name</label>
                            <Input value={generalData?.fullname} onChange={handleGeneralDataChange} type="text" id="fullname" placeholder="Full name" />
                        </div>
                        {/*  email*/}
                        <div className="w-full max-h-24 items-center">
                            <label htmlFor="email">Email</label>
                            <Input value={generalData?.email} onChange={handleGeneralDataChange} type="email" id="email" placeholder="Email" />
                        </div>
                        {/* phone */}
                        <div className="w-full max-h-24 items-center">
                            <label htmlFor="phone">Phone number</label>
                            <Input value={generalData?.phone} onChange={handleGeneralDataChange} type="text" id="phone" placeholder="Phone number" />
                        </div>


                        {/* auto generated when click add/duplicate */}
                        {selectedServices.map((item, index) => (
                            <div key={item.id} className="col-span-3 w-full max-h-24 grid grid-cols-12 gap-4">
                                <div className="w-full max-h-24 col-span-4 flex flex-col">
                                    <label htmlFor="select-service">Choose your service</label>
                                    <Select value={item.service} onValueChange={(value) => handleSelectedServicesDataChange(value, item.id)}>
                                        <SelectTrigger id='select-service'>
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="apple">Apple</SelectItem>
                                                <SelectItem value="banana">Banana</SelectItem>
                                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                                <SelectItem value="grapes">Grapes</SelectItem>
                                                <SelectItem value="pineapple">Pineapple</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Therapist selection */}
                                <div className="w-full max-h-24 col-span-3 flex flex-col">
                                    <label htmlFor="select-service">Therapist Request?</label>
                                    <Combobox
                                        label="Select Therapist"
                                        data={data}
                                        selectedItem={data.find(d => d.value === item.therapist) || null}
                                        onChange={(selectedItem) => handleSelectedServicesDataChange(selectedItem?.value || '', item.id)} // Handle therapist selection
                                    />
                                </div>
                                {/* Note */}
                                <div className="w-full max-h-24 flex flex-col col-span-3">
                                    <label htmlFor="note">Note</label>
                                    <Input
                                        id='note'
                                        value={item.note}
                                        onChange={(e) => handleSelectedServicesDataChange(e, item.id)}
                                        placeholder="Any special note for your appointment..."
                                    />
                                </div>
                                <div className="col-span-2 gap-2 flex flex-col items-start justify-center h-full">
                                    <div className="flex items-center gap-2">
                                        {index === selectedServices.length - 1 &&
                                            <FontAwesomeIcon onClick={selectedServices.length > 9 ? () => { } : servicesFunctions.add} className={`p-1  text-xs hover:duration-300 ${selectedServices.length > 9 ? 'bg-slate-300 text-slate-500 ' : 'cursor-pointer hover:bg-green-500 hover:text-cyan-50 bg-cyan-50 text-green-600'} rounded-md`} icon={faPlus} />
                                        }
                                        <FontAwesomeIcon onClick={selectedServices.length > 9 ? () => { } : () => servicesFunctions.duplicate(item.id)} className={`p-1  text-xs hover:duration-300 ${selectedServices.length > 9 ? 'bg-slate-300 text-slate-500 ' : 'cursor-pointer hover:bg-violet-500 hover:text-violet-50 bg-violet-100 text-violet-600'} rounded-md`} icon={faCopy} />
                                        <FontAwesomeIcon onClick={selectedServices.length > 1 ? (() => servicesFunctions.delete(item.id)) : () => { }} className={`p-1 text-xs ${selectedServices.length > 1 ? 'hover:duration-300 hover:bg-red-500 hover:text-red-50 bg-red-100 text-red-600 cursor-pointer' : 'bg-slate-300 text-slate-500 '} rounded-md`} icon={faTrashCan} />
                                    </div>
                                </div>
                            </div>
                        ))}


                        {/* date */}
                        <div className="flex max-h-24 gap-2 flex-col">
                            <h4 className='flex-grow '>Select Date of arrival</h4>
                            <DatePicker selectedDate={selectedDate} setPropSelectedDate={setSelectedDate} />
                        </div>
                        {/* time range */}

                        <div className="flex max-h-24 flex-col gap-2 ">
                            <h4 className='text-sm flex-grow'>Choose a time slot you will arrive on {selectedDate ? format(new Date(selectedDate * 1000), "PPP") : 'undefined'}</h4>
                            <Select value={generalData.timeRange} onValueChange={handleGeneralDataChange}>
                                <SelectTrigger id='select-service'>
                                    <SelectValue placeholder="Pick your timeslot" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {timeRanges.map(item => (
                                            <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* <div className="w-full max-h-24 items-end flex flex-col">
                            <label className='flex-grow' htmlFor="guest-quantity">How many guests are you booking for?</label>
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
                        </div> */}
                        {/* booking note */}
                        <div className="w-full  max-h-24 flex flex-col gap-2">
                            <label htmlFor="note">Note</label>
                            <Textarea value={generalData?.note} onChange={handleGeneralDataChange} id='note' placeholder="Any special note for your appointment..." />
                        </div>
                        <div className="w-full max-h-24 col-span-2 flex items-center justify-center">
                            <Button onClick={submitBookAppoitnment} className='bg-green-600 text-green-100 font-bold'>Book Appointment</Button>
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
