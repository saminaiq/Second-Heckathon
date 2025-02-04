
import { FaCartShopping } from "react-icons/fa6";
import { FaSearchengin } from "react-icons/fa6";
import Link from "next/link";
import { SheetSide } from "./sheet";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-[60px] flex justify-between items-center px-4 bg-white">
      {/* Left Section */}
      <div className="flex justify-center items-center">
        <SheetSide />
      </div>

      {/* Navbar */}
      <ul className="hidden md:flex space-x-5 text-black">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/sale">On Sale</Link></li>
        <li><Link href="/new-arrivals">New Arrivals</Link></li>
        <li><Link href="/brands">Brands</Link></li>
      </ul>

      {/* Search Input */}
      <div className="hidden md:flex justify-start items-center w-[330px] h-[40px] rounded-[62px] bg-[#f0f0f0] px-3">
        <FaSearchengin className="text-xl text-gray-600" />
        <input
          placeholder="Search items..."
          className="w-full ml-2 outline-none h-full bg-transparent"
        />
      </div>

      {/* Profile Image and Cart */}
      <div className="flex items-center space-x-5">
        {/* Mobile Search Icon */}
        <FaSearchengin className="text-xl md:hidden text-black" />
        
        {/* Profile Picture */}
  
        
        {/* Cart Icon */}
        <FaCartShopping className="text-2xl text-black" />
      </div>
    </header>
  );
}
