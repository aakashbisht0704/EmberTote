// import { client } from "../lib/sanity";
// import Image from "next/image";
// import Link from "next/link";
// import { simplifiedProduct } from "../interface";

// async function getData(category: string) {
//   const query = `*[_type == "product" && category->name == "${category}"]| order(_updatedAt desc){
//   _id,
//      "imageUrl" : images[0].asset->url,
//     price,
//     name,
//     "slug": slug.current,
//     "category": category->name
// }`;

//   const data = await client.fetch(query);

//   return data;
// }



// export default async function CategoryPage({
//   params,
// }: {
//   params: { category: string };
// }) {
//   const data: simplifiedProduct[] = await getData(params.category);

//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <div className="flex justify-between items-center">
//           <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//             Our {params.category}
//           </h2>
//         </div>

//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           {data.map((product) => (
//             <Link href={`/product/${product.slug}`}>
//             <div key={product._id} className="group relative">
//               <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 border">
//                 <Image
//                   src={product.imageUrl}
//                   alt="Product Image"
//                   className="w-full h-full object-cover object-center lg:h-full lg:w-full"
//                   width={300}
//                   height={300}
//                 />
//               </div>
//               <div className="mt-4 flex text-gray-700">
//                 <div>
//                   <h3 className="text-sm justify-between">
//                       {product.name}
//                   </h3>
//                   <p className="mt-1 text-sm text-gray-500">
//                     {product.categoryName}
//                   </p>
//                   <p className="text-sm font-medium text-gray-900">
//                     ₹{product.price}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import { client } from "../lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { simplifiedProduct } from "../interface";

// Function to fetch products by category
async function getData(category: string) {
  try {
    const query = `*[_type == "product" && category->name == "${category}"] | order(_updatedAt desc) {
      _id,
      "imageUrl": images[0].asset->url,
      price,
      name,
      "slug": slug.current,
      "categoryName": category->name
    }`;
    const data = await client.fetch<simplifiedProduct[]>(query);
    return data;
  } catch (error) {
    console.error(`Error fetching data for category ${category}:`, error);
    throw error;
  }
}

// Function to fetch all category names
async function fetchAllCategories() {
  try {
    const query = `*[_type == "category"] {
      name
    }`;
    const categories = await client.fetch<{ name: string }[]>(query);
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

// generateStaticParams function for Next.js
export async function generateStaticParams() {
  const categories = await fetchAllCategories();
  return categories.map(category => ({
    params: {
      category: category.name
    }
  }));
}

// Component to display products by category
export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data: simplifiedProduct[] = await getData(params.category);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our {params.category}
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <Link key={product._id} href={`/product/${product.slug}`}>
              <div className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 border">
                  <Image
                    src={product.imageUrl}
                    alt="Product Image"
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="mt-4 flex text-gray-700">
                  <div>
                    <h3 className="text-sm justify-between">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.categoryName}
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      ₹{product.price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
