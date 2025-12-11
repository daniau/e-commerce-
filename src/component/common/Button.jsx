export default function Button({tag,onClick,className}) {
  return (
    <button className={`bg-[#DB4444] hover:bg-[#C33C3C] transition-all duration-300 p-2 text-white font-medium rounded px-6 cursor-pointer ${className}`} onClick={onClick}>{tag}</button>
  )
}