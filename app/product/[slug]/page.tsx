// import AddToBag from "@/app/components/addToBag";
// import ImageGallery from "@/app/components/ImageGallery";
// import { fullProduct } from "@/app/interface";
// import { client } from "@/app/lib/sanity";
// import { Button } from "@/components/ui/button";
// import { Star, Truck } from "lucide-react";

// async function getData(slug: string) {
//   const query = `*[_type == 'product' && slug.current == "${slug}"][0]{
//   _id,
//     images,
//     price,
//     name,
//     description,
//     "slug": slug.current,
//     "categoryName": category->name,
// }`;

//   const data = await client.fetch(query);

//   return data;
// }


// export default async function productPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const data: fullProduct = await getData(params.slug);

//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-screen-xl px-4 md:px-8">
//         <div className="grid gap-8 md:grid-cols-2">
//           <ImageGallery images={data.images}></ImageGallery>

//           <div className="md:py-8">
//             <div className="mb-2 md:mb-3">
//               <span className="mb-0.5 inline-block text-gray-500">
//                 {data.categoryName}
//               </span>

//               <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
//                 {data.name}
//               </h2>
//             </div>
//             <div className="mb-6 flex items-center gap-3 md:mb-10">
//               <Button className="rounded-full gap-x-3">
//                 <span className="text-sm">4.2</span>
//                 <Star className="h-5 w-5" />
//               </Button>

//               <span className="text-sm text-gray-500 transition duration-100">
//                 56 Ratings
//               </span>
//             </div>
//             <div className="mb-4">
//               <div className="flex items-end gap-2">
//                 <span className="text-xl font-bold text-gray-800 md:text-2xl">
//                   ₹{data.price}
//                 </span>
//                 <span className="mb-0.5 text-red-500 line-through">
//                   ₹{data.price + 300}
//                 </span>
//               </div>
//               <span className="text-sm text-gray-500">
//                 Incl. Vat plus shipping
//               </span>
//             </div>
//             <div className="mb-6 flex items-center gap-2 text-gray-500">
//               <Truck className="w-6 h-6"></Truck>
//               <span className="text-sm">2-4 day shipping</span>
//             </div>
//             <div className="flex gap-2.5">
//               <AddToBag
//                 currency="INR"
//                 description={data.description}
//                 image={data.images[0]}
//                 name={data.name}
//                 price={data.price}
//                 key={data._id}
//                 _id={data._id}
//               />
//               <Button variant={"outline" && "secondary"}>Checkout Now</Button>
//             </div>

//             <p className="mt-12 text-base text-gray-500 tracking-wide">
//               {data.description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import AddToBag from "@/app/components/addToBag";
import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";

// Function to fetch product data by slug
async function getData(slug: string) {
  const query = `*[_type == 'product' && slug.current == "${slug}"][0]{
    _id,
    images,
    price,
    name,
    description,
    "slug": slug.current,
    "categoryName": category->name,
  }`;

  const data: fullProduct = await client.fetch(query);
  return data;
}

// Function to fetch all product slugs
async function fetchAllProductSlugs() {
  const query = `*[_type == 'product'] {
    "slug": slug.current
  }`;
  const slugs = await client.fetch<{ slug: string }[]>(query);
  return slugs;
}

// generateStaticParams function for Next.js
export async function generateStaticParams() {
  const slugs = await fetchAllProductSlugs();
  return slugs.map(slug => ({
    params: {
      slug: slug.slug
    }
  }));
}

// Component to display product details
export default async function productPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>

              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>
            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-3">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5" />
              </Button>

              <span className="text-sm text-gray-500 transition duration-100">
                56 Ratings
              </span>
            </div>
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ₹{data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ₹{data.price + 300}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                Incl. Vat plus shipping
              </span>
            </div>
            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="w-6 h-6" />
              <span className="text-sm">2-4 day shipping</span>
            </div>
            <div className="flex gap-2.5">
              <AddToBag
                currency="INR"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                _id={data._id}
              />
              <Button variant="outline">Checkout Now</Button>
            </div>

            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
