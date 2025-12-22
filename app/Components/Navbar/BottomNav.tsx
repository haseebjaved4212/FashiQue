"use client"
import Link from "next/link"
import Image from "next/image"
import menuDot from "@/public/E-Commerce-uiCode/assets/Menu-dot.svg"
import { useEffect, useState } from "react"

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
            { label: "Details", href: "/UI-Components/Shop/12" },
            { label: "Cart", href: "/UI-Components/Pages/Cart" },
            { label: "Checkout", href: "/UI-Components/Pages/Checkout" },
            { label: "Wishlist", href: "/UI-Components/Pages/Wishlist" },
        ]
    },
    
]

const BottomNav = () => {
    const [isFixed, setIsFixed] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [openDropDown, setOpenDropDown] = useState<Record<string, boolean>>({})


    useEffect(() => {
        const handleScroll = () => setIsFixed(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);

    const toggleDropdown = (label: string) => {
        setOpenDropDown((prev) => ({
            ...Object.fromEntries(Object.keys(prev).map((key) => [key, false])),
            [label]: !prev[label],
        }))
    }

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
                                <Link href={link.href} className="GolosText  flex items-center gap-1">{link.label} <Image src={menuDot} alt="menu-dot"  /></Link>
                                <div className="absolute top-full left-0  hidden group-hover:block  bg-white shadow-lg p-2 border border-gray-100 rounded-lg min-w-[170px]">
                                    {link.dropdown.map((item) => (
                                        <Link
                                         key={item.label}
                                          href={item.href} className="block py-2 px-4 hover:bg-gray-100 rounded-md transition-all duration-300">
                                            <div className="flex gap-1 ">
                                                {/* <Image src={menuDot} alt={item.label}  /></div>{item.label}
                                                // </Link> */}
                                            </div>{item.label}</Link>
                                    ))}
                                </div>
                            </div>

                        ) : (
                        <Link key={link.label} href={link.href} className="GolosText  flex items-center gap-1 ">{link.label}
                        <Image src={menuDot} alt="menu-dot"  /></Link>


                        ))}
                </nav>
                {/* Right Icons */}
                <div className="flex items-center gap-5">
                    <Link href="/app/UI-Components/Pages/Login" className=" login-link border-b  border-gray-400  GolosText ">Login / Register</Link>
                    <div className="flex items-center gap-6">
                        <Link href="/app/UI-Components/Pages/Wishlist" className="relative">
                        <i className="bi bi-balloon-heart text-2xl "></i>
                        </Link>
                        <Link href="/app/UI-Components/Pages/Wishlist" className="relative">
                        <i className="bi bi-cart3 text-2xl "></i>
                        </Link>
                    </div>
                </div>
                {/* Mobile Menu Button */}
               <div className="lg:hidden flex items-center justify-between gap-4">
                <button
                onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}
                className="text-2xl focus:outline-none">
                    <i className="ri-menu-line"></i>
                </button>
               </div>
                    
            </div>
            {/* Mobile Menu */} 
            {mobileMenuOpen && (
                
                <div className="lg:hidden border-t border-gray-200  mt-3 transition-all duration-500 bg-white fixed top-0 left-0 right-0 z-50">
                
            </div>
            )}
            
        </div>
                
    )
}

export default BottomNav