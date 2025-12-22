"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useShop } from '@/app/context/ShopContext'

const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useShop()

    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

    if (cart.length === 0) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
                <i className="bi bi-cart-x text-6xl text-gray-300 mb-4"></i>
                <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
                <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
                <Link href="/UI-Components/Shop" className="px-8 py-3 bg-black text-white rounded-full hover:bg-(--second) transition-all">
                    Start Shopping
                </Link>
            </div>
        )
    }

    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-[5%] lg:px-[8%]">
                <h1 className="text-4xl font-bold mb-10 text-center">Your Shopping Cart</h1>

                <div className="grid lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 space-y-6">
                        {cart.map((item) => (
                            <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center gap-6 relative">
                                <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                                    <Image src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>

                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="text-lg font-bold">{item.name}</h3>
                                    <p className="text-gray-500 text-sm mt-1">{item.category}</p>
                                    <p className="text-(--second) font-bold mt-2">${item.price.toFixed(2)}</p>
                                </div>

                                <div className="flex items-center border border-gray-200 rounded-lg">
                                    <button
                                        onClick={() => updateQuantity(item.id, -1)}
                                        className="px-3 py-1 hover:bg-gray-50"
                                        disabled={item.quantity <= 1}
                                    >-</button>
                                    <span className="px-3 py-1 font-bold text-sm w-8 text-center">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 hover:bg-gray-50">+</button>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    <i className="bi bi-trash3 text-xl"></i>
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-2xl shadow-sm sticky top-24">
                            <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                            <div className="space-y-4 mb-6 border-b border-gray-100 pb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-bold">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-bold text-green-600">Free</span>
                                </div>
                            </div>
                            <div className="flex justify-between text-xl font-bold mb-8">
                                <span>Total</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>

                            <Link href="/UI-Components/Pages/Checkout" className="block w-full py-4 text-center bg-black text-white rounded-xl font-bold hover:bg-(--second) transition-all">
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
