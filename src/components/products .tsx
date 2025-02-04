
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

// Define the interface for product
interface TopSall {
    title: string;
    price: number;
    id: number;
    rating?: string;
    old_price?: string;
    Image_url: string;
}

// Top Selling Products Data
let TopSellingProducts: TopSall[] = [
    {
        title: "VERTICAL STRIPED SHIRT",
        id: 1,
        price: 100,
        Image_url: "/image1.png",
        old_price: "5200"
    },
    {
        title: "FADED SKINNY JEANS",
        id: 2,
        price: 100,
        Image_url: "/image2.png"
    },
    {
        title: "VERTICAL STRIPED SHIRT",
        id: 3,
        price: 100,
        Image_url: "/image 1 .png"
    },
    {
        title: "COURAGE GRAPHIC T-SHIRT",
        id: 4,
        price: 100,
        Image_url: "\image4.png",
        old_price: "200"
    }
];

// Browsing Style Products Data
let BrowsingStyleProducts: TopSall[] = [
    {
        title: "CASUAL DRESS",
        id: 5,
        price: 150,
        Image_url: "/image4.png",
        old_price: "300"
    },
    {
        title: "party",
        id: 6,
        price: 120,
        Image_url: "/image5.png"
    },
    {
        title: "Farmal",
        id: 7,
        price: 80,
        Image_url: "/image6.png"
    },
    {
        title: "Traditional",
        id: 8,
        price: 200,
        Image_url: "b.png",
        old_price: "350"
    }
];

// Star component for ratings
let star = (
    <>
        <FaStar />
        <FaStar />
        <FaStar />
    </>
);

export default function Hero() {
    return (
        <div className="w-full h-auto mt-10">
            {/* Top Selling Products */}
            <div className="mt-10">
                <h1 className="text-3xl md:text-4xl font-bold text-center">TOP SELLING</h1>
                <div className="flex flex-wrap justify-center px-8 mt-10 gap-6">
                    {TopSellingProducts.map((data) => (
                        <Link key={data.id} href={`/Products/${data.id}`}>
                            <div className="text-center cursor-pointer">
                                <div className="w-[250px] h-[230px] bg-[#f0f0f0] rounded-[20px] flex items-center justify-center">
                                    <Image
                                        src={data.Image_url}
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

            {/* Browsing Style Products */}
            <div className="mt-10">
                <h1 className="text-3xl md:text-4xl font-bold text-center">BROWSING STYLE</h1>
                <div className="flex flex-wrap justify-center px-8 mt-10 gap-6">
                    {BrowsingStyleProducts.map((data) => (
                        <Link key={data.id} href={`/Products/${data.id}`}>
                            <div className="text-center cursor-pointer">
                                <div className="w-[250px] h-[230px] bg-[#f0f0f0] rounded-[20px] flex items-center justify-center">
                                    <Image
                                        src={data.Image_url}
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
        </div>
    );
}
