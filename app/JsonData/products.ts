
import p1 from "@/public/E-Commerce-uiCode/assets/product-1.webp"
import p2 from "@/public/E-Commerce-uiCode/assets/product-2.webp"
import p3 from "@/public/E-Commerce-uiCode/assets/product-3.webp"
import p4 from "@/public/E-Commerce-uiCode/assets/product-4.webp"
import p5 from "@/public/E-Commerce-uiCode/assets/product-5.webp"
import p6 from "@/public/E-Commerce-uiCode/assets/product-6.webp"
import p7 from "@/public/E-Commerce-uiCode/assets/product-7.webp"
import p8 from "@/public/E-Commerce-uiCode/assets/product-8.webp"
import p9 from "@/public/E-Commerce-uiCode/assets/product-9.webp"
import p10 from "@/public/E-Commerce-uiCode/assets/product-10.webp"
import p11 from "@/public/E-Commerce-uiCode/assets/product-11.webp"
import p12 from "@/public/E-Commerce-uiCode/assets/product-12.webp"

// Product Type Definition
export type Product = {
    id: number;
    name: string;
    price: number;
    image: any;
    category: string;
    description: string;
};

export const products: Product[] = [
    { id: 1, name: "Fashion T-Shirt", price: 240.00, image: p1, category: "Women", description: "Elegant fashion t-shirt for women." },
    { id: 2, name: "Casual Coat", price: 140.00, image: p2, category: "Men", description: "Stylish casual coat for men." },
    { id: 3, name: "Summer Dress", price: 180.00, image: p3, category: "Women", description: "Beautiful summer dress for warm days." },
    { id: 4, name: "Denim Jacket", price: 320.00, image: p4, category: "Men", description: "Classic denim jacket for unmatched style." },
    { id: 5, name: "Striped Sweater", price: 90.00, image: p5, category: "Women", description: "Cozy striped sweater for winter." },
    { id: 6, name: "Modern Pants", price: 120.00, image: p6, category: "Men", description: "Modern fit pants for everyday wear." },
    { id: 7, name: "Classic Watch", price: 250.00, image: p7, category: "Accessories", description: "Timeless classic watch." },
    { id: 8, name: "Leather Bag", price: 300.00, image: p8, category: "Accessories", description: "Premium leather bag." },
    { id: 9, name: "Printed Shirt", price: 55.00, image: p9, category: "Men", description: "Casual printed shirt." },
    { id: 10, name: "Summer Hat", price: 35.00, image: p10, category: "Women", description: "Protective and stylish summer hat." },
    { id: 11, name: "White Sneakers", price: 110.00, image: p11, category: "Shoes", description: "Comfortable white sneakers." },
    { id: 12, name: "Sunglasses", price: 150.00, image: p12, category: "Accessories", description: "Stylish sunglasses for sun protection." },
]
