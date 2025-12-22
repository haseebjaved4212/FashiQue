"use client"
import React, { useState } from 'react'
import { useShop } from '@/app/context/ShopContext'
import Image from 'next/image'

const Checkout = () => {
    const { cart } = useShop()
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

    const [isOrderPlaced, setIsOrderPlaced] = useState(false)

    if (cart.length === 0 && !isOrderPlaced) {
        return <div className="text-center py-20">Your cart is empty.</div>
    }

    if (isOrderPlaced) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-[8%]">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-bounce">
                    <i className="bi bi-check-lg text-4xl"></i>
                </div>
                <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
                <p className="text-gray-500 max-w-md mx-auto mb-8">
                    Thank you for your purchase. Your order has been received and is being processed.
                    You will receive an email confirmation shortly.
                </p>
                <button onClick={() => window.location.href = '/'} className="px-8 py-3 bg-black text-white rounded-full hover:bg-(--second) transition-all">
                    Continue Shopping
                </button>
            </div>
        )
    }

    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-[5%] lg:px-[8%]">
                <h1 className="text-3xl font-bold mb-10 text-center lg:text-left">Checkout</h1>

                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Shipping Form */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                            <div className="space-y-4">
                                <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black" />
                                <label className="flex items-center gap-2 text-sm text-gray-500">
                                    <input type="checkbox" className="rounded" />
                                    Email me with news and offers
                                </label>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h2 className="text-xl font-bold mb-6">Shipping Address</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <input type="text" placeholder="First Name" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black" />
                                <input type="text" placeholder="Last Name" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black" />
                                <input type="text" placeholder="Address" className="w-full md:col-span-2 p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black" />
                                <input type="text" placeholder="City" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black" />
                                <input type="text" placeholder="Postal Code" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black" />
                                <input type="text" placeholder="Phone" className="w-full md:col-span-2 p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black" />
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h2 className="text-xl font-bold mb-6">Payment Method</h2>
                            <div className="p-4 border border-gray-200 rounded-lg text-gray-500 text-center">
                                Payment integration is not available in demo.
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-2xl shadow-sm sticky top-24">
                            <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                            <div className="space-y-4 mb-6 border-b border-gray-100 pb-6 max-h-[300px] overflow-y-auto custom-scrollbar">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex gap-4 items-center">
                                        <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden shrink-0 relative">
                                            <Image src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            <span className="absolute top-0 right-0 bg-gray-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-bl-lg">
                                                {item.quantity}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-sm font-bold line-clamp-1">{item.name}</h4>
                                            <p className="text-gray-500 text-xs">${item.price}</p>
                                        </div>
                                        <p className="font-bold text-sm text-(--second)">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-2 mb-6 text-sm">
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

                            <button
                                onClick={() => setIsOrderPlaced(true)}
                                className="block w-full py-4 text-center bg-black text-white rounded-xl font-bold hover:bg-(--second) transition-all"
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
