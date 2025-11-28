export default function Button({tag,onClick}) {
  return (
    <button className="bg-[#DB4444] p-3 text-white font-medium rounded-md px-6 cursor-pointer" onClick={onClick}>{tag}</button>
  )
}