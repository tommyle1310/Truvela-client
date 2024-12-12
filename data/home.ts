import { imgAromatherapy, imgFacialService, imgSwedishService } from "./imgLinks";

export const topServices = [
    {
        id: 1,
        name: 'Hot stone massage',
        img: imgFacialService,
        categoryImg: 'https://github.com/shadcn.png',
        description: 'Stone Massage are the most popular spa treatment'
    },
    {
        id: 2,
        name: 'Aromatherapy Massage',
        img: imgAromatherapy,
        categoryImg: 'https://github.com/shadcn.png',
        description: 'A soothing massage using essential oils to promote relaxation and well-being.'
    },
    {
        id: 3,
        name: 'Swedish Massage',
        img: imgSwedishService,
        categoryImg: 'https://github.com/shadcn.png',
        description: 'A gentle and relaxing massage that uses long strokes and kneading techniques.'
    },
    {
        id: 4,
        name: 'Swedish Massage 2',
        img: imgSwedishService,
        categoryImg: 'https://github.com/shadcn.png',
        description: 'A gentle and relaxing massage that uses long strokes and kneading techniques. 2'
    },
];


export type membership = {
    price: number,
    id: string,
    expireType: string,
    percentOff: number,
    applyServices: string,
    additionalPrivileges: string[],
    condition: string,
    theme: string
}

export const memberships: membership[] = [
    {
        id: 'membership1',
        additionalPrivileges: ['Free herbal stream bath', '25min reflexology'],
        applyServices: 'on all treatments',
        condition: 'above offer for only 1 person',
        expireType: 'month',
        percentOff: 10,
        price: 250,
        theme: 'orange'
    },
    {
        id: 'membership2',
        additionalPrivileges: ['Free facial treatment', '10% off products'],
        applyServices: 'on selected services',
        condition: 'valid for 3 months',
        expireType: 'month',
        percentOff: 15,
        price: 300,
        theme: 'blue'
    },
    {
        id: 'membership3',
        additionalPrivileges: ['Free massage upgrade', '15min scalp massage'],
        applyServices: 'on all massage treatments',
        condition: 'above offer for 2 people',
        expireType: 'month',
        percentOff: 20,
        price: 350,
        theme: 'green'
    }
]