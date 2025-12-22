"use client"
import Image from "next/image"
import Link from 'next/link'
import bannerImg from "@/public/E-Commerce-uiCode/assets/Banner-1.jpg"
import circularText from "@/public/E-Commerce-uiCode/assets/banner-2-circle.png"

const Banner = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto px-[5%] lg:px-[8%]">
                <div className="relative rounded-[3rem] overflow-hidden bg-[#F2EFEA] min-h-[500px] flex items-center">

                    {/* Background Pattern or Image could go here */}

                    <div className="grid lg:grid-cols-2 gap-10 w-full relative z-10">
                        <div className="pl-10 lg:pl-20 py-16 pr-10 flex flex-col justify-center">
                            <span className="text-(--second) font-bold uppercase tracking-widest text-sm mb-4 block">Deal of the Day</span>
                            <h2 className="text-4xl lg:text-6xl font-bold font-sans leading-tight mb-6">
                                Flat 30% Off On <br /> All Accessories
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 max-w-md">
                                Discover our exclusive collection of accessories.
                                Limited time offer, hurry up and grab your favorites!
                            </p>
                            <div className="flex gap-4">
                                <Link href="/UI-Components/Shop" className="px-8 py-3 bg-black text-white rounded-full hover:bg-(--second) transition-all">
                                    Shop Now
                                </Link>
                                <div className="relative w-20 h-20 hidden md:block">
                                    <Image src={circularText} alt="Discount" className="animate-spin-slow w-full h-full" />
                                </div>
                            </div>

                            {/* Timer (Visual only for now) */}
                            <div className="flex gap-4 mt-12">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-2xl font-bold shadow-sm">02</div>
                                    <span className="text-xs text-gray-500 mt-1 block">Days</span>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-2xl font-bold shadow-sm">14</div>
                                    <span className="text-xs text-gray-500 mt-1 block">Hours</span>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-2xl font-bold shadow-sm">26</div>
                                    <span className="text-xs text-gray-500 mt-1 block">Mins</span>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-2xl font-bold shadow-sm">45</div>
                                    <span className="text-xs text-gray-500 mt-1 block">Secs</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-full min-h-[400px]">
                            <Image
                                src={bannerImg}
                                alt="Banner Model"
                                fill
                                className="object-cover object-center lg:object-left"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
