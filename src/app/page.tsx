
import DiscountItem from "<@>/components/widgets/DiscountItem";
import Featured from "<@>/components/widgets/Featured";
import Hero from "<@>/components/widgets/Hero";
import LatestBlog from "<@>/components/widgets/LatestBlog";
import LatestProducts from "<@>/components/widgets/LatestProducts";
import SupportSection from "<@>/components/widgets/SupportSection";
import TopCategories from "<@>/components/widgets/TopCategories";
import TrendingProducts from "<@>/components/widgets/TrendingProducts";
import UniqueProduct from "<@>/components/widgets/UniqueProduct";

export default function Home() {
  return (
    <>
    <Hero />
    <Featured />
    <LatestProducts />
    <SupportSection />
    <UniqueProduct />
    <TrendingProducts />
    <DiscountItem />
    <TopCategories />
    <LatestBlog />
    </>
  );
}
