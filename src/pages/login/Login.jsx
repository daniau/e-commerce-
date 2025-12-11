import Footer from "../../component/common/Footer"
import Header from "../../component/common/header/Header"
import TopBar from "../../component/common/header/TopBar"
import Form from "./Form"

export default function Login() {


  return (
    <section className="min-h-screen flex flex-col">
     <TopBar/>
     <Header />
     <Form/>
    
    
     <Footer/>
    
    </section>
   
  )
}
