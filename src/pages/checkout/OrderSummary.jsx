import { useCart } from "../../context/CartContext"
import Button from "../../component/common/Button"
import CouponInput from "../../component/common/CouponInput"
export default function OrderSummary() {
  const { cart, clearCart } = useCart()
  const total = cart.reduce((sum, item) => (item.price * item.quantity) + sum, 0)
  return (
    <section className="flex flex-col gap-2 w-full md:w-[50%]">
      <ul className="w-full">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between items-center gap-1.5 w-full">
            <div className="flex items-center justify-between gap-1">
              <img src={item.thumbnail} alt={item.title} className="md:max-w-25 h-[50%] max-w-20  " />
              <p>{item.title} <strong>X {item.quantity}</strong></p>
            </div>

            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </li>

        ))}
      </ul>

      <Total total={total} />
      <Button tag="Place Order" onClick={clearCart} className={"md:w-[30%]"} />

    </section>
  )
}
function Total({ total }) {
  return (
    <div className=" w-full  flex flex-col items-start justify-between gap-3.5  p-4">
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
      <div className="flex gap-2 mt-3 text-[18px]">
        <input type="checkbox" id="checkboxBlank" name="paymentMethod" className=" rounded-[50%] cursor-pointer" />
        <p>Blank</p>
      </div>
      <div className="flex gap-2 mt-3 text-[18px]">
        <input type="checkbox" id="cod" name="paymentMethod" className=" rounded-[50%] cursor-pointer" />
        <p>Cash on delivery</p>
      </div>
      <CouponInput/>
    



    </div>)
}