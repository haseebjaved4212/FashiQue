# FashiQue - Modern E-Commerce Platform

FashiQue is a premium, fully responsive E-Commerce web application built with **Next.js 15** and **Tailwind CSS v4**. It offers a seamless shopping experience with features like product browsing, category filtering, cart management, wishlist functionality, and user authentication simulation.

![FashiQue Preview](public/E-Commerce-uiCode/assets/Hero.webp)

## 🚀 Features

### 🛍️ Shopping Experience
- **Interactive Homepage**: visuals including Hero slider, Hottest Trends, and Popular Products.
- **Shop Page**: Complete product catalog with real-time **Category Filtering** (Women, Men, Accessories, Shoes).
- **Product Details**: Dedicated page for every product with descriptions, pricing, and ratings.

### 🛒 E-Commerce Functionality
- **Cart Management**: Add items, update quantities, removable items, and dynamic total calculation.
- **Wishlist**: Save favorite items for later.
- **Persistent State**: Cart and Wishlist data are saved in `localStorage`, so you never lose your items on refresh.
- **Checkout**: A clean, responsive checkout form with order summary.

### 👤 User Authentication (Simulated)
- **Login & Registration**: Functional forms with validation.
- **User Persistence**: Remembers logged-in users and displays their name in the navigation.
- **Session Management**: Logout functionality clears the session.

### 🎨 UI/UX Design
- **Modern Aesthetics**: Glassmorphism, smooth transitions, and hover effects.
- **Fully Responsive**: Optimized for Mobile, Tablet, and Desktop.
- **Custom 404 Page**: An animated, friendly error page.
- **Toast Notifications**: Real-time feedback for user actions (e.g., "Added to Cart").

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Bootstrap Icons](https://icons.getbootstrap.com/) & [Remix Icons](https://remixicon.com/)
- **Fonts**: Audiowide, Golos Text, Lufga (Local Fonts)
- **State Management**: React Context API (`ShopContext`)
- **Notifications**: `react-toastify`

## 📂 Project Structure

```
fashique/
├── app/
│   ├── Components/         # Shared components (Navbar, Footer)
│   ├── context/            # Global State (ShopContext)
│   ├── JsonData/           # Mock Data (products.ts)
│   ├── UI-Components/      # Feature-specific components
│   │   ├── Index/          # Homepage Sections (Hero, Trending, etc.)
│   │   ├── Pages/          # Functional Pages (Cart, Login, etc.)
│   │   └── Shop/           # Shop Page & Product Details
│   ├── layout.tsx          # Root Layout (Providers & Global Styles)
│   └── page.tsx            # Homepage Entry
├── public/                 # Static Assets (Images, Fonts)
└── README.md               # Project Documentation
```

## ⚡ Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/fashique.git
    cd fashique
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open in Browser**:
    Visit [http://localhost:3000](http://localhost:3000) to see the app in action.

## 🤝 Credits

- **Design by**: Haseeb
- **Code by**: Haseeb

---

*This project was created as a demonstration of modern web development capabilities using Next.js and React.*
