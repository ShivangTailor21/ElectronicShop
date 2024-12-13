import React from 'react';
import './cart.css';
import { Link, useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { BsCurrencyRupee } from "react-icons/bs";

const Cart = ({ cart, setcart}) => {
  const navigate = useNavigate();

  // increase the quantity of the cart
  const incqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id
    })
    setcart(cart.map((item) => {
      return item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
    }))
  }

  // decrease the quantity of the cart
  const decqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id
    })
    setcart(cart.map((item) => {
      return item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
    }))
  }

  // remove the product
  const removeproduct = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id
    })
    if (exist.qty > 0) {
      setcart(cart.filter((item) => {
        return item.id !== product.id
      }))
    }
  }

  const handleCheckout = () => {
    navigate('/checkout'); // navigate to the checkout page
  };

  return (
    <>
      <div className='cart'>
        <h3>Cart</h3>
        {
          cart.length === 0 &&
          <>
            <div className='empty_cart'>
              <h2>your shopping cart is empty</h2>
              <Link to='/shop'><button>Shop Now</button></Link>
            </div>
          </>
        }
        <div className='container'>
          {
            cart.map((item) => {
              return (
                <>
                  <div className='box'>
                    <div className='img_box'>
                      <img src={item.image} alt=''></img>
                    </div>
                    <div className='detail'>
                      <div className='info'>
                        <h4>{item.cat}</h4>
                        <h3>{item.Name1}</h3>
                        <p>Price <BsCurrencyRupee/> {item.price}</p>
                        <p>Detail :
                          Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube|
                          Operating System: Google TV|
                          Resolution: Ultra HD (4K) 3840 x 2160 Pixels|
                          Sound Output: 20 W|
                          Refresh Rate: 60 Hz.
                        </p>
                        <p>Total <BsCurrencyRupee/> {item.price * item.qty}</p>
                      </div>
                      <div className='quantity'>
                        <button onClick={() => incqty(item)}>+</button>
                        <input type='number' value={item.qty}></input>
                        <button onClick={() => decqty(item)}>-</button>
                      </div>

                      <div className='icon'>
                        <li onClick={() => removeproduct(item)}> <MdDelete /></li>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
        </div>
        <div className='btn1'>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </>
  )
};

export default Cart;