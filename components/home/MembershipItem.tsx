import React from 'react';
import { Button } from '../ui/button';
import { membership } from '@/data/home';

const MembershipItem = ({ membershipItem }: { membershipItem: membership }) => {
    const theme = membershipItem.theme;

    // Dynamic class names for each theme
    const borderColor = `border-${theme}-300`;
    const textColor = `text-${theme}-700`;
    const bgColor = `bg-${theme}-100`;
    const gradientFrom = `from-${theme}-300`;
    const gradientTo = `to-${theme}-500`;

    return (
        <div onClick={() => console.log('asdoauc')} className={`p-2 rounded-sm flex items-center flex-col bg-white gap-3 ${borderColor} border-[0.2rem]`}>
            <h3 className={`${textColor} font-bold text-xl`}>${membershipItem.price}</h3>
            <h5 className="text-sm">{membershipItem.expireType}</h5>
            <div className={`mx-auto w-4/12 h-1 rounded-sm ${borderColor}`}></div>
            <div className={`flex gap-3 p-2 items-center rounded-sm ${bgColor} ${textColor}`}>
                <div className="flex flex-col font-bold">
                    <span>{membershipItem.percentOff}%</span>
                    <span>OFF</span>
                </div>
                <div className={`h-full w-1 rounded-sm `}></div>
                <span>{membershipItem.applyServices}</span>
            </div>
            <h5 className="text-sm font-extralight">Additional Privileges</h5>
            <p>{membershipItem.additionalPrivileges[0]}</p>
            <div className={`w-8/12 border border-dashed ${borderColor}`}></div>
            <p>{membershipItem.additionalPrivileges[1]}</p>
            <p className="text-xs font-extralight">*{membershipItem.condition}</p>
            <Button className={`cursor-pointer bg-gradient-to-r ${gradientFrom} ${gradientTo}`}>
                Purchase
            </Button>
        </div>
    );
};

export default MembershipItem;
