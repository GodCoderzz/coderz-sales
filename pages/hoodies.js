import React from 'react'
import Link from 'next/link'
import mongoose from 'mongoose'
import Product from '../models/Product'
import { useState } from 'react'

const Hoodies = ({hoodie, keyMaker}) => {
  const [hood, sethood] = useState(hoodie)
  return (
    <div className='container'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 mx-auto py-24">
    <div className="flex flex-wrap -m-4 justify-center">
      {Object.keys(hood).length ==0 && <p>Sorry! Unfortunately, we are running out of stocks. Stay Tuned!</p>}
    {Object.keys(hood).map((item) => { return <Link key={hood[item].slug} href={`/product/${hood[item].slug}`}>
      <div className="lg:w-1/5 m-5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg">
        <a className="block relative rounded overflow-hidden">
          <img alt="ecommerce" className="h-[36vh] block" src={hood[item].img} />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{hood[item].category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{hood[item].title}</h2>
          <div className="mt-1">₹{hood[item].price}</div>
          <div className="mt-1 space-x-2" htmlFor="sizeChoice">
            {hood[item].size.includes('S') && <span className='border-2 border-gray-500 px-2 my-2'>S</span>}
            {hood[item].size.includes('M') && <span className='border-2 border-gray-500 px-2 my-2'>M</span>}
            {hood[item].size.includes('L') && <span className='border-2 border-gray-500 px-2 my-2'>L</span>}
            {hood[item].size.includes('XL') && <span className='border-2 border-gray-500 px-2 my-2'>XL</span>}
            {hood[item].size.includes('XXL') && <span className='border-2 border-gray-500 px-2 my-2'>XXL</span>}
          </div>
          <div className="mt-1 space-x-2" htmlFor="colorChoice">
         
              {hood[item].color.includes('orange') && <button className="border-2 border-gray-300 ml-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none"></button>}
              {hood[item].color.includes('red') && <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
              {hood[item].color.includes('blue') && <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
              {hood[item].color.includes('green') && <button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
              {hood[item].color.includes('purple') && <button className="border-2 border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none"></button>}
              {hood[item].color.includes('black') && <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
              {hood[item].color.includes('white') && <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>}
              {hood[item].color.includes('yellow') && <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
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
 let products = await Product.find({category: "Hoodies"})
    let hoodie = {};
    for (let item of products){
      if(item.title in hoodie){
        if(!hoodie[item.title].color.includes(item.color) && item.availableQty > 0){
          hoodie[item.title].color.push(item.color)
        }
        if(!hoodie[item.title].size.includes(item.size) && item.availableQty > 0){
          hoodie[item.title].size.push(item.size)
        }

      }else{
        hoodie[item.title] = JSON.parse(JSON.stringify(item))
        if(item.availableQty > 0){
          hoodie[item.title].color = [item.color]
          hoodie[item.title].size = [item.size]

        }
      }

    }

  // console.log(tshirts)
  return {
    props: {hoodie: JSON.parse(JSON.stringify(hoodie))}, // will be passed to the page component as props
  }
}

export default Hoodies