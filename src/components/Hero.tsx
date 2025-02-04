
import Image from "next/image";

export default function Hero() {
  return (
    <main className="w-full h-[500px] flex justify-between items-start bg-gray-200 px-6">
      {/* Left Section */}
      <div className="w-[500px]">
        <h1 className="text-2xl md:text-5xl font-extrabold">
          FIND CLOTHES THAT MATCH YOUR STYLE
        </h1>
        <p className="text-sm mt-3">
          Browse through our diverse range of meticulously crafted garments
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="bg-black py-2 px-4 rounded-[16px] mt-4 text-sm text-white">
          Shop Now
        </button>
      </div>

      {/* Right Section */}
      <div className="relative">
        {/* Main Image */}
        <Image
          src="/cover.jpeg"
          width={300}



          height={300}
          alt="Clothing Image"
          className="object-cover"
        />

        {/* Star Images */}

        <Image
          src="/star.png.webp"
          className="w-[80px] absolute top-5 left-5"
          width={80}
          height={80}
          alt="Star Decoration"
        />

        <Image
          src="/star.png.webp"
          className="w-[80px] absolute bottom-5 right-5"
          width={80}
          height={80}
          alt="Star Decoration"
        />
      </div>
    </main>
  );
}
