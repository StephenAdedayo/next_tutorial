import { Product } from "@/components/Product"
import { Reviews } from "@/components/Reviews"
import { Suspense } from "react"

export default function  ProductDetail  ()  {
    return (
        <div>
            <h1>Product Details page</h1>
            <Suspense fallback={<p>loading products......</p>}>
            <Product />

            </Suspense>

            <Suspense fallback={<p>loading reviews........</p>}>
            <Reviews />

            </Suspense>
        </div>
    )
}