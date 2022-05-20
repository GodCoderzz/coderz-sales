import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs'
import { ImBin2 } from 'react-icons/im'
import { useRef } from 'react'
import {MdAccountCircle} from 'react-icons/md'

const Navbar = ({ cart, logOut, user, key, addToCart, removeFromCart, subTotal, clearCart }) => {
  // console.log(cart, addToCart, removeFromCart, subTotal, clearCart)
  const ref = useRef(null)
  const [dropDown, setdropDown] = useState(false)
  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-0')) {
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full');
    }
    else if (!ref.current.classList.contains('translate-x-0')) {
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    }

  }
 
  return (
    <nav className='nav flex flex-col md:flex-row md:justify-start justify-center px-8 py-1  self-center align-middle shadow-md sticky top-0 z-10 bg-white' >
      <div className='self-center mr-auto  md:mx-5 sm:mx-0 my-auto'>
        <Link href={"/"}>
          <a>  <Image src='/coderz-logo-h.svg' height={650 / 14} width={1370 / 14} />  </a>
        </Link>
      </div>

      <div className='self-center  align-middle'>
        <ul className='flex space-x-3 md:space-x-6 font-bold'>

          <Link href={"/tshirts"}><li className='hover:text-orange-300 cursor-pointer font-extrabold'><a>Tshirts</a></li></Link>
          <Link href={"/hoodies"}><li className='hover:text-orange-300 cursor-pointer font-extrabold'><a>Hoodies</a></li></Link>
          <Link href={"/mugs"}><li className='hover:text-orange-300 cursor-pointer font-extrabold'><a>Mugs</a></li></Link>
        </ul>
      </div>
      <div className="absolute right-3 mx-2 top-3 mt-auto flex items-center" >
       
        {!user.value && <div><Link href={'/login'}><button className='bg-orange-500 hover:bg-orange-600 py-1 px-2 text-white rounded-md text-sm mx-3'>Login</button></Link></div>}
        <a onMouseOver={()=>{setdropDown(true)}} onMouseLeave={()=>{setdropDown(false)}}>
       {user.value && <MdAccountCircle  className='text-xl md:text-3xl lg:text-4xl hover:text-orange-300 cursor-pointer mx-3' />}
       {dropDown && <div className='absolute top-6 right-12'>
         <ul className='bg-white shadow-lg w-32 py-4 px-2 rounded-md'>
          <Link href={'/account'}><li className='cursor-pointer px-1 py-2 pt-2 text-sm text-center font-bold hover:text-orange-700 '>My Account</li></Link>
          <Link href={'/orders'}><li className='cursor-pointer px-1 py-2 text-sm text-center font-bold hover:text-orange-700 '>Orders</li></Link>
         <li onClick={logOut} className='cursor-pointer px-1 py-2 pb-2 text-sm text-center font-bold hover:text-orange-700'>Log Out</li>
         </ul>
       </div>}
       </a>
        <AiOutlineShoppingCart onClick={toggleCart} className='text-xl md:text-3xl hover:text-orange-300 cursor-pointer' />

      </div>
      <div ref={ref} className="h-[100vh] w-[50vh] overflow-y-scroll sideCart z-10 absolute top-0 right-0 px-16 py-10 bg-orange-100 transition-transform  translate-x-full">
        <h2 className="font-bold text-4xl sm:text-md md:text-3xl">Shopping Cart:</h2>
        <span onClick={toggleCart} className="absolute right-2 top-5 cursor-pointer text-2xl text-orange-700"><AiFillCloseCircle /> </span>
        <ul className='list-decimal'>
          {Object.keys(cart).length == 0 &&
            <div className='my-4 font-semibold'>No items are added to cart!</div>
          }

          {Object.keys(cart).map((k) => {
            return <li key={key}>
              <div className='item flex my-3 font-semibold'>
                <div className='flex justify-center items-center w-2/3 text-xl'>{cart[k].name} ({cart[k].variant}/{cart[k].size})</div>
                <div className='flex justify-center items-center w-1/3'><AiFillMinusCircle onClick={() => { removeFromCart(k, cart[k].name, cart[k].qty, cart[k].price, cart[k].size, cart[k].variant) }} className='text-xl text-orange-700' /> <span className="mx-2 pointer-events-none">{cart[k].qty}</span> <AiFillPlusCircle onClick={() => { addToCart(k, cart[k].name, cart[k].qty, cart[k].price, cart[k].size, cart[k].variant) }} className='text-xl text-orange-700' /></div>
              </div>
            </li>
          })}

        </ul>
        <div className='font-semibold text-sm mb-0 pb-0 pt-3'>Subtotal: <span className='font-extrabold'> {subTotal} </span></div>
        <div className="flex justify-between fixed">
         <Link href={'/checkout'}>
          <button className="flex mt-4 mr-2 text-white py-2 px-2 focus:outline-none bg-orange-500 hover:bg-orange-600 rounded text-md"><BsFillBagCheckFill className='mt-1 mr-1' /> Checkout</button>
          </Link>
          <button onClick={clearCart} className="flex mt-4 text-white py-2 px-2 focus:outline-none bg-orange-500 hover:bg-orange-600 rounded text-md"><ImBin2 className='mt-1 mr-1' /> Clear Cart</button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar