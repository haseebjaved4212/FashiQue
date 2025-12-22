"use client"
import Image from "next/image"
import Link from 'next/link'
import b1 from "@/public/E-Commerce-uiCode/assets/blog-1.webp"
import b2 from "@/public/E-Commerce-uiCode/assets/blog-2.webp"
import b3 from "@/public/E-Commerce-uiCode/assets/blog-3.webp"

const blogs = [
    { id: 1, title: "The Ultimate Guide to Summer Fashion", date: "Oct 12, 2023", image: b1 },
    { id: 2, title: "How to Style Accessories for Any Occasion", date: "Oct 15, 2023", image: b2 },
    { id: 3, title: "Top 5 Trends to Watch This Winter", date: "Oct 18, 2023", image: b3 },
]

const Blogs = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-[8%]">
                <div className="text-center mb-16">
                    <span className="text-(--second) font-bold uppercase tracking-widest text-sm">Latest News</span>
                    <h2 className="text-4xl font-bold mt-2">Fashion Blog</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-xs font-bold uppercase">Fashion</div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                    <span className="flex items-center gap-1"><i className="bi bi-calendar"></i> {blog.date}</span>
                                    <span className="flex items-center gap-1"><i className="bi bi-person"></i> Admin</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-(--second) transition-colors cursor-pointer line-clamp-2">{blog.title}</h3>
                                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <Link href="/UI-Components/Blogs" className="inline-block border-b border-black pb-1 hover:text-(--second) hover:border-(--second) transition-all text-sm font-semibold uppercase">Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blogs
