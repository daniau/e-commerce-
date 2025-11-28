import TopBar from "../component/common/header/TopBar"
import Header from "../component/common/header/Header"
import HeroSection from "./home/sections/heroSection/HeroSection"
import FlashSaleSection from "./home/sections/FlashSaleSection"
import BrowseCategories from "./home/sections/BrowseCategories"
import BestSellingProducts from "./home/sections/BestSellingProducts"
import Hero from "./home/sections/HeroSec"
import OurProduct from "./home/sections/OurProduct"
import NewArrival from "./home/sections/NewArrival"
import OurServices from "./home/sections/OurServices"
import Footer from "../component/common/Footer"

export default function HomePage() {
  
  return (
   <>
    <TopBar/>
    <Header />
    <HeroSection/>
    <FlashSaleSection />
    <BrowseCategories />
    <BestSellingProducts/>
    <Hero/>
    <OurProduct/>
    <NewArrival/>
    <OurServices/>
    <Footer/>

 
   </>
 
  )
}