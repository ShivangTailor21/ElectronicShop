
import { MdLocalShipping } from "react-icons/md";
import './nav.css'
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import image from './image/logo1.png';

const Nav = ({search ,setsearch , searchproduct}) => {
    const { loginWithRedirect , logout , user, isAuthenticated } = useAuth0();
    
    return (
        <>
            <div className='header'>
                <div className='topheader'>
                    <div className='icons'>
                        <MdLocalShipping />
                    </div>
                    <div className='info'>
                        <p>"Free delivery on orders over $100! Shop now and enjoy the convenience of doorstep delivery."</p>
                    </div>
                </div>
                <div className='mid_header'>
                    <div className='logo'>
                        <img src={image} alt='logo' ></img>
                    </div>
                    <div className='search_box'>
                        <input type='text' value={search} placeholder='search' onChange={(e) => setsearch(e.target.value)}></input>
                        <button onClick={searchproduct}> <AiOutlineSearch /> </button>
                    </div>
                    {
                        isAuthenticated ?
                        //if user is login then logout shown on display
                        <div className='user'>
                        <div >
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}className='icon'>
                                <CiLogout />
                                <div>Logout</div>

                            </button>
                        </div>
                    </div>
                    :
                    //If user is logout the login button shown on display
                    <div className='user'>
                        <div >
                            <button onClick={() => loginWithRedirect()}className='icon'>
                                <FiLogIn />
                                <div>Login</div>

                            </button>
                        </div>
                    </div>

                    }
                </div>
                
                <div className='last_header'>
                    <div className='user_profile'>
                        {
                            //user profile shown here
                            isAuthenticated ?
                            <>
                                <div className='icon'>
                                     <CiUser />
                                </div>
                                <div className='info'>
                                    <h2>{user.name}</h2>
                                    <p>{user.email}</p>

                                </div>
                            </>
                            :
                            <>
                             <div className='icon'>
                                     <CiUser />
                                </div>
                                <div className='info'>
                                    <p>Please Login</p>
                                </div>
                            </>
                        }
                    </div>
                    <div className='nav'>
                        <ul>
                            <li><Link to ='/' className='Link '>Home</Link></li>
                            <li><Link to ='/Shop' className='Link '>Shop</Link></li>
                            <li><Link to ='/Cart' className='Link '>Cart</Link></li>                           
                            <li><Link to ='/About' className='Link '>About</Link></li>
                            <li><Link to ='/Contact' className='Link '>Contact</Link></li>
                            
                        </ul>
                    </div>
                    <div className='offer'>
                        <p>Flat 10% over all iphone </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav