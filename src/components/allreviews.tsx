
import { FaStar } from 'react-icons/fa';
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// ✅ Carousel component
export function CarouselSize() {
  return (
    <Carousel opts={{ align: "start" }} className="max-w-screen-2xl mx-auto">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

// ✅ Fixed Product Data (Images from `public` folder)
const products = [
  { name: 'Product 1', description: 'Great product!', price: '25.99', image: '/image1.png' },
  { name: 'Product 2', description: 'Fantastic build quality.', price: '30.99', image: '/image2.png' },
  { name: 'Product 3', description: 'Durable and reliable.', price: '40.00', image: '/image3.png' },
  { name: 'Product 4', description: 'Affordable and premium.', price: '22.50', image: '/image4.png' },
  { name: 'Product 5', description: 'Stylish and functional.', price: '50.00', image: '/image5.png' }
];

// ✅ Review Data
const reviews = [
  { name: 'Sarah M', feedback: 'Excellent service!', date: '2025-02-01' },
  { name: 'Emma L', feedback: 'Very satisfied!', date: '2025-01-15' },
  { name: 'Micheel B', feedback: 'Good quality, but delivery was delayed.', date: '2025-01-10' },
  { name: 'Saad Ahmad', feedback: 'Good quality but so late.', date: '2025-01-08' },  
  { name: 'Humara Khan', feedback: 'Excellent but price is high.', date: '2025-01-07' },  
  { name: 'John D', feedback: 'Works well, but shipping was slow.', date: '2025-01-05' }
];

// ✅ AllReviews Component
export default function AllReviews() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* 🏆 Top section */}
      <h1 className="text-xl font-bold text-center mb-4">All Reviews</h1>
      <CarouselSize />

      {/* 🛒 Product section */}
      <div className="p-4 space-y-4">
        <h2 className="text-lg font-semibold text-center mb-4">Our Products</h2>
        {products.map((product, index) => (
          <div key={index} className="flex flex-col p-4 mb-4 border rounded-md shadow-lg">
            <Image 
              src={product.image} 
              alt={product.name} 
              width={256} 
              height={256} 
              className="object-cover mb-4" 
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.description}</p>
            <p className="text-lg font-bold text-gray-800 mt-2">${product.price}</p>
            {/* 🌐 Show Image URL */}
            <p className="text-sm text-blue-500 break-all">Image URL: {product.image}</p>
            <button className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* ⭐ Reviews section */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-center mb-4">Customer Reviews</h2>
        {reviews.map((data, index) => (
          <div key={index} className="flex flex-col p-4 mb-4 border-b">
            <div className="flex items-center space-x-2">
              {/* 🌟 Star Ratings */}
              <div className="flex text-yellow-400">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <h2 className="text-lg font-semibold">{data.name}</h2>
            </div>
            <p className="mt-2 text-gray-600">{data.feedback}</p>
            <p className="text-sm text-gray-400">{data.date}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
