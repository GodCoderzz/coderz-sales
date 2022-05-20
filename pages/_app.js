import '../styles/globals.css'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'


function MyApp({ Component, pageProps }) {

  const [progress, setProgress] = useState(0)
  const [cart, setcart] = useState({})
  const [subTotal, setsubTotal] = useState(0)
  const [user, setuser] = useState({value: null})
  const [keyMaker, setkeyMaker] = useState(0)
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })
    // console.log("I am refreshed!")
   try {
    if(localStorage.getItem("cart")){
      setcart(JSON.parse(localStorage.getItem("cart")))
      saveCart(JSON.parse(localStorage.getItem("cart")))
    }
   } catch (error) {
     console.error(error)
     localStorage.clear()
   }
   let token = localStorage.getItem("token");
   if(token){
     setuser({value: token})
     setkeyMaker(Math.random())
   }
  
  }, [router.query])
  
const logOut = () => {
  localStorage.removeItem("token")
  setuser({value: null})
  setkeyMaker(Math.random())
  router.push("/")
}
  const saveCart = (myCart) =>{
    localStorage.setItem('cart', JSON.stringify(myCart))
    let subt = 0;
    let key = Object.keys(myCart)
    for (let index = 0; index < key.length; index++) {
      subt += myCart[key[index]].qty * myCart[key[index]].price;
    }
    setsubTotal(subt)
  }

  const addToCart = (itemCode, name, qty, price, size, variant) =>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty + 1
    }
    else{
      newCart[itemCode] = {qty:1, name, price, size, variant}
    }
    setcart(newCart)
    saveCart(newCart)
  }

  const buyNow = (itemCode, name, qty, price, size, variant) =>{
    setcart({})
    saveCart({})
    let newCart = {itemCode: {qty:1, name, price, size, variant}};
    setcart(newCart)
    saveCart(newCart)
    router.push('/checkout')

  }


  const removeFromCart = (itemCode, name, qty, price, size, variant) =>{
    let newCart = cart;
    if(itemCode in cart){
      newCart[itemCode].qty = cart[itemCode].qty - 1
    }
    if(newCart[itemCode]['qty'] <=0){
      delete newCart[itemCode]
    }
    setcart(newCart)
    saveCart(newCart)
  }

  const clearCart = () =>{
    setcart({})
    saveCart({})
  }

  return <>
    <LoadingBar
        color='#f11946'
        waitingTime={400}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
  <Navbar cart={cart} logOut={logOut} keyMaker={keyMaker} user={user} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
  <Component buyNow={buyNow} keyMaker={keyMaker} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
  <Footer />
  </>
}

export default MyApp
