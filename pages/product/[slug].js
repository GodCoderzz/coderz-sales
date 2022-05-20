import { useRouter } from 'next/router'
import { useState } from 'react'
import mongoose from 'mongoose'
import Product from '../../models/Product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Post = ({ addToCart, product, variants, buyNow }) => {
  const router = useRouter()
  const { slug } = router.query

  const [pin, setpin] = useState()
  const [service, setservice] = useState()

  // console.log(Object.keys(variants))
  const [color, setcolor] = useState(product.color)
  const [size, setsize] = useState(product.size)

  const checkService = async () => {
    let pins = await fetch('http://localhost:3000/api/pin')
    let pinJson = await pins.json();
    console.log(pinJson, pin)
    if (pinJson.includes(parseInt(pin))) {
      setservice(true)
      toast.success('Your pincode is servicable!', {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    else {
      setservice(false)
      toast.error('Sorry! We do not deliever to your pincode yet!', {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }

  const onChangePin = (e) => {
    setpin(e.target.value)
  }
  const refreshVariant = (newcolor, newsize) => {
    let url = `/product/${variants[newcolor][newsize]['slug']}`;
    window.location = url;
  }
  return <>
    <section className="text-gray-600 body-font overflow-hidden">
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container px-5 py-16 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded" src={product.img} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">CODERZ SALES</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 capitalize">{product.title} ({color}/{size})</h1>


            {/* <div className="flex mb-4">
              <span className="flex items-center">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-orange-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div> */}


            <p className="leading-relaxed capitalize">{product.desc}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color:</span>
                {Object.keys(variants).includes("white") && Object.keys(variants['white']).includes(size) && <button onClick={() => { refreshVariant('white', size) }} className={` ml-1 bg-white rounded-full w-6 h-6 focus:outline-none ${color === 'white' ? 'border-2 border-black' : 'border-2 border-gray-300'} `}></button>}
                {Object.keys(variants).includes("black") && Object.keys(variants['black']).includes(size) && <button onClick={() => { refreshVariant('black', size) }} className={` ml-1 bg-black rounded-full w-6 h-6 focus:outline-none ${color === 'black' ? 'border-2 border-black' : 'border-2 border-gray-300'}`}></button>}
                {Object.keys(variants).includes("red") && Object.keys(variants['red']).includes(size) && <button onClick={() => { refreshVariant('red', size) }} className={` ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none ${color === 'red' ? 'border-2 border-black' : 'border-2 border-gray-300'}`}></button>}
                {Object.keys(variants).includes("blue") && Object.keys(variants['blue']).includes(size) && <button onClick={() => { refreshVariant('blue', size) }} className={` ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none ${color === 'blue' ? 'border-2 border-black' : 'border-2 border-gray-300'}`}></button>}
                {Object.keys(variants).includes("yellow") && Object.keys(variants['yellow']).includes(size) && <button onClick={() => { refreshVariant('yellow', size) }} className={` ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none ${color === 'yellow' ? 'border-2 border-black' : 'border-2 border-gray-300'}`}></button>}
                {Object.keys(variants).includes("green") && Object.keys(variants['green']).includes(size) && <button onClick={() => { refreshVariant('green', size) }} className={` ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none ${color === 'green' ? 'border-2 border-black' : 'border-2 border-gray-300'}`}></button>}
                {Object.keys(variants).includes("purple") && Object.keys(variants['purple']).includes(size) && <button onClick={() => { refreshVariant('purple', size) }} className={` ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none ${color === 'purple' ? 'border-2 border-black' : 'border-2 border-gray-300'}`}></button>}
                {Object.keys(variants).includes("orange") && Object.keys(variants['orange']).includes(size) && <button onClick={() => { refreshVariant('orange', size) }} className={` ml-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none ${color === 'orange' ? 'border-2 border-black' : 'border-2 border-gray-300'}`}></button>}
                {Object.keys(variants).includes("pink") && Object.keys(variants['pink']).includes(size) && <button onClick={() => { refreshVariant('pink', size) }} className={` ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none ${color === 'pink' ? 'border-2 border-black' : 'border-2 border-gray-300'}`}></button>}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select value={size} onChange={(e) => { refreshVariant(color, e.target.value) }} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500 text-base pl-3 pr-10">
                    {Object.keys(variants[color]).includes("S") && <option value={'S'}>S</option>}
                    {Object.keys(variants[color]).includes("M") && <option value={'M'}>M</option>}
                    {Object.keys(variants[color]).includes("L") && <option value={'L'}>L</option>}
                    {Object.keys(variants[color]).includes("XL") && <option value={'XL'}>XL</option>}
                    {Object.keys(variants[color]).includes("XXL") && <option value={'XXL'}>XXL</option>}

                    {Object.keys(variants[color]).includes("100ML") && <option value={'100ML'}>100ML</option>}
                    {Object.keys(variants[color]).includes("300ML") && <option value={'300ML'}>300ML</option>}
                    {Object.keys(variants[color]).includes("500ML") && <option value={'500ML'}>500ML</option>}
                    {Object.keys(variants[color]).includes("700ML") && <option value={'700ML'}>700ML</option>}
                    {Object.keys(variants[color]).includes("1L") && <option value={'1L'}>1L</option>}


                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">₹ 499</span>

              <button onClick={() => { buyNow(slug, product.title, 1, product.price, size, color) }} className="flex ml-10 text-white bg-orange-500 border-0 py-2 px-5 focus:outline-none hover:bg-orange-600 rounded xl:text-xl">Buy Now</button>

              <button onClick={() => { addToCart(slug, product.title, 1, product.price, size, color) }} className="flex ml-10 text-white bg-orange-500 border-0 py-2 px-5 focus:outline-none hover:bg-orange-600 rounded xl:text-xl">Add To Cart</button>
              {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button> */}
            </div>
            <div className="pin my-4">
              <div className="flex w-full md:justify-start justify-start items-end">
                <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                  <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">Pin Code</label>
                  <input onChange={onChangePin} type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button onClick={checkService} className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg ">Check</button>
              </div>
            </div>
            {(!service && service != null) && <div className="result text-red-700 text-sm">
              Sorry! We do not provide service on your provided pincode yet!
            </div>}
            {(service && service != null) && <div className="result text-green-700 text-sm">
              Yay! Your provided pincode is serviceable!
            </div>}
          </div>
        </div>
      </div>
    </section>
  </>
}


export async function getServerSideProps(context) {

  if (!mongoose.connections[0].readyState) {

    await mongoose.connect(process.env.MONGO_URI);
  }

  let product = await Product.findOne({ slug: context.query.slug })
  let variants = await Product.find({ title: product.title, category: product.category })
  let colorSizeSlug = {}

  for (let item of variants) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug }
    } else {
      colorSizeSlug[item.color] = {}
      colorSizeSlug[item.color][item.size] = { slug: item.slug }
    }
  }

  // console.log(colorSizeSlug)
  return {
    props: { product: JSON.parse(JSON.stringify(product)), variants: JSON.parse(JSON.stringify(colorSizeSlug)) }, // will be passed to the page component as props
  }
}


export default Post