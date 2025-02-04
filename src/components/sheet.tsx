

import { TiThMenu } from "react-icons/ti";
import { Button } from "@/components/ui/button"; // Ensure this button supports custom styling
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import Image from "next/image"; // Import Image for image optimization in Next.js
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Product {
  title: string;
  price: number;
  id: number;
  Image_url: string;
  old_price?: string;
}

const BrowsingStyleProducts: Product[] = [
  {
    title: "Casual Dress",
    id: 1,
    price: 150,
    Image_url: "\image 10.png",
    old_price: "300"
  },
  {
    title: " Formal",
    id: 2,
    price: 120,
    Image_url: "/image 9 (2).png"
  },
  {
    title: "Sports T-Shirt",
    id: 3,
    price: 80,
    Image_url: "/images/sports-tshirt.png"
  },
  {
    title: "Winter Coat",
    id: 4,
    price: 200,
    Image_url: "/image 9 (1).png",
    old_price: "350"
  }
];

export function SheetSide() {
  return (
    <div className="grid gap-2">
      <Sheet>
        <SheetTrigger asChild>
          {/* Menu Button */}
          <Button className="p-2 text-gray-700 bg-transparent border border-gray-300 rounded-md hover:bg-gray-100">
            <TiThMenu className="text-2xl" />
          </Button>
        </SheetTrigger>

        {/* Sheet Content */}
        <SheetContent side="left">
          {/* Navbar Links */}
          <ul className="grid gap-4 mt-4">
            <li>
              <Link href="#" className="block text-lg text-gray-800 hover:text-blue-500">
                NavigationMenuDemo
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-lg text-gray-800 hover:text-blue-500">
                On Sale
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-lg text-gray-800 hover:text-blue-500">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-lg text-gray-800 hover:text-blue-500">
                Brands
              </Link>
            </li>
          </ul>

          {/* Browsing Style Section */}
          <SheetHeader className="mt-6">
            <SheetTitle>Browse By Dress Style</SheetTitle>
            <SheetDescription>
              Explore our latest collections based on styles.
            </SheetDescription>
          </SheetHeader>

          <div className="grid gap-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {BrowsingStyleProducts.map((product) => (
                <div key={product.id} className="text-center cursor-pointer">
                  <div className="w-[250px] h-[230px] bg-[#f0f0f0] rounded-[20px] flex items-center justify-center">
                    <Image
                      src={product.Image_url} // Ensure this path is correct for each product
                      alt={product.title}
                      width={250}
                      height={230}
                      className="w-full h-full object-cover rounded-[20px]"
                    />
                  </div>
                  <div className="mt-2">
                    <p className="text-lg md:text-2xl font-bold">{product.title}</p>
                    <p className="font-bold mt-1">
                      {product.price}{" "}
                      {product.old_price && (
                        <span className="text-gray-400 font-bold line-through ml-2">
                          {product.old_price}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <SheetFooter>
            <SheetClose asChild>
              <Button type="button" className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2">
                Save Changes
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
