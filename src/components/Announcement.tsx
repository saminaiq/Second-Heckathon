
import { FaPlus } from "react-icons/fa6";

export default function Announcement() {
    return (
        <main className="bg-black w-full h-[35px] flex justify-between items-center px-4 relative">
            {/* Left Section */}
            <div className="flex items-center gap-2">
                <h3 className="text-white text-xs sm:text-sm">
                    Join us today and enjoy 20% off on your first order!
                </h3>
                <button className="text-white text-xs sm:text-sm underline">
                    Sign Up Now
                </button>
            </div>
            {/* Right Icon */}
            <FaPlus className="text-white absolute right-[20px] hidden sm:block cursor-pointer" />
        </main>
    );
}
