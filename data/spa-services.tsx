import { ServiceCategory } from "@/types/service";
import { imgBackService, imgFootService, imgLeafMassage, imgRelaxService } from "./imgLinks";

export type SpaService = {
    id: string;
    name: string;
    shortDescription: string;
    img: string;
    tag: string;
    category: string;
    detailedDescription: string;
    duration_price: [
        {
            duration: '60min';
            price: string;
        },
        {
            duration: '75min';
            price: string;
        },
        {
            duration: '90min';
            price: string;
        }
    ];
};

export type SpaServices = {
    category: ServiceCategory;
    services: SpaService[];
}[];

export const dataSpaServices: SpaServices = [
    {
        category: 'Seated',
        services: [
            {
                id: '1',
                name: 'Relaxing Back Massage',
                shortDescription: 'A soothing back massage for tension relief.',
                img: imgRelaxService,
                tag: 'signature',
                category: 'Seated',
                detailedDescription: 'A calming back massage that targets muscle tension in the back, neck, and shoulders. Ideal for relaxation and relieving stress.',
                duration_price: [
                    { duration: '60min', price: '50' },
                    { duration: '75min', price: '65' },
                    { duration: '90min', price: '80' }
                ]
            },
            {
                id: '2',
                name: 'Head & Shoulder Massage',
                shortDescription: 'Focus on your head and shoulders for a quick refresh.',
                img: imgLeafMassage,
                tag: '10% OFF',
                category: 'Seated',
                detailedDescription: 'This head and shoulder massage targets areas of tension and stress, providing instant relief and promoting relaxation. Perfect for short breaks.',
                duration_price: [
                    { duration: '60min', price: '45' },
                    { duration: '75min', price: '55' },
                    { duration: '90min', price: '70' }
                ]
            },
            {
                id: '3',
                name: 'Foot Reflexology',
                shortDescription: 'Targeted massage for your feet to relieve pressure.',
                img: imgFootService,
                tag: '10% OFF',
                category: 'Seated',
                detailedDescription: 'A reflexology treatment focusing on pressure points in the feet, aimed at improving circulation and promoting relaxation throughout the body.',
                duration_price: [
                    { duration: '60min', price: '40' },
                    { duration: '75min', price: '55' },
                    { duration: '90min', price: '70' }
                ]
            },
            {
                id: '4',
                name: 'Neck & Back Relief',
                shortDescription: 'Targeted therapy for neck and back pain.',
                img: imgBackService,
                tag: '10% OFF',
                category: 'Seated',
                detailedDescription: 'A therapy that focuses on relieving pain and tension in the neck and back using various techniques including kneading, tapping, and pressure points.',
                duration_price: [
                    { duration: '60min', price: '55' },
                    { duration: '75min', price: '65' },
                    { duration: '90min', price: '80' }
                ]
            }
        ]
    },
    {
        category: 'Bedded',
        services: [
            {
                id: '5',
                name: 'Full Body Relaxation Massage',
                shortDescription: 'A complete body massage to relax and rejuvenate.',
                img: 'https://example.com/images/full_body_massage.jpg',
                tag: '10% OFF',
                category: 'Bedded',
                detailedDescription: 'A full-body massage that works on every muscle group to reduce stress, improve circulation, and leave you feeling completely relaxed.',
                duration_price: [
                    { duration: '60min', price: '70' },
                    { duration: '75min', price: '85' },
                    { duration: '90min', price: '100' }
                ]
            },
            {
                id: '6',
                name: 'Aromatherapy Massage',
                shortDescription: 'Experience the soothing effects of essential oils.',
                img: 'https://example.com/images/aromatherapy_massage.jpg',
                tag: '10% OFF',
                category: 'Bedded',
                detailedDescription: 'Aromatherapy massage blends the therapeutic benefits of essential oils with a relaxing massage to improve mood and well-being.',
                duration_price: [
                    { duration: '60min', price: '75' },
                    { duration: '75min', price: '90' },
                    { duration: '90min', price: '110' }
                ]
            },
            {
                id: '7',
                name: 'Deep Tissue Massage',
                shortDescription: 'Targeted therapy for deeper muscle tension.',
                img: 'https://example.com/images/deep_tissue_massage.jpg',
                tag: 'signature',
                category: 'Bedded',
                detailedDescription: 'A more intense massage designed to relieve chronic muscle tension. Focuses on deep muscle layers to relieve long-term tension and stress.',
                duration_price: [
                    { duration: '60min', price: '80' },
                    { duration: '75min', price: '95' },
                    { duration: '90min', price: '115' }
                ]
            },
            {
                id: '8',
                name: 'Swedish Massage',
                shortDescription: 'Classic massage for relaxation and stress relief.',
                img: 'https://example.com/images/swedish_massage.jpg',
                tag: '10% OFF',
                category: 'Bedded',
                detailedDescription: 'A relaxing full-body massage that uses long strokes, kneading, and circular movements to enhance relaxation and reduce stress.',
                duration_price: [
                    { duration: '60min', price: '60' },
                    { duration: '75min', price: '75' },
                    { duration: '90min', price: '90' }
                ]
            }
        ]
    }
];

