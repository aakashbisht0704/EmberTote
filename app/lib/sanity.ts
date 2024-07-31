import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "a2xt129r",
    dataset: "production",
    apiVersion: "v2023-07-01",
    useCdn: true
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source)
}