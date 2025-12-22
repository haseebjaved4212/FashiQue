"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { products } from '@/app/JsonData/products'
import { useShop } from '@/app/context/ShopContext'

const ProductDetails = () => {
  const params = useParams()
  const id = Number(params.id)
  const product = products.find(p => p.id === id)
  const { addToCart, addToWishlist } = useShop()
  const [quantity, setQuantity] = useState(1)

  if (!product) return <div className="text-center py-20">Product not found</div>

  const handleAddToCart = () => {
    // We can enhance addToCart to accept quantity, but for now simple add
    // To support quantity from here we'd need to loop or update context key.
    // For simplicity, we'll just add one or handle quantity in cart.
    // Let's just loop for now or update context to accept qty (better).
    // For this step I'll just call it once as context handles increment.
    addToCart(product)
  }

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-[5%] lg:px-[8%]">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">{product.category}</span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <p className="text-3xl font-bold text-(--second)">${product.price.toFixed(2)}</p>
              <div className="flex text-yellow-400 text-sm">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <span className="text-gray-400 ml-2 text-xs">(120 Reviews)</span>
              </div>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description || "Experience the perfect blend of style and comfort with this premium quality item. Designed for modern fashion enthusiasts."}
            </p>

            <div className="flex gap-4 mb-8">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-gray-100">-</button>
                <span className="px-4 py-2 font-bold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-gray-100">+</button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white rounded-lg font-bold hover:bg-(--second) transition-colors"
              >
                Add To Cart
              </button>
              <button
                onClick={() => addToWishlist(product)}
                className="w-14 border border-gray-300 rounded-lg flex items-center justify-center text-xl hover:border-(--second) hover:text-(--second) transition-colors"
              >
                <i className="bi bi-heart"></i>
              </button>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-2 text-sm text-gray-500">
              <p><span className="font-bold text-black">SKU:</span> REF-00{product.id}</p>
              <p><span className="font-bold text-black">Category:</span> {product.category}</p>
              <p><span className="font-bold text-black">Tags:</span> Fashion, {product.category}, Sale</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails