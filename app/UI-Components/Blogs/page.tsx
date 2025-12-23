"use client"
import React from 'react'
import Link from 'next/link'
import blogData from '@/app/JsonData/BlogData.json'

const Blogs = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-[5%] lg:px-[8%]">
        <div className="mb-12">
           <span className="text-(--second) font-bold uppercase tracking-widest text-sm">Read Our</span>
           <h1 className="text-4xl font-bold mt-2">Latest Blogs</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <div key={blog.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 p-6">
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">{blog.date}</span>
                <Link href={`/UI-Components/Blogs/${blog.id}`} className="text-(--second) font-bold hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs
