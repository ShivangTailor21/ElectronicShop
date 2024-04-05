import React, { useState } from 'react'
import Nav from './comp/nav';
import { BrowserRouter } from 'react-router-dom';
import Rout from './comp/rout';
import Footer from './comp/footer';
import Shop from './comp/shop';
import Homeproduct from './comp/home_product';
import Cart from './comp/cart';
import About from './comp/about';

const App = () => {
  //Add to cart
  const [cart ,setcart] =useState([])
  //shop page product
  const [shop, setShop] = useState(Homeproduct)
  //shop search filter
  const [search, setsearch] = useState('')
  //shop category filter
  const Filter = (x) => {
    const cateFilter = Homeproduct.filter((product) => {
      return product.cat === x
    })
    setShop(cateFilter)
  }
  const allcatefilter = () => {
    setShop(Homeproduct)
  }
  //search  filter
  const searchlength = (search || []).length === 0
  const searchproduct = () => {
    if (searchlength) {
      alert("Please Search Something :)")
      setShop(Homeproduct)
    }
    else {


      const searchfilter = Homeproduct.filter((x) => {
        return x.cat === search
      })
      setShop(searchfilter)

    }
  }
  //Add to cart
  
  const addtocart = (product) =>
  {
    const exist = cart.find((x) =>{
      return x.id ===product.id
    })
    if(exist)
    {
        alert("This Product Is Already In Cart")
    }
    else
    {
      setcart([...cart ,{...product ,qty:1}])
      alert("Added To Cart")
    }
    
    
  }
  console.log(cart)
  return (
    <>
      <BrowserRouter>
        <Nav search={search} setsearch={setsearch} searchproduct={searchproduct} />
        <Rout setcart={setcart} cart = {cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} search={search} addtocart ={addtocart} About={About} />
      </BrowserRouter>
      <Footer />
    </>
  )
}
export default App;