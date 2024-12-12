import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
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
                                <div
                                    key={item}
                                    className="w-full aspect-square"
                                    style={{
                                        background: `url('https://github.com/shadcn.png')`,
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                    }}
                                ></div>
                            ))}

                        </div>
                    </div>
                </div>
                <div className="flex gap-4 col-span-3">
                    <div className="flex flex-col gap-4">
                        <h5 className="text-lg font-bold">Contact Us</h5>
                        <div className="flex flex-col gap-2 text-xs">
                            <div className="w-full py-0" >Call now: <span>{'+84 707171164'}</span></div>
                            <div className="w-full py-0" >Email: {'tommyle1310@gmail.com'}</div>
                            <div className="w-full py-0" >Opening time: {'10:00 - 22:00'}</div>
                            <div className="w-full py-0" >Address: {'102 Phan Van Hon, P.TTN, District 12, SG, VN'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
