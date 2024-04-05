import React from 'react'
import { FaPiggyBank, FaShippingFast, FaHeadphones, FaWallet } from "react-icons/fa";
import './footer.css'
import myimage from './image/logo.png'



const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='left_box'>
                        <div className='box'>
                            <div className='icon_box'>
                                <FaPiggyBank />
                            </div>
                            <div className='detail'>
                                <h3>great savings</h3>
                                <p>"Unlock your financial potential and achieve your dreams with smart saving strategies. Remember, every penny saved is a step closer to your goals!"</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon_box'>
                                <FaShippingFast />
                            </div>
                            <div className='detail'>
                                <h3>free shipping</h3>
                                <p>"Enjoy free shipping on all orders with no minimum purchase required!"</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon_box'>
                                <FaHeadphones />
                            </div>
                            <div className='detail'>
                                <h3>24/7</h3>
                                <p>"Experience seamless support around the clock with our 24/7 service!"</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='icon_box'>
                                <FaWallet />
                            </div>
                            <div className='detail'>
                                <h3>Wallet</h3>
                                <p>"Keep your essentials close and your style on point with our sleek and functional wallets."</p>
                            </div>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='header'>
                            <img src={myimage} alt='' height='150px' width='150px' ></img>
                            <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                Elevating your mobile experience with cutting-edge accessories and solutions, right at your fingertips.
                            </p>
                        </div>
                        <div className='bottom'>
                            <div className='box'>
                                <h3>your account</h3>
                                <ul>
                                    <li>Account</li>
                                    <li>About</li>
                                    <li>Credit</li>
                                    <li>Sales</li>
                                </ul>
                            </div>
                            <div className='box'>
                                <h3>Products</h3>
                                <ul>
                                    <li>Delivery</li>
                                    <li>Track Order</li>
                                    <li>New Product</li>
                                    <li>Old Product</li>
                                </ul>
                            </div>
                            <div className='box'>
                                <h3>Contact Us</h3>
                                <p><a href="shivangtailor21@gmail.com">shivangtailor21@gmail.com</a></p>
                                <h4><a href="tel:+916353573007">+(91)6353573007</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer