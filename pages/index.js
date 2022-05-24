import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FaTshirt } from 'react-icons/fa'
import React from 'react'
import { useState } from 'react'
import Product from '../models/Product'
import mongoose from "mongoose";

export default function Home({cloths}) {
  const [tData, settData] = useState(cloths)
  console.log(cloths)
  return <>
      <div className=''>


      <Head>
        <title>Coderz Sales</title>
        <meta name="description" content="Coderz Sales - Wear Code, Write Code!" />
        <link rel="icon" href="/coderz-logo.svg" />
      </Head>
      <div>
        <img src={'/code-bg.svg'} width="100%" className=' w-full mx-0 ' />
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Explore The Shop</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We have all types of branded tshirts, hoodies and mugs at the most affordable price all over India! Please check out and grab the one, Lets make this a trend!</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <Link href={'/tshirts'}><div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer shadow-xl">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={'/tshirts.svg'} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">T-Shirts</h1>
                  <p className="leading-relaxed">We provide all brand new tshirts at most affordable prices all over india!</p>
                </div>
              </div>
            </div></Link>
            <Link href={'/hoodies'}><div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer shadow-xl">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={'/hoodies.svg'} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Hoodies</h1>
                  <p className="leading-relaxed">We have most trending patterned hoodies in stock. Check out!</p>
                </div>
              </div>
            </div></Link>
            <Link href={'/mugs'} ><div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer shadow-xl">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={'/mugs.svg'} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">

                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Mugs</h1>
                  <p className="leading-relaxed">A handful of mugs with different shades and patterns in one shop! Check out and grab one!</p>
                </div>
              </div>
            </div></Link>


          </div>
        </div>
      </section>


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Why should you buy from Coderzz Sales?</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">We strongly believes that whatever you wear, will reflects your work! So we provide premium hoodies, tshirts & mugs! Some of our features which makes us unique and market leading brand is here :) </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">Premium Clothing Material</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">Free Shipping All Over India</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">Exciting Offers & Heavy Discounts On Every Weekend</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">Instant Refund On Cancellation</span>
              </div>
            </div>


          </div>

        </div>
      </section>



      <div className='container'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(tData).map((allTshirts) => {
              return <Link key={`${tData[allTshirts].slug}`} href={`product/${tData[allTshirts].slug}`}>
                <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
                  <a className="block relative rounded overflow-hidden">
                    <img alt="ecommerce" className="h-[36vh] block mx-auto" src={tData[allTshirts].img} />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{tData[allTshirts].category}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{tData[allTshirts].title}</h2>
                    <div className="mt-1">₹{tData[allTshirts].price}</div>
                    <div className="mt-1 space-x-2" htmlFor="sizeChoice">
                      {tData[allTshirts].size.includes('S') && <span className='border-2 border-gray-500 px-2 my-2'>S</span>}
                      {tData[allTshirts].size.includes('M') && <span className='border-2 border-gray-500 px-2 my-2'>M</span>}
                      {tData[allTshirts].size.includes('L') && <span className='border-2 border-gray-500 px-2 my-2'>L</span>}
                      {tData[allTshirts].size.includes('XL') && <span className='border-2 border-gray-500 px-2 my-2'>XL</span>}
                      {tData[allTshirts].size.includes('XXL') && <span className='border-2 border-gray-500 px-2 my-2'>XXL</span>}
                    </div>
                    <div className="mt-1 space-x-2" htmlFor="colorChoice">

                      {tData[allTshirts].color.includes('orange') && <button className="border-2 border-gray-300 ml-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {tData[allTshirts].color.includes('red') && <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {tData[allTshirts].color.includes('blue') && <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {tData[allTshirts].color.includes('green') && <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {tData[allTshirts].color.includes('purple') && <button className="border-2 border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                      {tData[allTshirts].color.includes('black') && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                      {tData[allTshirts].color.includes('white') && <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>}
                      {tData[allTshirts].color.includes('yellow') && <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                    </div>
                  </div>
                </div>
              </Link>
            })}


          </div>
        </div>
      </section>
    </div>

    </div>
  </>
}

export async function getServerSideProps(context) {

  if (!mongoose.connections[0].readyState) {

    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: "Tshirts" })
  let cloths = {};
  for (let item of products) {
    if (item.title in cloths) {
      if (!cloths[item.title].color.includes(item.color) && item.availableQty > 0) {
        cloths[item.title].color.push(item.color)
      }
      if (!cloths[item.title].size.includes(item.size) && item.availableQty > 0) {
        cloths[item.title].size.push(item.size)
      }

    } else {
      cloths[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        cloths[item.title].color = [item.color]
        cloths[item.title].size = [item.size]

      }
    }

  }

  // console.log(tshirts)
  return {
    props: { cloths: JSON.parse(JSON.stringify(cloths)) }, // will be passed to the page component as props
  }
}
