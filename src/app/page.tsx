import { sanityFetch } from "@/sanity/lib/fetch";
import { allProducts } from "@/sanity/lib/queries";
import Image from "next/image";

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};
export default async function Home() {
  const products: Product[] = await sanityFetch({ query: allProducts });
  return (
    console.log(products),
    <div className="bg-pink-950 min-h-screen py-8 px-4">
  <h1 className="text-3xl font-bold text-center text-pink-500 mb-8">
    Our Products
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {products.map((product) => (
    <div
      key={product._id}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
    >
      <div className="flex justify-center items-center p-4">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 truncate">
          {product.name}
        </h2>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {product.description}
        </p>
        <p className="text-lg font-bold text-gray-800 mt-4">
          ${product.price}
        </p>
        <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all">
          View Details
        </button>
      </div>
    </div>
  ))}
</div>

</div>
  );
}
