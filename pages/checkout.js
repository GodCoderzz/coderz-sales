import React from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import {BsCreditCardFill} from 'react-icons/bs'
import Link from 'next/link';
import Head from 'next/head';

const Checkout = ({ cart, subTotal, addToCart, removeFromCart }) => {
  return <>
    <Head>
      <title>Checkout | Coderz Sales</title>
    </Head>
    <div className="container font-semibold flex justify-center pt-5 text-xl">Checkout</div>
    <div className='m-10'>
      <div className="flex py-2 lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div className="relative flex-grow w-full">
          <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
          <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative flex-grow w-full">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
      </div>

      <div className="flex py-2 lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div className="relative flex-grow w-full">
          <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Address</label>
          <textarea cols="30" rows="2" type="text" id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  ></textarea>
        </div>
      </div>

      <div className="flex py-2 lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div className="relative flex-grow w-full">
          <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Phone</label>
          <input type="phone" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative flex-grow w-full">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">City</label>
          <input type="text" id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>

      </div>

      <div className="flex py-2 lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div className="relative flex-grow w-full">
          <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Pincode</label>
          <input type="text" id="pin" name="pin" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative flex-grow w-full">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">State</label>
          <input type="text" id="state" name="state" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
      </div>

      <div className="flex py-2 lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div className="relative flex-grow w-full">
          <label htmlFor="placeorder" className="leading-7 text-sm text-gray-600">Review Your Cart & Place Order</label>

          <div className=" sideCart  px-8 py-2 bg-orange-100 ">

            <ul className='list-decimal'>
              {Object.keys(cart).length == 0 &&
                <div className='my-4 font-semibold'>No items to chekout!</div>
              }
               {Object.keys(cart).map((k) => {
                return <li>
                  <div className='item flex my-3 font-semibold'>
                    <div className='flex justify-center items-center text-xl capitalize'>{cart[k].name} ({cart[k].variant}/{cart[k].size})</div>
                    <div className='flex justify-center items-center w-1/3'><AiFillMinusCircle onClick={() => { removeFromCart(k, cart[k].name, cart[k].qty, cart[k].price, cart[k].size, cart[k].variant) }} className='text-xl text-orange-700' /> <span className="mx-2">{cart[k].qty}</span> <AiFillPlusCircle onClick={() => { addToCart(k, cart[k].name, cart[k].qty, cart[k].price, cart[k].size, cart[k].variant) }} className='text-xl text-orange-700' /></div>
                  </div>
                </li>
              })}

            </ul>
            <div className='font-semibold text-sm mb-0 pb-0 pt-3'>Subtotal: <span className='font-extrabold'> {subTotal} </span></div>

          </div>
        </div>

      </div>

      <div className="flex py-2 lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div className="relative flex-grow w-full">
        <Link href={'/order'}>
          <button className="flex mt-4 mr-2 text-white py-2 px-6 focus:outline-none bg-orange-500 hover:bg-orange-600 rounded text-md"><BsCreditCardFill className='mt-1 mr-2' />  Pay ₹{subTotal}</button>
          </Link>
                  </div>

      </div>



    </div>
  </>
}

export default Checkout