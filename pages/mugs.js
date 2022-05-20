import React from 'react'
import Link from 'next/link'
import mongoose from 'mongoose'
import Product from '../models/Product'
import { useState } from 'react'

const Mugs = ({mug}) => {
  const [mugas, setmugas] = useState(mug)
  return (
    <div className='container'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 mx-auto py-24">
    <div className="flex flex-wrap -m-4 justify-center">
      {Object.keys(mugas).length ==0 && <p>Sorry! Unfortunately, we are running out of stocks. Stay Tuned!</p>}
    {Object.keys(mugas).map((item) => { return <Link href={`/product/${mugas[item].slug}`}>
      <div className="lg:w-1/5 m-5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
        <a className="block relative rounded overflow-hidden">
          <img alt="ecommerce" className="h-[36vh] block" src={mugas[item].img} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{mugas[item].category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{mugas[item].title}</h2>
          <div className="mt-1">₹{mugas[item].price}</div>
          <div className="mt-1 space-x-2" htmlFor="sizeChoice">
            {mugas[item].size.includes('100ML') && <span className='border-2 border-gray-500 px-2 my-2'>100ML</span>}
            {mugas[item].size.includes('300ML') && <span className='border-2 border-gray-500 px-2 my-2'>300ML</span>}
            {mugas[item].size.includes('500ML') && <span className='border-2 border-gray-500 px-2 my-2'>500ML</span>}
            {mugas[item].size.includes('700ML') && <span className='border-2 border-gray-500 px-2 my-2'>700ML</span>}
            {mugas[item].size.includes('1L') && <span className='border-2 border-gray-500 px-2 my-2'>1L</span>}
          </div>
          <div className="mt-1 space-x-2" htmlFor="colorChoice">
         
              {mugas[item].color.includes('orange') && <button className="border-2 border-gray-300 ml-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none"></button>}
              {mugas[item].color.includes('red') && <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
              {mugas[item].color.includes('blue') && <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
              {mugas[item].color.includes('green') && <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
              {mugas[item].color.includes('purple') && <button className="border-2 border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none"></button>}
              {mugas[item].color.includes('black') && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
              {mugas[item].color.includes('white') && <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>}
              {mugas[item].color.includes('yellow') && <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
              {mugas[item].color.includes('pink') && <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>}
          </div>
        </div>
      </div>
      </Link>})} 
     
    </div>
  </div>
</section>
    </div>
  )
}

export async function getServerSideProps(context) {

  if(!mongoose.connections[0].readyState){
   
    await mongoose.connect(process.env.MONGO_URI);
}
 let products = await Product.find({category: "Mugs"})
    let mug = {};
    for (let item of products){
      if(item.title in mug){
        if(!mug[item.title].color.includes(item.color) && item.availableQty > 0){
          mug[item.title].color.push(item.color)
        }
        if(!mug[item.title].size.includes(item.size) && item.availableQty > 0){
          mug[item.title].size.push(item.size)
        }

      }else{
        mug[item.title] = JSON.parse(JSON.stringify(item))
        if(item.availableQty > 0){
          mug[item.title].color = [item.color]
          mug[item.title].size = [item.size]

        }
      }

    }

  // console.log(tshirts)
  return {
    props: {mug: JSON.parse(JSON.stringify(mug))}, // will be passed to the page component as props
  }
}

export default Mugs