"use client"
import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import blogData from '@/app/JsonData/BlogData.json'

const BlogDetail = () => {
    const params = useParams()
    const id = params?.id
    const blog = blogData.find((b) => b.id.toString() === id)

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
                    <Link href="/UI-Components/Blogs" className="text-blue-600 hover:underline">
                        Back to Blogs
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-gray-50 min-h-screen py-20">
            <div className="container mx-auto px-[5%] lg:px-[8%] max-w-4xl">
                <Link href="/UI-Components/Blogs" className="inline-block mb-8 text-gray-500 hover:text-black transition-colors">
                    <i className="bi bi-arrow-left mr-2"></i> Back to Blogs
                </Link>

                <article className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                    <header className="mb-8">
                        <span className="text-(--second) font-bold uppercase tracking-widest text-sm mb-2 block">{blog.author}</span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">{blog.title}</h1>
                        <p className="text-gray-400">{blog.date}</p>
                    </header>

                    <div className="prose max-w-none">
                        <p className="text-gray-700 leading-relaxed text-lg">
                            {blog.content}
                        </p>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default BlogDetail
