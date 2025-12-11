import { Send } from "lucide-react";
import { Facebook,Instagram,Twitter,Linkedin } from "lucide-react";
import { Copyright } from "lucide-react";


export default function Footer() {
  return (
    <footer className="flex flex-col">
       <section className="bg-black flex justify-between items-center py-10 px-10 text-white mt-8 flex-wrap text-[12px] gap-5 border-b border-gray-200">
      <div className="flex flex-col h-[150px] justify-between">
        <h2 className="font-bold text-[16px]">Exclusive</h2>
        <h3 className="font-semibold text-[16px]">Subscribe</h3>
        <p>Get 10% off your first order</p>
        <div className="flex  items-center rounded-[10px] w-fit border justify-around  py-0.5 p-2">
        <input className='focus:outline-none w-fit p-1  placeholder:text-[16px]' type="email" name="" id="" placeholder="Enter your email" />
        <Send/>
        </div>
      </div>

      <div className="flex flex-col h-[150px] justify-between">
        <h2 className="font-bold text-[16px]">Support</h2>
        <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>

      <div className="flex flex-col h-[150px] justify-between">
        <h2 className="font-bold text-[16px]">Account</h2>
        <p>My Account.</p>
        <p>Login / Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>

      </div>

      <div className="flex flex-col h-[150px] justify-between">
        <h2 className="font-bold text-[16px]">Quick Link</h2>
        <p>Privacy Policy</p>
        <p>Terms Of Use</p>
        <p>FAQ</p>
        <p>Contact</p>

      </div>

      
      <div className="flex flex-col h-[150px] justify-between">
        <h2 className="font-bold text-[16px]">Download App</h2>
        <p className="text-gray-300">Save $3 with App New User Only</p>
      <div className="grid grid-rows-2 grid-cols-2 w-[150px] h-20 gap-2 mt-2">
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.linkedin.com/in/sameh-dheir" alt="QR" className="object-contain w-full h-full row-span-2"/>
        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store"  className="object-contain w-full h-full"/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="object-contain w-full h-full" />

      </div>
      <div className="flex mt-4 ">
        <Facebook className="mr-2 cursor-pointer hover:bg-[#1877F2]  hover:duration-500 rounded-xs"/>
        <Instagram className="mr-2 cursor-pointer hover:bg-[linear-gradient(45deg,#F58529,#FEDA77,#DD2A7B,#8134AF,#515BD4)] rounded-xs   hover:duration-500 "/>
        <Twitter className="mr-2 cursor-pointer hover:bg-[#1DA1F2]  hover:duration-500  rounded-xs "/>
        <Linkedin className="hover:bg-[#0A66C2]   cursor-pointer  hover:duration-500 rounded-xs" />

      </div>

      </div>
    </section>
    <div className="bg-black flex items-center justify-center py-2 text-gray-300 px-2">
      <Copyright className="mr-4"/>
      <p>Copyright Rimel 2022. All right reserved</p>
    </div>
    </footer>
   
  )
}