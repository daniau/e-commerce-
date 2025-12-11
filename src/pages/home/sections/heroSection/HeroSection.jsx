import Sidebar from "../heroSection/Sidebar"
import HeroBanner from "../heroSection/HeroBanner"

export default function HeroSection() {
  return (
    <div className="flex justify-between items-start  md:gap-4 gap-1.5 mt-10">
    <Sidebar />
    <HeroBanner/>
    </div>
  )
}