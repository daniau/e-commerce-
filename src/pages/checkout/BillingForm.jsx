export default function BillingForm() {
  return (
    <form  className="mt-6 flex flex-col sm:w-[40vw] gap-4 w-full ">
      <InputField tag={"First Name*"} type="text" id={"firstName"}/>
      <InputField tag={"Company Name"} type="text" id={"companyName"}/>
      <InputField tag={"Street Address*"} type="text" id={"streetaddress"}/>
      <InputField tag={"Apartment, floor, etc. (optional)"} type="text" id={"floor"}/>
      <InputField tag={"Town/City"} type="text" id={"city"}/>
      <InputField tag={"Phone Number"} type="text" id={"phoneNumber"}/>
      <InputField tag={"Email Address"} type="email" id={"email"}/>
      <div className="flex gap-2 mt-3 text-[18px]">
      <input type="checkbox" id="checkbox" />
      <p>Save this information for fater check-out next time</p>
      </div>
     



      
     

    </form>
  )
}

function InputField({tag,type,id}){
 return( <label  htmlFor={id} className="text-gray-700 flex flex-col gap-2 text-[18px] mx-2" >
 {tag}
<input id={id} type={type} className="bg-gray-200 focus:outline-[#DB4444] px-2 py-2 rounded" />
</label>)


}