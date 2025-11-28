import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import  {faBars, faXmark} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


export default function Header() {
  const[menuOpen,setMenuOpen]=useState(false)
  return (
    <nav className="fiexed relative flex justify-between items-center pb-4 pt-7 px-5 lg:px-18  text-[10px] md:text-[16px] lg:text-[16px] xl:text-xl  border-b border-b-gray-300 gap-1.5 text-black ">
      <a className='text-black font-bold text-2xl lg:text-4xl cursor-pointer'>Exclusive</a>
      <ul className='md:flex justify-evenly items-center hidden '>
      <li className="hover:underline hover:text-[#DB4444] hover:duration-500  font-bold mr-2  lg:mr-4 xl:mr-12"><a href="#">Home</a></li>
      <li  className="hover:underline hover:text-[#DB4444] hover:duration-500 font-bold mr-2 lg:mr-4 xl:mr-12"><a href="#">Contact</a></li>
      <li  className="hover:underline hover:text-[#DB4444] hover:duration-500 font-bold mr-2  lg:mr-4 xl:mr-12"><a href="#">About</a></li>
      <li  className="hover:underline hover:text-[#DB4444] hover:duration-500 font-bold mr-2 lg:mr-4 xl:mr-12"><a href="#">Sign Up</a></li>

      </ul>
      <div className='flex items-center justify-between'>
      <div className= 'bg-[#f2f2f2] rounded-[10px] w-fit md:flex justify-around items-center py-0.5 p-2 hidden '>
        <input className='focus:outline-none w-fit p-1  placeholder:text-[16px]' type="search"placeholder='What are you looking for?' />
        <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </div>
        <div className=''>
        <FontAwesomeIcon className='hover:underline hover:text-[#DB4444] hover:duration-500 cursor-pointer  ml-8  text-xl md:text-2xl '  icon={faCartShopping}/>
        <FontAwesomeIcon className='hover:underline hover:text-[#DB4444] hover:duration-500 cursor-pointer ml-8  text-xl md:text-2xl' icon={faHeart}/>
        <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}>
                  <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className=' text-xl ml-8' />

      </button>
        </div>
      </div>
     
      {menuOpen&& <ul className='absolute top-full right-0 flex flex-col justify-between items-center text-[18px] w-full md:hidden  shadow-md bg-white'>
      <li className="hover:underline hover:text-[#DB4444] hover:duration-500  font-bold mt-2  "><a href="#">Home</a></li>
      <li  className="hover:underline hover:text-[#DB4444] hover:duration-500 font-bold mt-2 "><a href="#">Contact</a></li>
      <li  className="hover:underline hover:text-[#DB4444] hover:duration-500 font-bold mt-2"><a href="#">About</a></li>
      <li  className="hover:underline hover:text-[#DB4444] hover:duration-500 font-bold mt-2 mb-2"><a href="#">Sign Up</a></li>

      </ul>}

  

    </nav>
  )
}