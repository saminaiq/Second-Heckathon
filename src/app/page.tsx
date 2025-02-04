
 "use client";

import Announcement from "@/components/Announcement"
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Fonts from "@/components/fonts";
import Products from "./products/page"; // صحیح فائل کا نام
import { Link, Shirt } from "lucide-react";
import Top_Sall from "./products/sall ";
import Dress from "@/components/dress";
import { Carousel } from "@/components/ui/carousel";
import Offers from "@/components/offer";
import Footer from "@/components/footer";
import AllReviews from "@/components/allreviews";
import Tshirts from "../components/products"; // Adjust based on file structure
import { BreadcrumbDemo } from "@/components/Breadcrupm";
import { Accordion } from "@radix-ui/react-accordion";
import AccordionDemo from "@/components/ui/accordion";






export default function Home() {
  return (
    <div className="font-sans bg-gray-100">
      <Announcement />
      <Header />
      <Hero />
      <Fonts />
      <Products />
      <Top_Sall /> {/* صحیح فائل کا استعمال */}
      <Dress/>
      <Carousel/>
      <Offers/>
      <Footer/>
      <AllReviews/>
      <Products/>
      <Tshirts/>
      <BreadcrumbDemo/>
      <AccordionDemo/>
       <Shirt/>
    </div>

  );
}
