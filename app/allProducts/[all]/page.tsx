// import { simplifiedProduct } from "../../interface";
// import { client } from "@/app/lib/sanity"
// import Link from "next/link";
// import Image from "next/image";

// async function getData() {
//   const query = `*[_type == 'product'] | order(_updatedAt desc){
//     _id,
//       price,
//       name,
//       "slug": slug.current,
//       "categoryName": category->name,
//     "imageUrl": images[0].asset->url
//   }`;

//   const data = await client.fetch(query);

//   return data;
// }

// export default async function Newest() {
//   const data: simplifiedProduct[] = await getData();

//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <div className="flex justify-between items-center">
//           <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//             All Products
//           </h2>
//         </div>

//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//             {data.map((product)=>(
//               <Link href={`/product/${product.slug}`}>
//                 <div key={product._id} className="group relative">
//                     <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 border">
//                         <Image 
//                         src={product.imageUrl} 
//                         alt="Product Image" 
//                         className="w-full h-full object-cover object-center lg:h-full lg:w-full"
//                         width={300}
//                         height={300}
//                         priority
//                         />
//                     </div>
//                     <div className="mt-4 flex text-gray-700">
//                         <div>
//                             <h3 className="text-sm justify-between">
                                
//                                 {product.name}
//                             </h3>
//                             <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>
//                             <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
//                         </div>
                        

//                     </div>
//                 </div>
//               </Link>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import { simplifiedProduct } from "../../interface";
import { client } from "@/app/lib/sanity";
import Link from "next/link";
import Image from "next/image";
import { GetStaticPropsContext } from 'next';

// Function to fetch all product slugs
async function fetchAllProductSlugs() {
  const query = `*[_type == 'product'] {
    "slug": slug.current
  }`;
  const slugs = await client.fetch<{ slug: string }[]>(query);
  return slugs;
}

// generateStaticParams function to be used by Next.js
export async function generateStaticParams() {
  const slugs = await fetchAllProductSlugs();
  return slugs.map(slug => ({
    params: {
      all: slug.slug
    }
  }));
}

// Fetch all product data
async function getData() {
  const query = `*[_type == 'product'] | order(_updatedAt desc){
    _id,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
  }`;
  const data = await client.fetch<simplifiedProduct[]>(query);
  return data;
}

// Component to display all products
export default async function Newest() {
  const data = await getData();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            All Products
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <Link href={`/product/${product.slug}`} key={product._id}>
              <div className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80 border">
                  <Image
                    src={product.imageUrl}
                    alt="Product Image"
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                    priority
                  />
                </div>
                <div className="mt-4 flex text-gray-700">
                  <div>
                    <h3 className="text-sm justify-between">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>
                    <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
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
