import React from 'react'
import Head from 'next/head'

const Order = () => {
  return <>
    <Head>
      <title>Order Confirmation | Coderz Sales</title>
    </Head>
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-14 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
     
      <img alt="ecommerce" className="lg:w-1/2 mb-6 w-full lg:h-auto h-64 object-cover object-center rounded" src="/thanks.jpg" />

      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6  lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">CODERZ SALES</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id: #875246</h1>
        <p className="leading-relaxed mb-4 text-green-600">Your order is successfully placed!</p>
        <div className="flex mb-4">
          <a className="flex-grow text-center border-b-2 border-gray-300 py-2 text-lg px-1">Item Description</a>
          <a className="flex-grow text-center border-b-2 border-gray-300 py-2 text-lg px-1">Quantity</a>
          <a className="flex-grow text-center border-b-2 border-gray-300 py-2 text-lg px-1">Price</a>
        </div>
        
        <div className="flex border-t border-gray-200 py-2 justify-around">
          <div className="text-gray-500">Wear The Code!(XL/Red)</div>
          <div className=" text-gray-500">2</div>
          <div className=" text-gray-500">₹499</div>
        </div>
        <div className="flex border-t border-gray-200 py-2 justify-around">
          <div className="text-gray-500">Have A Cod...(LG/Green)</div>
          <div className=" text-gray-500">4</div>
          <div className=" text-gray-500">₹105</div>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2 justify-around">
          <div className="text-gray-500">It's a feature(SM/Black)</div>
          <div className=" text-gray-500 text-right">2</div>
          <div className=" text-gray-500">₹320</div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">Subtotal: ₹11785</span>   
        </div>
        <div className="flex">
        <button className="flex mt-3 text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">Track  Order</button>
        </div>
      </div>


    </div>
  </div>
</section>
  </>
}

export default Order