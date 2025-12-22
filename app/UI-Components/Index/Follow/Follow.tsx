"use client"
import Image from "next/image"
import i1 from "@/public/E-Commerce-uiCode/assets/product-1.webp"
import i2 from "@/public/E-Commerce-uiCode/assets/Category-1.webp"
import i3 from "@/public/E-Commerce-uiCode/assets/Hero.webp"
import i4 from "@/public/E-Commerce-uiCode/assets/product-4.webp"
import i5 from "@/public/E-Commerce-uiCode/assets/blog-1.webp"
import i6 from "@/public/E-Commerce-uiCode/assets/Category-3.webp"


const Follow = () => {
    return (
        <section className="py-20 overflow-hidden">
            <div className="container mx-auto px-[8%] text-center mb-12">
                <span className="text-(--second) font-bold uppercase tracking-widest text-sm">@FashiQue</span>
                <h2 className="text-4xl font-bold mt-2">Follow Us On Instagram</h2>
            </div>

            <div className="flex w-full">
                {[i1, i2, i3, i4, i5, i6].map((img, index) => (
                    <div key={index} className="relative w-1/2 md:w-1/3 lg:w-1/6 aspect-square group overflow-hidden">
                        <Image
                            src={img}
                            alt="Instagram"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <i className="bi bi-instagram text-white text-3xl"></i>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Follow
