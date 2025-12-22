"use client"
import Image from "next/image"
import Link from 'next/link'
import p5 from "@/public/E-Commerce-uiCode/assets/product-5.webp"
import p6 from "@/public/E-Commerce-uiCode/assets/product-6.webp"
import p7 from "@/public/E-Commerce-uiCode/assets/product-7.webp"
import p8 from "@/public/E-Commerce-uiCode/assets/product-8.webp"
import p9 from "@/public/E-Commerce-uiCode/assets/product-9.webp"
import p10 from "@/public/E-Commerce-uiCode/assets/product-10.webp"
import p11 from "@/public/E-Commerce-uiCode/assets/product-11.webp"
import p12 from "@/public/E-Commerce-uiCode/assets/product-12.webp"

const products = [
    { id: 5, name: "Striped Sweater", price: "$90.00", image: p5, category: "Women" },
    { id: 6, name: "Modern Pants", price: "$120.00", image: p6, category: "Men" },
    { id: 7, name: "Classic Watch", price: "$250.00", image: p7, category: "Accessories" },
    { id: 8, name: "Leather Bag", price: "$300.00", image: p8, category: "Accessories" },
    { id: 9, name: "Printed Shirt", price: "$55.00", image: p9, category: "Men" },
    { id: 10, name: "Summer Hat", price: "$35.00", image: p10, category: "Women" },
    { id: 11, name: "White Sneakers", price: "$110.00", image: p11, category: "Shoes" },
    { id: 12, name: "Sunglasses", price: "$150.00", image: p12, category: "Accessories" },
]

const PopularProducts = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-[8%]">
                <div className="text-center mb-16">
                    <span className="text-(--second) font-bold uppercase tracking-widest text-sm">Top Selling</span>
                    <h2 className="text-4xl font-bold mt-2">Popular Products</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group bg-white rounded-2xl overflow-hidden cursor-pointer">
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4 rounded-xl">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-x-4 bottom-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <button className="w-full py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-(--second) hover:text-white transition-colors">
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:text-(--second)">
                                        <i className="bi bi-heart"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="text-center">
                                <span className="text-gray-500 text-xs uppercase">{product.category}</span>
                                <h3 className="text-lg font-bold mt-1 group-hover:text-(--second) transition-colors">{product.name}</h3>
                                <p className="text-gray-900 font-bold mt-1">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-10 py-3 bg-black text-white rounded-full hover:bg-(--second) transition-all">Load More</button>
                </div>
            </div>
        </section>
    )
}

export default PopularProducts
