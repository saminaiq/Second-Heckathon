

"use client";
import { useState, useEffect } from "react";




import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

// Define your product interface
interface Products {
    title: string;
    price: number;
    id: number;
    rating?: string;
    old_price?: string;
    Image_url: string;
}

// Renamed the array to `productList` to avoid conflict with the component name
let productList = [
    {
        title: "VERTICAL STRIPED SHIRT",
        id: 1,
        price: 100,
        Image_url: "/image1.png",  // Corrected path
        old_price: "5200"
    },
    {
        title: "FADED SKINNY JEANS",
        id: 2,
        price: 100,
        Image_url: "/image2.png"  // Corrected path
    },
    {
        title: "VERTICAL STRIPED SHIRT",
        id: 3,
        price: 100,
        Image_url: "/image3.png"  // Corrected path
    },
    {
        title: "COURAGE GRAPHIC T-SHIRT",
        id: 4,
        price: 100,
        Image_url: "/image_9_2.png",  // Corrected path (no C:\, just relative to public)
        old_price: "200"
    }
];

// Star icon component
let star = (
    <>
        <FaStar />
        <FaStar />
        <FaStar />
    </>
);

// Main component rendering the list of T-shirts
export default function CasualShirts() {
    return (
        <div className="w-full h-[500px] mt-10">
            <h1 className="text-3xl md:text-4xl font-bold text-center">TOP SELLING</h1>
            <div className="flex flex-col md:flex-row justify-center px-8 mt-10 gap-6">
                {productList.map((data) => (
                    <Link key={data.id} href={`/Products/${data.id}`}>
                        <div className="text-center cursor-pointer">
                            <div className="w-[250px] h-[230px] bg-[#f0f0f0] rounded-[20px] flex items-center justify-center">
                                <Image
                                    src={data.Image_url}  // Use relative path (starting with '/')
                                    alt={data.title}
                                    className="w-full h-full object-cover rounded-[20px]"
                                    width={250}
                                    height={230}
                                />
                            </div>
                            <div className="mt-2">
                                <p className="text-lg md:text-2xl font-bold">{data.title}</p>
                                <p className="flex justify-center text-yellow-400">{star}</p>
                                <p className="font-bold mt-1">
                                    {data.price}
                                    {data.old_price && (
                                        <span className="text-gray-400 font-bold line-through ml-2">
                                            {data.old_price}
                                        </span>
                                    )}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
