

import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { useParams } from "next/navigation";

interface IProducts {
    title: string;
    price: number;
    id: number;
    rating?: string;
    old_price?: string;
    Image_url: string;
    Image1: string;
    Image2: string;
    Image3: string;
}

let Products = [
    {
        title: "VERTICAL STRIPED SHIRT",
        id: 1,
        price: 100,
        Image_url: "/image1.png",
        old_price: "5200",
        Image1: "/detalil.png",
        Image2: "/detail2.png",
        Image3: "/detail3.png",
        Image4:"detaitpublic/image 9 (1).png"
    },
    {
        title: "FADED SKINNY JEANS",
        id: 2,
        price: 100,
        Image_url: "/image2.png",
        Image1: "/detalil.png",
        Image2: "/detail2.png",
        Image3: "/detail3.png",
    },
    {
        title: "VERTICAL STRIPED SHIRT",
        id: 3,
        price: 100,
        Image_url: "/image3.png",
        Image1: "/detalil.png",
        Image2: "/detail2.png",
        Image3: "/detail3.png",
    },
    {
        title: "COURAGE GRAPHIC T-SHIRT",
        id: 4,
        price: 100,
        Image_url: "/image4.png",
        old_price: "200",
        Image1: "/detalil.png",
        Image2: "/detail2.png",
        Image3: "/detail3.png",
    }
];

export default function prop_Detail() {
    const params = useParams();
    const id = params.id; // dynamic id from URL
    const item = Products.find((item) => item.id === Number(id));

    if (!item) {
        return <h1>Product not found</h1>
    }

    return (
        <div>
            {/* Left section */}
            <div className="w-[225px] bg-red-400">
                {/* Images */}
                <Image src={item.Image1} className="w-full h-[150px]" alt="product" width={100} height={100} />
                <Image src={item.Image2} className="w-full h-[150px]" alt="product" width={100} height={100} />
                <Image src={item.Image3} className="w-full h-[150px]" alt="product" width={100} height={100} />
            </div>

            {/* Mid section */}
            <div className="w-[444px] bg-green-500 h-[500px]">
                <Image src={item.Image3} alt="product" width={100} height={100} />
            </div>

            {/* Right section */}
            <div className="w-[600px] h-[500px]">
                <h1>{item.title}</h1>
                <div className="flex">
                    {/* Star Ratings */}
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <p>{item.price} <span>{item.old_price}</span></p>
                <p>This graphic T-shirt is perfect for any occasion, crafted from soft and better fabrics.</p>

                {/* Select color */}
                <div className="flex">
                    <div className="w-[80px] h-[80px] bg-green-500 rounded-full"></div>
                    <div className="w-[80px] h-[80px] bg-green-500 rounded-full"></div>
                    <div className="w-[80px] h-[80px] bg-green-500 rounded-full"></div>
                </div>

                {/* Choose Size */}
                <div>
                    <p>Choose Size</p>
                    <div className="flex">
                        <div className="w-[80px] h-[80px] bg-gray-500">Small</div>
                        <div className="w-[80px] h-[80px] bg-gray-500">Medium</div>
                        <div className="w-[80px] h-[80px] bg-gray-500">Large</div>
                    </div>
                </div>
                {/*BTHS*/}
                <div>
                <div className="w-[80px] h-[80px] bg-gray-500">Medium</div>
                <div className="w-[80px] h-[80px] bg-gray-500">Large</div>
                <div className="w-[80px] h-[80px] bg-gray-500">Large</div>
                </div>
            </div>
        </div>
    );
}
