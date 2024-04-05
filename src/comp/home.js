import React, { useEffect, useState } from 'react'
import './home.css'
import { Link, createRoutesFromElements } from 'react-router-dom'
import Homeproduct from './home_product'
import { AiFillHeart, AiFillEye, AiOutlineShoppingCart } from "react-icons/ai";
import myimage from './image/T1.png';
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import image2 from './image/Multi-Banner-1.png';
import image3 from './image/Multi-banner-2.png';
import image4 from './image/Multi-banner-4.png';
import image5 from './image/Multi-Banner-3.png';
import image6 from './image/Multi-Banner-5.png';
import { BsCurrencyRupee } from "react-icons/bs";


const Home = () => {
    //product category
    // const [newProduct, setNewProduct] = useState([Homeproduct])
    //trending product
    const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
    //filter of tranding products
    const filtercate = (x) => {
        const filterproduct = Homeproduct.filter((createRoutesFromElements) => {
            return createRoutesFromElements.type === x
        })
        setTrendingProduct(filterproduct)
    }

    //All trending products
    const allTrendingProduct = () => {
        setTrendingProduct(Homeproduct)
    }
    //product category
  //  useEffect(() => {
   //     productcategory()
   // })

    //const productcategory = () => {
     //   const newcategory = Homeproduct.filter((x) =>
       //  {
       //     return x.type === 'new'
       // })
      //  setNewProduct(newcategory)
    //}
    return (
        <>
            <div className='home'>
                <div className='top_banner'>
                    <div className='constant'>
                        <h3>Silver Aluminium</h3>
                        <h2>Apple Watch</h2>
                        <p>30% off at your first ordere</p>
                        <Link to='/shop' className='link'>Shop Now</Link>
                    </div>
                </div>
                <div className='trending'>
                    <div className='container'>
                        <div className='left_box'>
                            <div className='header'>
                                <div className='heading'>
                                    <h2 onClick={() => allTrendingProduct()}>trending product</h2>
                                </div>
                                <div className='cate'>
                                    <h3 onClick={() => filtercate('new')}>New</h3>
                                    <h3 onClick={() => filtercate('featured')}>Featured</h3>
                                    <h3 onClick={() => filtercate('top')}>Top Selling</h3>
                                </div>
                            </div>
                            <div className='products'>
                                <div className='container'>
                                    {
                                        trendingProduct.map((createRoutesFromElements) => {
                                            return (
                                                <>
                                                    <div className='box'>
                                                        <div className='img_box'>
                                                            <img src={createRoutesFromElements.image}></img>
                                                        </div>
                                                        <div className='info'>
                                                            <h3>{createRoutesFromElements.Name}</h3>
                                                            <p><BsCurrencyRupee/>{createRoutesFromElements.price}</p>
                                                            <button className='btn'>Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <button>Show more</button>
                            </div>
                        </div>
                        <div className='right_box'>
                            <div className='container'>
                                <div className='testimonial'>
                                    <div className='head'>
                                        <h3>Help Desk</h3>
                                    </div>
                                    <div className='detail'>
                                        <div className='img_box'>
                                            <img src={myimage} alt='testinomial'></img>
                                        </div>
                                        <div className='info'>
                                            <h3>Robot</h3>
                                            <p>Need any help ? I am here to assist you.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='newslatter'>
                                    <div className='head'>
                                        <h3>newslatter</h3>
                                    </div>
                                    <div className='form'>
                                        <p>join our mailing list </p>
                                        <input type='email' placeholder='E-mail' autoComplete='off'></input>
                                        <button>Subscribe</button>
                                        <div className='icon_box'>
                                            <div className='icon'>
                                                <BiLogoFacebookCircle />
                                            </div>
                                            <div className='icon'>
                                                <FaTwitter />
                                            </div>
                                            <div className='icon'>
                                                <FaInstagram />
                                            </div>
                                            <div className='icon'>
                                                <FaYoutube />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='banner'>
                    <div className='container'>
                        <div className='left_box'>
                            <div className='box'>
                                <img src={image2} alt='banner'></img>
                            </div>
                            <div className='box'>
                                <img src={image3} alt='banner'></img>
                            </div>

                        </div>
                        <div className='right_box'>
                            <div className='box'>
                                <img src={image4} alt=''></img>
                                <img src={image5} alt='' ></img>
                            </div>
                            <div className='bottom'>
                                <img src={image6} alt=''></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;