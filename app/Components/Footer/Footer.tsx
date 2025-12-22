"use client"
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-gray-200">
            <div className="container mx-auto px-[8%]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 mb-16">
                    <div>
                        <Link href="/" className="text-3xl font-bold Audiowide text-black mb-6 block">Fashi<span className="text-(--second)">Que</span></Link>
                        <p className="text-gray-500 mb-6 leading-relaxed">
                            The customer is at the heart of our unique business model, which includes design.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons */}
                            {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                                <a key={social} href="#" className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all">
                                    <i className={`bi bi-${social}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 font-sans">Shopping</h3>
                        <ul className="space-y-4 text-gray-500">
                            <li><Link href="/UI-Components/Shop" className="hover:text-(--second) transition-colors">Clothing Store</Link></li>
                            <li><Link href="/UI-Components/Shop" className="hover:text-(--second) transition-colors">Trending Shoes</Link></li>
                            <li><Link href="/UI-Components/Shop" className="hover:text-(--second) transition-colors">Accessories</Link></li>
                            <li><Link href="/UI-Components/Shop" className="hover:text-(--second) transition-colors">Sale</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 font-sans">Customer</h3>
                        <ul className="space-y-4 text-gray-500">
                            <li><Link href="/UI-Components/Shop" className="hover:text-(--second) transition-colors">Contact Us</Link></li>
                            <li><Link href="/UI-Components/Shop" className="hover:text-(--second) transition-colors">Payment Methods</Link></li>
                            <li><Link href="/UI-Components/Shop" className="hover:text-(--second) transition-colors">Delivery</Link></li>
                            <li><Link href="/UI-Components/Shop" className="hover:text-(--second) transition-colors">Return & Exchanges</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 font-sans">Newsletter</h3>
                        <p className="text-gray-500 mb-6">
                            Be the first to know about new arrivals, lookbooks, sales & promos!
                        </p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full py-3 px-0 border-b border-gray-300 focus:outline-none focus:border-black bg-transparent"
                            />
                            <button className="absolute right-0 top-0 bottom-0 text-gray-500 hover:text-black">
                                <i className="bi bi-envelope text-xl"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2023 FashiQue. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <p className="text-gray-500 text-sm">Design by <span className="text-black font-semibold">Haseeb</span></p>
                        <p className="text-gray-500 text-sm">Code by <span className="text-black font-semibold">Haseeb</span></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
