"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '@/app/JsonData/products'

const Trending = () => {
    // Get first 4 products as "trending" for now
    const trendingProducts = products.slice(0, 4)

    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-[5%] lg:px-[8%]">
                <div className="text-center mb-16">
                    <span className="text-(--second) font-bold uppercase tracking-widest text-sm">Don't Miss</span>
                    <h1 className="text-4xl font-bold mt-2">Trending Now</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trendingProducts.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="relative overflow-hidden mb-4 rounded-xl aspect-[3/4]">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={400}
                                    height={500}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-bold uppercase rounded">
                                    Hot
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="text-gray-500 text-xs uppercase font-bold tracking-wider mb-1">{product.category}</p>
                                <Link href={`/UI-Components/Shop/${product.id}`}>
                                    <h3 className="text-lg font-bold group-hover:text-(--second) transition-colors">{product.name}</h3>
                                </Link>
                                <p className="font-bold mt-2">${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Link href="/UI-Components/Shop" className="inline-block px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-(--second) transition-colors">
                        View All Products
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Trending
