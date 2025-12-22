"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useShop } from '@/app/context/ShopContext'

const Registration = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useShop()
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Mock registration
        if (name && email && password) {
            // Save to registered users
            const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
            const newUser = { name, email, password };
            localStorage.setItem('registeredUsers', JSON.stringify([...existingUsers, newUser]));

            login(name, email)
            router.push('/')
        }
    }

    return (
        <div className="min-h-screen py-20 bg-gray-50 flex items-center justify-center">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg max-w-md w-full mx-4">
                <h1 className="text-3xl font-bold mb-2 text-center">Create Account</h1>
                <p className="text-gray-500 text-center mb-8">Start your fashion journey with us</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                            placeholder="John Doe"
                        />
                    </div>
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

                    <div className="text-sm text-gray-500">
                        By creating an account, you agree to our <Link href="#" className="font-bold text-black hover:underline">Terms of Service</Link> and <Link href="#" className="font-bold text-black hover:underline">Privacy Policy</Link>.
                    </div>

                    <button type="submit" className="w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-(--second) transition-all">
                        Create Account
                    </button>
                </form>

                <p className="text-center mt-8 text-gray-600">
                    Already have an account? <Link href="/UI-Components/Pages/Login" className="font-bold text-black hover:underline">Sign in</Link>
                </p>
            </div>
        </div>
    )
}

export default Registration
