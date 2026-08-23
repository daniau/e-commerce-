export default function ProductCardSkeleton() {
  return (
    <div className="flex-col w-[300px] h-fit animate-pulse">
      <div className="bg-gray-200 w-[300px] h-[250px] rounded"></div>
      <div className="mt-4 space-y-2">
        <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
        <div className="bg-gray-200 h-4 w-1/2 rounded"></div>
        <div className="bg-gray-200 h-4 w-1/4 rounded"></div>
      </div>
    </div>
  )
}