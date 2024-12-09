
import Featured from "<@>/components/widgets/Featured";
import Hero from "<@>/components/widgets/Hero";
import LatestProducts from "<@>/components/widgets/LatestProducts";
import SupportSection from "<@>/components/widgets/SupportSection";
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
    </>
  );
}
