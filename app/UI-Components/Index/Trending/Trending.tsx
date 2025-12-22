"use client"
import Image from "next/image"
import Link from 'next/link'
import { useShop } from "@/app/context/ShopContext"
import { products, Product } from "@/app/JsonData/products"

const Trending = () => {
    const { addToCart, addToWishlist } = useShop()
    // We filter the main products list to get the first 4 items for the trending section
    // or we can select specific IDs if we want specific products.
    // For now, let's just take the first 4 from the global list to ensure consistency.
    // However, the original code had specific images.
    // Let's rely on the IDs matching.

    // Actually, let's just use the global products directly for consistent data types
    const trendingProducts = [1, 2, 3, 4].map(id => products.find(p => p.id === id)).filter(Boolean) as Product[];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-[8%]">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <span className="text-(--second) font-bold uppercase tracking-widest text-sm">Products</span>
                        <h2 className="text-4xl font-bold mt-2">Hottest Trend</h2>
                        <p className="text-gray-500 mt-2 max-w-xl">
                            Uncover the latest looks and standout pieces that are defining the season.
                            Stay ahead of the curve with our hottest trends.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-6 py-2 bg-black text-white rounded-full">New Arrival</button>
                        <button className="px-6 py-2 border border-gray-300 rounded-full hover:border-black transition-colors">Best Seller</button>
                        <button className="px-6 py-2 border border-gray-300 rounded-full hover:border-black transition-colors">On Sale</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trendingProducts.map((product) => (
                        <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-10 group-hover:translate-x-0 transition-transform duration-300">
                                    <button
                                        onClick={() => addToWishlist(product)}
                                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-(--second) hover:text-white transition-colors">
                                        <i className="bi bi-heart"></i>
                                    </button>
                                    <Link href={`/UI-Components/Shop/${product.id}`} className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-(--second) hover:text-white transition-colors">
                                        <i className="bi bi-eye"></i>
                                    </Link>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-(--second) transition-colors">
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                            <div className="p-4">
                                <span className="text-gray-500 text-xs uppercase font-bold tracking-wider">{product.category}</span>
                                <Link href={`/UI-Components/Shop/${product.id}`}>
                                    <h3 className="text-lg font-bold mt-1 group-hover:text-(--second) transition-colors cursor-pointer">{product.name}</h3>
                                </Link>
                                <div className="flex items-center gap-1 mt-1 text-yellow-400 text-sm">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <span className="text-gray-400 ml-1 text-xs">(4.5)</span>
                                </div>
                                <p className="text-xl font-bold mt-2">${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/UI-Components/Shop" className="px-10 py-3 border-2 border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-all inline-block">
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Trending
