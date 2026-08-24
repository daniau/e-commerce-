import { lazy, Suspense } from "react"
import TopBar from "../../component/common/header/TopBar"
import Header from "../../component/common/header/Header"
import HeroSection from "./sections/heroSection/HeroSection"

const FlashSaleSection = lazy(() => import("./sections/FlashSaleSection"))
const BrowseCategories = lazy(() => import("./sections/BrowseCategories"))
const BestSellingProducts = lazy(() => import("./sections/BestSellingProducts"))
const Hero = lazy(() => import("./sections/HeroSec"))
const OurProduct = lazy(() => import("./sections/OurProduct"))
const NewArrival = lazy(() => import("./sections/NewArrival"))
const OurServices = lazy(() => import("./sections/OurServices"))
const Footer = lazy(() => import("../../component/common/Footer"))

export default function HomePage() {
  return (
    <main className="max-w-[1600px] mx-auto">
      <TopBar />
      <Header />
      <HeroSection />
      <Suspense fallback={<p className="text-center my-10">Loading...</p>}>
        <FlashSaleSection />
        <BrowseCategories />
        <BestSellingProducts />
        <Hero />
        <OurProduct />
        <NewArrival />
        <OurServices />
        </Suspense>
        <Footer />
    
    </main>
  )
}
