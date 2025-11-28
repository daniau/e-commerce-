import CounterDownTimer from "../CounterDownTimer";

export default function ProductCard() {
   return (
     <CounterDownTimer second={15} minute={5} hour={12} day={3}/>
     );
 
  
}
function Card({ tag, time ,children}) {
  return (
    <div className="flex-col items-start justify-between  mr-4 my-4 md:my-0 ">
      <div className="text-[14px] font-semibold mb-2 flex items-center">{tag}</div>
      <p className="font-bold">{time} {children}</p>

    </div>
  )

}

