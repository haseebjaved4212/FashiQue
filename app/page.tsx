
import { Hero, Category, Trending, Banner, PopularProducts, Blogs, Follow } from "./UI-Components/Index";

export default function Home() {
  return (
    <main>
      <Hero />
      <Category />
      <Trending />
      <Banner />
      <PopularProducts />
      <Blogs />
      <Follow />
    </main>
  );
}
