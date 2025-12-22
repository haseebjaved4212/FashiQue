"use client"
import Image from "next/image"
import HeroImg from "@/public/E-Commerce-uiCode/assets/Hero.webp"
import Link from "next/link"

const Hero = () => {
    return (
        <div className="w-full relative bg-(--prim-light) overflow-hidden min-h-[90vh] flex items-center">
            {/* Text Content */}
            <div className="container mx-auto px-[5%] lg:px-[8%] grid lg:grid-cols-2 gap-10 items-center relative z-10">
                <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                    <div className="inline-block relative">
                        <h2 className="Audiowide text-(--second) text-xl lg:text-2xl uppercase tracking-widest mb-2">New Trend</h2>
                        <div className="h-0.5 w-full bg-(--second) absolute bottom-0 left-0"></div>
                    </div>

                    <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight text-gray-900 font-sans">
                        Generic <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Clothing</span>
                    </h1>

                    <p className="text-gray-600 text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
                        Discover the latest trends in fashion and explore our new collection.
                        Elevate your style with our premium selection.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                        <Link href="/UI-Components/Shop"
                            className="px-10 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
                            Shop Now
                            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                        </Link>
                        <Link href="/UI-Components/Index/Trending"
                            className="px-10 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                            View Collection
                        </Link>
                    </div>

                    {/* Stats or trust markers */}
                    <div className="flex gap-8 justify-center lg:justify-start pt-8 border-t border-gray-200 mt-8">
                        <div>
                            <h3 className="text-2xl font-bold">20k+</h3>
                            <p className="text-sm text-gray-500">Products</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">12k+</h3>
                            <p className="text-sm text-gray-500">Happy Customer</p>
                        </div>
                    </div>
                </div>

                {/* Image Content */}
                <div className="relative mt-10 lg:mt-0">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute -bottom-8 -left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                    <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
                        <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                            <Image
                                src={HeroImg}
                                alt="Fashion Model"
                                className="w-full h-auto object-cover"
                                priority
                            />
                            {/* Floating Card */}
                            <div className="absolute bottom-10 left-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl hidden sm:block animate-bounce-slow">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                                        <i className="ri-star-fill text-yellow-400"></i>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Best Quality</p>
                                        <p className="text-xs text-gray-500">Premium Collection</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
