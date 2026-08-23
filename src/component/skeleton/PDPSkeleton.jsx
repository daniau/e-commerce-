export default function PDPSkeleton() {
  return (
    <section className="mt-20 mx-5 lg:mx-18">
      <div className="flex justify-start items-start gap-5 mt-10 flex-wrap md:flex-nowrap animate-pulse">

        {/* === يطابق ImageSection === */}
        <section className="w-fit h-full flex justify-start items-center gap-2 flex-wrap md:flex-nowrap mt-10">
          <div className="bg-gray-200 w-30 h-30 rounded-xl"></div>
          <div className="bg-gray-200 w-70 h-[400px] rounded-xl"></div>
        </section>

        {/* === يطابق ItemDetails === */}
        <section className="w-full md:w-[50%] flex flex-col justify-start">
          {/* العنوان */}
          <div className="bg-gray-200 h-8 w-3/4 rounded mb-4"></div>

          {/* النجوم + التقييم */}
          <div className="flex items-center gap-2">
            <div className="bg-gray-200 h-5 w-24 rounded"></div>
            <div className="bg-gray-200 h-4 w-10 rounded"></div>
          </div>

          {/* السعر */}
          <div className="bg-gray-200 h-6 w-20 rounded mt-7"></div>

          {/* الوصف */}
          <div className="space-y-2 mt-8">
            <div className="bg-gray-200 h-4 w-full rounded"></div>
            <div className="bg-gray-200 h-4 w-full rounded"></div>
            <div className="bg-gray-200 h-4 w-2/3 rounded"></div>
          </div>

          <hr className="border-t-2 border-gray-200 w-full mt-10" />

          {/* الألوان */}
          <div className="flex items-center gap-5 mt-8">
            <div className="bg-gray-200 h-4 w-16 rounded"></div>
            <div className="bg-gray-200 w-6 h-6 rounded-full"></div>
            <div className="bg-gray-200 w-6 h-6 rounded-full"></div>
          </div>

          {/* المقاسات */}
          <div className="flex items-center gap-3 mt-8">
            <div className="bg-gray-200 h-4 w-10 rounded"></div>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-gray-200 w-9 h-9 rounded"></div>
            ))}
          </div>

          {/* الكمية + زر أضف للسلة + قلب */}
          <div className="flex items-center gap-6 mt-8">
            <div className="bg-gray-200 h-10 w-28 rounded"></div>
            <div className="bg-gray-200 h-10 w-32 rounded"></div>
            <div className="bg-gray-200 w-8 h-8 rounded-full"></div>
          </div>
        </section>

      </div>
    </section>
  )
}