import React from 'react'

const TopServices = ({ service }: { service: { name: string, img: string, categoryImg: string, description: string } }) => {
    return (
        <div className="rounded-md overflow-hidden w-full border shadow-sm">
            {/* Main Image Container */}
            <div
                className="w-full aspect-square"
                style={{
                    background: `url('${service.img}')`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            ></div>

            <div className="flex gap-2 p-2">
                {/* Category Image - Ensuring it's square */}
                <div
                    className="w-8 h-8 rounded-lg aspect-square"
                    style={{
                        background: `url('${service.categoryImg}')`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                ></div>

                {/* Text Content */}
                <div className="flex flex-col ">
                    <h5 className="font-bold text-teal-800">{service.name}</h5>
                    <p className="text-sm">{service.description}</p>
                </div>
            </div>
        </div>
    )
}

export default TopServices
