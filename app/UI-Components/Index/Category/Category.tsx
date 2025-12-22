"use client"
import Image from "next/image"
import Link from 'next/link'
import Cat1 from "@/public/E-Commerce-uiCode/assets/Category-1.webp"
import Cat2 from "@/public/E-Commerce-uiCode/assets/Category-2.webp"
import Cat3 from "@/public/E-Commerce-uiCode/assets/Category-3.webp"
import Cat4 from "@/public/E-Commerce-uiCode/assets/Category-4.webp"
import Cat5 from "@/public/E-Commerce-uiCode/assets/Category-5.webp"
import Cat6 from "@/public/E-Commerce-uiCode/assets/Category-6.webp"

const categories = [
    { id: 1, name: "Women's", image: Cat1, items: "120 Products" },
    { id: 2, name: "Accessories", image: Cat2, items: "85 Products" },
    { id: 3, name: "Men's", image: Cat3, items: "150 Products" },
    { id: 4, name: "Shoes", image: Cat4, items: "90 Products" },
    { id: 5, name: "Jewelry", image: Cat5, items: "45 Products" },
    { id: 6, name: "Bags", image: Cat6, items: "60 Products" },
]

const Category = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-[8%]">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-(--second) font-bold uppercase tracking-widest text-sm">Collections</span>
                        <h2 className="text-4xl lg:text-5xl font-bold mt-2">Shop by Category</h2>
                    </div>
                    <Link href="/UI-Components/Shop" className="hidden md:flex items-center gap-2 text-lg font-medium hover:text-(--second) transition-colors">
                        View All <i className="ri-arrow-right-line"></i>
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((cat) => (
                        <Link href="/UI-Components/Shop" key={cat.id} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-full aspect-square mb-4 border-2 border-transparent group-hover:border-(--second) transition-all duration-300">
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300"></div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-bold group-hover:text-(--second) transition-colors">{cat.name}</h3>
                                <p className="text-sm text-gray-500">{cat.items}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="mt-8 text-center md:hidden">
                    <Link href="/UI-Components/Shop" className="inline-flex items-center gap-2 text-lg font-medium hover:text-(--second) transition-colors">
                        View All <i className="ri-arrow-right-line"></i>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Category
