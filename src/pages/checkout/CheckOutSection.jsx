import BillingForm from "./BillingForm"
import OrderSummary from "./OrderSummary"

export default function CheckOutSection() {
  return (
    <section className="mt-10 mx-2 lg:mx-18  ">
      
      <p className="text-gray-800 text-[15px] ">Acount / My Acount /Product / View Cart /<span className="text-gray-950">Check Out</span> </p>
      <h1 className="font-medium text-4xl mt-6 text-black">Billing Details </h1>
    
    <div className="flex items-start  justify-start gap-2 flex-wrap md:flex-nowrap">
    <BillingForm/>
    <OrderSummary/>
    </div>
   
    </section>
  )
}