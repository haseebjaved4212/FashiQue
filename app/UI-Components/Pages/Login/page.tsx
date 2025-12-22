"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useShop } from '@/app/context/ShopContext'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useShop()
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Mock authentication
        if (email && password) {
            // Check against registered users
            const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
            const foundUser = existingUsers.find((u: any) => u.email === email && u.password === password);

            const userName = foundUser ? foundUser.name : email.split('@')[0];

            login(userName, email)
            router.push('/')
        }
    }

    return (
        <div className="min-h-screen py-20 bg-gray-50 flex items-center justify-center">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg max-w-md w-full mx-4">
                <h1 className="text-3xl font-bold mb-2 text-center">Welcome Back</h1>
                <p className="text-gray-500 text-center mb-8">Please enter your details to sign in</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded" />
                            <span className="text-gray-600">Remember me</span>
                        </label>
                        <Link href="#" className="font-bold text-black hover:underline">Forgot Password?</Link>
                    </div>

                    <button type="submit" className="w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-(--second) transition-all">
                        Sign In
                    </button>
                </form>

                <p className="text-center mt-8 text-gray-600">
                    Don't have an account? <Link href="/UI-Components/Pages/Registration" className="font-bold text-black hover:underline">Sign up</Link>
                </p>
            </div>
        </div>
    )
}

export default Login
