import Button from "./Button"
export default function CouponInput() {
  return (
    <div className="flex w-full md:flex-nowrap flex-wrap gap-2">
    <input id="coupon"
      name="coupon" placeholder="Coupon Code" className="focus:outline-2 focus:outline-[#DB4444] focus:border-none placeholder:text-[16px] px-2 py-2 rounded w-full md:w-[70%] border border-gray-400" />
    <Button tag={"Apply Coupon"} />
    </div>
  )
}