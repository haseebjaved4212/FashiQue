"use client"
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center overflow-hidden relative font-sans">
            {/* Animated Shapes Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="text-center relative z-10 px-4">
                <h1 className="text-[150px] md:text-[200px] font-bold leading-none select-none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">
                    404
                </h1>

                <div className="text-2xl md:text-4xl font-bold mb-8 uppercase tracking-widest animate-bounce">
                    Ooops! Page Not Found
                </div>

                <p className="text-gray-400 max-w-lg mx-auto mb-12 text-lg">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <Link href="/" className="px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-(--second) hover:text-white transition-all transform hover:scale-105 inline-flex items-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    <i className="ri-arrow-left-line group-hover:-translate-x-1 transition-transform"></i>
                    Back to Home
                </Link>
            </div>
        </div>
    )
}
