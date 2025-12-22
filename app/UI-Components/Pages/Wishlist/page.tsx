"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useShop } from '@/app/context/ShopContext'

const Wishlist = () => {
    const { wishlist, removeFromWishlist, addToCart } = useShop()

    if (wishlist.length === 0) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
                <i className="bi bi-heart-break text-6xl text-gray-300 mb-4"></i>
                <h2 className="text-2xl font-bold mb-2">My Wishlist is Empty</h2>
                <p className="text-gray-500 mb-6">Start saving your favorite items now!</p>
                <Link href="/UI-Components/Shop" className="px-8 py-3 bg-black text-white rounded-full hover:bg-(--second) transition-all">
                    Start Shopping
                </Link>
            </div>
        )
    }

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-[5%] lg:px-[8%]">
                <h1 className="text-4xl font-bold mb-10 text-center">My Wishlist</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {wishlist.map((product) => (
                        <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <button
                                    onClick={() => removeFromWishlist(product.id)}
                                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                                >
                                    <i className="bi bi-x"></i>
                                </button>

                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-(--second) transition-colors"
                                    >
                                        Move To Cart
                                    </button>
                                </div>
                            </div>
                            <div className="p-4 text-center">
                                <span className="text-gray-500 text-xs uppercase font-bold tracking-wider">{product.category}</span>
                                <h3 className="text-lg font-bold mt-1">{product.name}</h3>
                                <p className="text-xl font-bold mt-2">${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Wishlist
