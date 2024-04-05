import React from 'react'
import { Routes , Route } from 'react-router'
import Home from './home'
import Shop from './shop'
import Cart from './cart'
import About from './about'
import Contact from './contact'


const Rout = ({shop , Filter , allcatefilter,addtocart,cart , setcart , contact}) => {
  return (
    <>
        <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='cart' element = {<Cart cart={cart} setcart={setcart}/>} />
            <Route path='shop' element={<Shop shop={shop} Filter ={Filter} allcatefilter={allcatefilter} addtocart={addtocart} />} />
            <Route path='contact' element={< Contact contact={contact}/>} />
        </Routes>
    </>
  )
}

export default Rout