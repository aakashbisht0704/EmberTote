"use client"

import { Button } from "@/components/ui/button"
import { useShoppingCart } from "use-shopping-cart"
import { urlFor } from "../lib/sanity";

export interface ProductCart{
    name: string;
    description: string;
    price: number;
    currency: string;
    image: any;
    _id : string;
}

export default function AddToBag({currency, description, name, image, price, _id}: ProductCart){
    const {addItem, handleCartClick} = useShoppingCart();
    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        id: _id,
    }
    return(
        <Button onClick={()=>{
            addItem(product), handleCartClick();
        }}>
            Add to Cart
        </Button>
    )
}