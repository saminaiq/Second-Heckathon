



import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Stylish Jacket",
    price: "$49.99",
    image: "/images/jacket.jpg",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Classic Sneakers",
    price: "$59.99",
    image: "/images/sneakers.jpg",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Smart Watch",
    price: "$99.99",
    image: "/images/watch.jpg",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Leather Handbag",
    price: "$79.99",
    image: "/images/handbag.jpg",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Sports Cap",
    price: "$19.99",
    image: "/images/cap.jpg",
    rating: 4.2,
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    price: "$89.99",
    image: "/images/earbuds.jpg",
    rating: 4.9,
  },
];

export default function () {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <p className="text-yellow-500">⭐ {product.rating}</p>
            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}




