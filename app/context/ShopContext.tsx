"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Product } from '../JsonData/products';

type CartItem = Product & { quantity: number };

type ShopContextType = {
    cart: CartItem[];
    wishlist: Product[];
    user: { name: string, email: string } | null;
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, amount: number) => void;
    addToWishlist: (product: Product) => void;
    removeFromWishlist: (id: number) => void;
    clearCart: () => void;
    login: (name: string, email: string) => void;
    logout: () => void;
};

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [wishlist, setWishlist] = useState<Product[]>([]);
    const [user, setUser] = useState<{ name: string, email: string } | null>(null);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        const savedWishlist = localStorage.getItem('wishlist');
        const savedUser = localStorage.getItem('user');
        if (savedCart) setCart(JSON.parse(savedCart));
        if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
        if (savedUser) setUser(JSON.parse(savedUser));
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart, isInitialized]);

    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }
    }, [wishlist, isInitialized]);

    useEffect(() => {
        if (isInitialized) {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                localStorage.removeItem('user');
            }
        }
    }, [user, isInitialized]);

    const addToCart = (product: Product) => {
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            toast.info("Item quantity updated in cart");
        } else {
            toast.success("Added to Cart");
        }

        setCart((prev) => {
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id: number) => {
        setCart(prev => prev.filter(item => item.id !== id));
        toast.error("Removed from Cart");
    };

    const updateQuantity = (id: number, amount: number) => {
        setCart(prev => prev.map(item => {
            if (item.id === id) {
                const newQuantity = Math.max(1, item.quantity + amount);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    const clearCart = () => {
        setCart([]);
    }

    const addToWishlist = (product: Product) => {
        const existing = wishlist.find(item => item.id === product.id);
        if (existing) {
            toast.info("Already in Wishlist");
        } else {
            toast.success("Added to Wishlist");
            setWishlist(prev => [...prev, product]);
        }
    };

    const removeFromWishlist = (id: number) => {
        setWishlist(prev => prev.filter(item => item.id !== id));
        toast.error("Removed from Wishlist");
    };

    const login = (name: string, email: string) => {
        setUser({ name, email });
        toast.success(`Welcome back, ${name}!`);
    };

    const logout = () => {
        setUser(null);
        toast.info("Logged out successfully");
    };

    return (
        <ShopContext.Provider value={{ cart, wishlist, user, addToCart, removeFromCart, updateQuantity, addToWishlist, removeFromWishlist, clearCart, login, logout }}>
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => {
    const context = useContext(ShopContext);
    if (!context) throw new Error("useShop must be used within a ShopProvider");
    return context;
};
