"use client"
import Link from "next/link"
import Image from "next/image"
import menuDot from "@/public/E-Commerce-uiCode/assets/menu-dot.svg"
import { useState } from "react"

type NavLink = {
    label: string;
    href: string;
    dropdown?: {label: string, href: string}[];
}

const navLinks: NavLink[] = [
    {label: "Home", href: "/"},
    {label: "Shop", href: "/app/UI-Components/Shop", dropdown: [
        {label: "Shop", href: "/app/UI-Components/Shop"},
        {label: "Details", href: "/app/UI-Components/Shop/12"},
        {label: "Cart", href: "/app/UI-Components/Cart"},
        {label: "Checkout", href: "/app/UI-Components/Checkout"},
        {label: "Wishlist", href: "/app/UI-Components/Wishlist"},
    ]},
    {label: "About", href: "/app/UI-Components/About"},
    {label: "Contact", href: "/app/UI-Components/Contact"},
]

const BottomNav = () => {
    const [isFixed, setIsFixed] = useState(false)
  return (
    <div className={`w-full bg-white  shadow-sm transition-all duration-500 py-5 ${isFixed ? "fixed top-0 left-0  z-50 fixed-nav" : ""} `}>
        <div className="flex items-center justify-between px-[8%] lg:px-[16%] text-gray-700 ">
            {/* Desktop Logo */}
             <Link href="/" className={`text-3xl lg:text-4xl font-bold Audiowide text-black hidden ${isFixed ? "lg:flex": "hidden " }`}>Fashi<span className="text-(--second)">Que</span></Link>
             {/* Mobile Logo */}
             <Link href="/" className={`text-3xl lg:text-4xl font-bold Audiowide text-black block lg:hidden `}>Fashi<span className="text-(--second)">Que</span></Link>
        </div>
    </div>
  )
}

export default BottomNav