"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { products, Product } from '@/app/JsonData/products'
import { useShop } from '@/app/context/ShopContext'

const categories = ["All", "Women", "Men", "Accessories", "Shoes"]

const Shop = () => {
  const [filter, setFilter] = useState("All")
  const { addToCart, addToWishlist } = useShop()

  const filteredProducts = filter === "All"
    ? products
    : products.filter(p => p.category === filter)

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-[5%] lg:px-[8%]">
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <span className="text-(--second) font-bold uppercase tracking-widest text-sm">Our Collection</span>
            <h1 className="text-4xl font-bold mt-2">Shop All Products</h1>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full transition-all ${filter === cat ? 'bg-black text-white' : 'bg-white text-black border border-gray-200 hover:border-black'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-10 group-hover:translate-x-0 transition-transform duration-300">
                  <button
                    onClick={() => addToWishlist(product)}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-(--second) hover:text-white transition-colors"
                    title="Add to Wishlist"
                  >
                    <i className="bi bi-heart"></i>
                  </button>
                  <Link
                    href={`/UI-Components/Shop/${product.id}`}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-(--second) hover:text-white transition-colors"
                    title="View Details"
                  >
                    <i className="bi bi-eye"></i>
                  </Link>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-(--second) transition-colors"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="p-4">
                <span className="text-gray-500 text-xs uppercase font-bold tracking-wider">{product.category}</span>
                <Link href={`/UI-Components/Shop/${product.id}`}>
                  <h3 className="text-lg font-bold mt-1 group-hover:text-(--second) transition-colors cursor-pointer">{product.name}</h3>
                </Link>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
                  <div className="flex text-yellow-400 text-xs">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Shop