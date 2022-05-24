import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Product from '../models/Product'
import mongoose from "mongoose";
import Head from 'next/head';


const Tshirt = ({ cloths }) => {

  const [tData, settData] = useState(cloths)
  console.log(cloths)
  return <>
    <Head>
      <title>Tshirts | Coderz Sales</title>
    </Head>
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

export default Tshirt