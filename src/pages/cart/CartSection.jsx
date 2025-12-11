import { memo } from "react";
import NavigationPath from "../../component/common/NavigationPath";
import { useCart } from "../../context/CartContext";
import { X } from "lucide-react"
import { Link } from "react-router";
import Button from "../../component/common/Button";
import CouponInput from "../../component/common/CouponInput"
export default function CartSection() {
  const { cart, updateQuantity, deleteItem } = useCart()
  const total = cart.reduce((sum, item) => (item.price * item.quantity) + sum, 0)
  function handleQuantity(id, e) {
    updateQuantity(id, e.target.value)
  }

  return (
    <section className="mt-20 mx-2 lg:mx-18  ">
      {(cart.length > 0) ?

        <>
          <NavigationPath title={"cart"} />
          <div className="grid grid-cols-5   w-[85%] mt-10  font-bold text-xs md:text-xl ">
            <span>Product</span>
            <span>Product Name</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
          <hr className="border-t-2 border-gray-300 mt-4 w-full " />
          <ul>
            {cart.map((item) => {
              return <li key={item.id}>
                <div className="grid grid-cols-5 w-[85%] mt-2 gap-1 items-center group">
                  <div className="relative">
                    <X onClick={() => deleteItem(item.id)} className={`group-hover:opacity-100 opacity-0 transition-all duration-300 absolute top-0 left-0 text-[#DB4444] hover:duration-500 cursor-pointer   w-4 md:w-8 `} />
                    <img key={item.id} src={item.thumbnail} alt={item.title} className="md:max-w-30 h-[50%] sm:max-w-40 font-bold  " />

                  </div>

                  <p className=" text-xs md:text-[18px] " >{item.title}</p>

                  <div className=" text-xs md:text-[18px] ">{`$ ${item.price} `}</div>
                  <input type="number" min={1} className="focus:outline-none border  text-xs md:text-[18px]   border-black w-10 rounded-xs" value={item.quantity} onChange={(e) => handleQuantity(item.id, e)} />
                  <div className=" text-xs md:text-[18px] ">${(item.price * item.quantity).toFixed(2)}</div>

                </div>
                <hr className="border-t-2 border-gray-300 mt-4 w-full " />


              </li>

            }

            )}
          </ul>
          <div className="flex mt-5 justify-between items-center">
            <Link to={'/'}>
              <button className="bg-white text-black border border-gray-400 rounded hover:bg-[#DB4444] hover:text-white py-2 px-4 cursor-pointer transition-all duration-500">
                Return To Shop
              </button>
            </Link>
            <button className="bg-white text-black hover:bg-[#DB4444] border border-gray-400 rounded hover:text-white py-2 px-4 cursor-pointer transition-all duration-500">
              Update Cart
            </button>

          </div>
          <CartSummary total={total} />

        </>

        : <p className="flex justify-center items-center w-full h-[50vh] text-xl">cart is empty</p>}



    </section>
  )
}
const CartSummary = memo(function CartSummary({ total }) {
  return (
    <div className="mt-5 flex items-start justify-between gap-5 lg:gap-0 w-full flex-wrap">
      <div className="flex w-full lg:w-[40%] items-start justify-between md:flex-nowrap md:gap-0 flex-wrap gap-4 ">
        <CouponInput/>
      </div>
      <div className="lg:w-[30%] w-full border-2 border-gray-400 flex flex-col items-start justify-between text-black p-4">
        <h5 className="font-bold text-xl mb-2 ">Cart Total</h5>
        <div className="flex items-center justify-between w-full text-gray-800  my-2 font-semibold">

          <p>SubTotal:</p>
          <p>${total.toFixed(2)}</p>

        </div>
        <hr className="border-t border-gray-600 mt-2 w-full " />

        <div className="flex items-center justify-between w-full  my-2 text-gray-800 font-semibold ">

          <p>Shipping:</p>
          <p>Free</p>

        </div>
        <hr className="border-t border-gray-600 mt-2 w-full " />

        <div className="font-bold flex items-center justify-between w-full  mb-2 text-gray-800 " >

          <p>Total:</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <Link to={'/checkout'} className="w-full">
        <button className=" mt-2  bg-[#DB4444] border text-[18px] border-gray-400 rounded hover:bg-[#C33C3C] w-full text-white py-2 px-4 cursor-pointer transition-all duration-500">Proceed to checkout</button>
        </Link>


      </div>

    </div>
  )

})