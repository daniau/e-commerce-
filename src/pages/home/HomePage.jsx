import TopBar from "../../component/common/header/TopBar"
import Header from "../../component/common/header/Header"
import HeroSection from "./sections/heroSection/HeroSection"
import FlashSaleSection from "./sections/FlashSaleSection"
import BrowseCategories from "./sections/BrowseCategories"
import BestSellingProducts from "./sections/BestSellingProducts"
import Hero from "./sections/HeroSec"
import OurProduct from "./sections/OurProduct"
import NewArrival from "./sections/NewArrival"
import OurServices from "./sections/OurServices"
import Footer from "../../component/common/Footer"

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