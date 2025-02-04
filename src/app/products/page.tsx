

import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface Product {
    title: string;
    price: number;
    id: number;
    rating?: string;
    old_price?: string;
    Image_url: string;
}

let Products: Product[] = [
    {
        title: "T-SHIRT WITH TAPE DETAILS",
        id: 1,
        price: 100,
        Image_url: "/image 8.png",
        old_price: "5200"
    },
    {
        title: "SKINNY FIT JEANS",
        id: 2,
        price: 100,
        Image_url: "/Frame 33 (1).png"
    },
    {
        title: "CHECKERED SHIRT",
        id: 3,
        price: 100,
        Image_url: "/image 9 (1).png"
    },
    {
        title: "SLEEVE STRIPED T-SHIRT",
        id: 4,
        price: 100,
        Image_url: "/image 8.png",
        old_price: "200"
    }
];

let star = (
    <>
        <FaStar />
        <FaStar />
        <FaStar />
    </>
);

export default function ProductsPage() {
    return (
        <div className="w-full h-auto mt-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">NEW ARRIVALS</h1>
            <div className="flex flex-wrap justify-center px-6 md:px-10 gap-8">
                {Products.map((data) => {
                    return (
                        <div key={data.id} className="w-full md:w-[250px] bg-[#f7f7f7] rounded-[20px] shadow-lg overflow-hidden">
                            <div className="relative w-full h-[230px]">
                                <Image src={data.Image_url} alt={data.title} layout="responsive" width={250} height={230} className="rounded-t-[20px]" />
                            </div>
                            <div className="p-4 text-center">
                                <p className="text-lg md:text-xl font-semibold text-gray-800">{data.title}</p>
                                <div className="flex justify-center text-yellow-400 my-2">{star}</div>
                                <p className="font-bold text-gray-900">{data.price} 
                                    {data.old_price && <span className="text-gray-500 font-normal line-through ml-2">{data.old_price}</span>}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
