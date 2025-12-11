import Footer from "../../component/common/Footer";
import Header from "../../component/common/header/Header";
import TopBar from "../../component/common/header/TopBar";
import PDP from "./PDP";
export default function ProductDetalis() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar/>
      <Header/>
      <PDP/>
      <Footer/>
    </div>
  )
}