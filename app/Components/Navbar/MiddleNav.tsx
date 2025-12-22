"use client"

import Link from "next/link"
import Image from "next/image"
import callImg from "@/public/E-Commerce-uiCode/assets/nav-contact.svg";
import { useState } from "react";

const MiddleNav = () => {
  const  [query, setQuery] = useState("")
  return (
    <div className="w-full bg-(--prim) border-b border-gray-300 relative">
        <div className="flex items-center justify-between px-[8%] lg:px-[16%] py-3 ">
          {/* logo */}
   <Link href="/" className="text-4xl lg:text-5xl font-bold Audiowide text-black">Fashi<span className="text-(--second)">Que</span></Link>
            {/* Search Box  */}
            <div className="relative flex flex-col flex-1 ms-6 mx-0 bg-white  rounded-lg lg:max-w-2xl  ">
              <div className="flex items-center">
                <input type="text" placeholder="Search" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1  px-3 py-2 outline-none rounded-l-lg"/>
                <button className="px-3 text-xl cursor-pointer ">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
            {/* Contact */}
            <div className=" ml-4 flex items-center gap-2">
              <Image src={callImg} alt="call" width={40} height={40}/>
              <div className="flex flex-col ">
                <h2 className="GolosText text-xs ps-2 font-semibold ">24/7 Support</h2>
                <h1 className="GolosText font-semibold ">+123 456 789</h1>
              </div>
            </div>
        </div>
    </div>
  )
}

export default MiddleNav