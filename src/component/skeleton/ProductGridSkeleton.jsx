import ProductCardSkeleton from "./ProductCardSkeleton"

export default function ProductGridSkeleton({ count = 4 }) {
  return (
    <div className="flex gap-3 lg:gap-8 items-center justify-start flex-wrap ">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  )
}