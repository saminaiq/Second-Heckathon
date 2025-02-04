
import { FaInstagram, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa6";
import Offers from "./offer";
import Image from "next/image";

export default function Footer() {
  const paymentMethods = ["/Ellipse 2.png", "/Ellipse 2.png", "/Ellipse 2.png", "/Ellipse 2.png", "/Ellipse 2.png"];

  return (
    <main className="bg-[#f0f0f0] w-full p-5">
      {/* Offers Section */}
      <div>
        <Offers />
      </div>

      {/* Container */}
      <div className="flex flex-wrap justify-between items-center mt-5">
        {/* Left Section */}
        <div className="w-full md:w-1/2 lg:w-auto text-center md:text-left">
          <h2 className="text-lg font-bold">SHOP.CO</h2>
          <p className="text-sm text-gray-600 max-w-xs mx-auto md:mx-0">
            We have clothes that suit your style and which you are proud to wear.
            From women to men.
          </p>
          {/* Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <FaInstagram className="text-gray-700 hover:text-pink-500 cursor-pointer text-2xl" />
            <FaFacebook className="text-gray-700 hover:text-blue-600 cursor-pointer text-2xl" />
            <FaGithub className="text-gray-700 hover:text-black cursor-pointer text-2xl" />
            <FaTwitter className="text-gray-700 hover:text-blue-400 cursor-pointer text-2xl" />
          </div>
        </div>

        {/* Mid Section */}
        <div className="w-full flex flex-wrap justify-around gap-4 mt-5">
          {/* Box 1 */}
          <div className="w-full sm:w-40 bg-white p-3 shadow-md rounded-md text-center">
            <h2 className="font-semibold">Company</h2>
            <ul className="text-gray-600 space-y-1">
              <li className="hover:text-blue-500 cursor-pointer">About Us</li>
              <li className="hover:text-blue-500 cursor-pointer">Our Service</li>
              <li className="hover:text-blue-500 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-blue-500 cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>

          {/* Box 2 */}
          <div className="w-full sm:w-40 bg-white p-3 shadow-md rounded-md text-center">
            <h2 className="font-semibold">Support</h2>
            <ul className="text-gray-600 space-y-1">
              <li className="hover:text-blue-500 cursor-pointer">Contact Us</li>
              <li className="hover:text-blue-500 cursor-pointer">FAQ</li>
              <li className="hover:text-blue-500 cursor-pointer">Returns</li>
              <li className="hover:text-blue-500 cursor-pointer">Shipping</li>
            </ul>
          </div>

          {/* Box 3 */}
          <div className="w-full sm:w-40 bg-white p-3 shadow-md rounded-md text-center">
            <h2 className="font-semibold">Quick Links</h2>
            <ul className="text-gray-600 space-y-1">
              <li className="hover:text-blue-500 cursor-pointer">Blog</li>
              <li className="hover:text-blue-500 cursor-pointer">Careers</li>
              <li className="hover:text-blue-500 cursor-pointer">Affiliate</li>
              <li className="hover:text-blue-500 cursor-pointer">Gift Cards</li>
            </ul>
          </div>

          {/* Box 4 */}
          <div className="w-full sm:w-40 bg-white p-3 shadow-md rounded-md text-center">
            <h2 className="font-semibold">Resources</h2>
            <ul className="text-gray-600 space-y-1">
              <li className="hover:text-blue-500 cursor-pointer">Help Center</li>
              <li className="hover:text-blue-500 cursor-pointer">Community</li>
              <li className="hover:text-blue-500 cursor-pointer">Developers</li>
              <li className="hover:text-blue-500 cursor-pointer">Partners</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-5 border-t pt-3 text-center text-gray-600 text-sm">
        <p>Shop.Co &copy; 2000-{new Date().getFullYear()}, All Rights Reserved</p>
        {/* Payment Methods */}
        <div className="flex justify-center space-x-2 mt-2 flex-wrap">
          {paymentMethods.map((src, index) => (
            <Image key={index} src={src} width={50} height={50} alt="payment method" />
          ))}
        </div>
      </div>
    </main>
  );
}
