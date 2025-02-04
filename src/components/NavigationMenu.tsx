
import Image from "next/image";

export default function Hero() {
  return (
    <main className="w-full h-[500px] flex flex-col md:flex-row justify-between items-center bg-gray-200 px-6 py-8">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl md:text-5xl font-extrabold leading-tight">
          FIND CLOTHES THAT MATCH YOUR STYLE
        </h1>
        <p className="text-sm mt-3 text-gray-700">
          Browse through our diverse range of meticulously crafted garments
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="bg-black py-2 px-6 rounded-lg mt-4 text-sm text-white hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>

      {/* Right Section */}
      <div className="relative md:w-1/2 flex justify-center items-center">
        {/* Main Image */}
        <Image
          src="/WhatsApp Image 2025-01-30 at 17.56.06_e4d939ab.jpg"
          width={400}
          height={400}
          alt="Clothing Image"
          className="rounded-lg shadow-lg object-cover"
        />

        {/* Decorative Stars */}
        <Image
          src="/star.png.webp"
          width={60}
          height={60}
          alt="Star Decoration"
          className="absolute top-5 left-5 animate-pulse"
        />

        <Image
          src="/star.png.webp"
          width={60}
          height={60}
          alt="Star Decoration"
          className="absolute bottom-5 right-5 animate-pulse"
        />
      </div>
    </main>
  );
}
