import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FaTshirt } from 'react-icons/fa'

export default function Home() {
  return (
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
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We have all types of branded tshirts, hoodies and mugs at the most affordable price all over India! Please check out and grab the one, Let's make this a trend!</p>
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
                  <p className="leading-relaxed">A handful of mugs with different shades and patterns in one shop! Check out & grab one!</p>
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



    </div>
  )
}
