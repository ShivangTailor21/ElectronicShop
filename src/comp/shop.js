import React, { useState } from 'react'
import './shop.css'
import myimage from './image/shop_left.png'
import image1 from './image/shop_top.png'
import { createRoutesFromElements } from 'react-router'
import { AiFillEye, AiFillHeart } from 'react-icons/ai'
import { GrClose } from "react-icons/gr";
import { BsCurrencyRupee } from "react-icons/bs";


const Shop = ({ shop, Filter, allcatefilter, addtocart }) => {
    //toggle product detail 
    const [showDetail, setShowDetail] = useState(false)
    //detail pafe data
    const [detail ,setdetail] =useState([])
    //show detail box 
    const detailpage = (product) => {
        const detaildata = ([{product}])
        const productdetail = detaildata[0]['product']
        console.log(productdetail)
        setdetail(productdetail)
        setShowDetail(true)
    }
    console.log(detail)
    const closedetail =()=>{
        setShowDetail(false)
    }
    return (
        <>
            {
                showDetail ?
                <>
                    <div className='product_detail'>
                        <button className='close_btn' onClick={closedetail}><GrClose/></button>
                        <div className='container'>
                            <div className='img_box'>
                                <img src={detail.image} alt=''></img>
                            </div>
                            <div className='info'>
                                <h4> # {detail.cat}</h4>
                                <h2>{detail.Name1}</h2>
                                <h3> Highlights : {detail.detail1}</h3>
                                <h5><BsCurrencyRupee /> {detail.price}</h5>
                                <button onClick={() => addtocart(detail)}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </>
                : null
            }            
            <div className='shop'>
                <h2>#shop</h2>
                <p>Home . shop</p>
                <div className='container'>
                    <div className='left_box'>
                        <div className='category'>
                            <div className='header'>
                                <h2>all category</h2>
                            </div>
                            <div className='box'>
                                <ul>
                                    <li onClick={() => allcatefilter()}>#All</li>
                                    <li onClick={() => Filter("tv")}>#tv</li>
                                    <li onClick={() => Filter("laptop")}>#laptop</li>
                                    <li onClick={() => Filter("watch")}>#watch</li>
                                    <li onClick={() => Filter("ipad")}>#ipad</li>
                                    <li onClick={() => Filter("speaker")}>#speaker</li>
                                    <li onClick={() => Filter("headphone")}>#headphone</li>
                                    <li onClick={() => Filter("table")}>#table</li>
                                    <li onClick={() => Filter("camera")}>#camera</li>
                                    <li onClick={() => Filter("mobile")}>#mobile</li>
                                    <li onClick={() => Filter("bluetooth")}>#bluetooth</li>
                                    <li onClick={() => Filter("speaker1")}>#speaker1</li>
                                    <li onClick={() => Filter("alexa")}>#alexa</li>
                                </ul>
                            </div>
                        </div>
                        <div className='banner'>
                            <div className='img_box'>
                                <img src={myimage} alt=''></img>
                            </div>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='banner'>
                            <div className='img_box'>
                                <img src={image1} alt=''></img>
                            </div>
                        </div>
                        <div className='product_box'>
                            <h2>Shop product</h2>
                            <div className='product_container'>
                                {
                                    shop.map((createRoutesFromElements) => {
                                        return (
                                            <>
                                                <div className='box'>
                                                    <div className='img_box'>
                                                        <img src={createRoutesFromElements.image} alt=''></img>
                                                        <div className='icon'>
                                                            <li onClick={ () => detailpage (createRoutesFromElements)}><AiFillEye /></li>
                                                            <li><AiFillHeart /></li>
                                                            
                                                        </div>
                                                    </div>
                                                    <div className='detail'>
                                                        <h3>{createRoutesFromElements.Name}</h3>
                                                        <p><BsCurrencyRupee />{createRoutesFromElements.price}</p>
                                                        <button onClick={() => addtocart(createRoutesFromElements)}>Add To Cart</button>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop