"use client"
import Link from "next/link"
import Image from "next/image"
import menuDot from "@/public/E-Commerce-uiCode/assets/Menu-dot.svg"
import { useEffect, useState } from "react"
import { useShop } from '@/app/context/ShopContext'

type NavLink = {
    label: string;
    href: string;
    dropdown?: { label: string, href: string }[];
}

const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    {
        label: "Shop", href: "/UI-Components/Shop", dropdown: [
            { label: "Shop", href: "/UI-Components/Shop" },
            { label: "Cart", href: "/UI-Components/Pages/Cart" },
            { label: "Checkout", href: "/UI-Components/Pages/Checkout" },
            { label: "Wishlist", href: "/UI-Components/Pages/Wishlist" },
        ]
    },
]

const BottomNav = () => {
    const [isFixed, setIsFixed] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { cart, wishlist, user, logout } = useShop()

    useEffect(() => {
        const handleScroll = () => setIsFixed(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);

    return (
        <div className={`w-full bg-white  shadow-sm transition-all duration-500 py-5 ${isFixed ? "fixed top-0 left-0  z-50 fixed-nav" : ""} `}>
            <div className="flex items-center justify-between px-[8%] lg:px-[16%] text-gray-700 ">
                {/* Desktop Logo */}
                <Link href="/" className={`text-3xl lg:text-4xl font-bold Audiowide text-black hidden ${isFixed ? "lg:flex" : "hidden "}`}>Fashi<span className="text-(--second)">Que</span></Link>
                {/* Mobile Logo */}
                <Link href="/" className={`text-3xl lg:text-4xl font-bold Audiowide text-black block lg:hidden `}>Fashi<span className="text-(--second)">Que</span></Link>
                {/* Desktop Menu */}
                <nav className="hidden lg:flex space-x-5 menu-link relative z-40">
                    {navLinks.map((link) =>
                        link.dropdown ? (
                            <div key={link.label} className="relative group">
                                <Link href={link.href} className="GolosText  flex items-center gap-1">{link.label} <Image src={menuDot} alt="menu-dot" /></Link>
                                <div className="absolute top-full left-0  hidden group-hover:block  bg-white shadow-lg p-2 border border-gray-100 rounded-lg min-w-[170px]">
                                    {link.dropdown.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href} className="block py-2 px-4 hover:bg-gray-100 rounded-md transition-all duration-300">
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                        ) : (
                            <Link key={link.label} href={link.href} className="GolosText  flex items-center gap-1 ">{link.label}
                                <Image src={menuDot} alt="menu-dot" /></Link>
                        ))}
                </nav>
                {/* Right Icons */}
                <div className="flex items-center gap-5">
                    {user ? (
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-bold truncate max-w-[100px] hidden sm:block">Hi, {user.name}</span>
                            <button onClick={logout} className="text-sm border-b border-gray-400 hover:border-black transition-all">Logout</button>
                        </div>
                    ) : (
                        <Link href="/UI-Components/Pages/Login" className=" login-link border-b  border-gray-400  GolosText ">Login / Register</Link>
                    )}
                    <div className="flex items-center gap-6">
                        <Link href="/UI-Components/Pages/Wishlist" className="relative group">
                            <i className="bi bi-balloon-heart text-2xl "></i>
                            {wishlist.length > 0 && <span className="absolute -top-2 -right-2 bg-(--second) text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">{wishlist.length}</span>}
                        </Link>
                        <Link href="/UI-Components/Pages/Cart" className="relative group">
                            <i className="bi bi-cart3 text-2xl "></i>
                            {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-(--second) text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">{cart.length}</span>}
                        </Link>
                    </div>
                </div>
                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center justify-between gap-4">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-2xl focus:outline-none">
                        <i className="ri-menu-line"></i>
                    </button>
                </div>

            </div>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-t border-gray-200 mt-3 p-4 bg-white fixed top-[80px] left-0 right-0 z-50 shadow-lg">
                    {navLinks.map((link) => (
                        <div key={link.label}>
                            <Link href={link.href} className="block py-2 font-bold">{link.label}</Link>
                            {link.dropdown && link.dropdown.map(sub => (
                                <Link key={sub.label} href={sub.href} className="block py-2 pl-4 text-sm text-gray-600 border-l border-gray-100 ml-1">{sub.label}</Link>
                            ))}
                        </div>
                    ))}
                </div>
            )}

        </div>

    )
}

export default BottomNav