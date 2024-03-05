import React from "react";
import './navbar.css'
import {BiUserCircle,BiSearch} from 'react-icons/bi'
import {RiArrowDropDownFill} from 'react-icons/ri'
import logo from '/Users/dharshan/Documents/dharsh/web-stack/itsShowTime/src/assets/logo.png'
import Slider from "../slider/slider";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
        <nav>
            <div className="left">
                <img src={logo} alt="logo"width={100} height={100}/>
                <div className="searchbox">
                    <BiSearch className="searchbtn" />
                    <input type="text" placeholder="Search for Movies, Events, Plays, Sports and Activities" />
                </div>
            </div>
            <div className="right">
                <p className="dropdown">Bangalore<RiArrowDropDownFill className="dropicon"/></p>
                <button className='theme_btn1 linkstylenone'>Sign in</button>
                <div class="menu-toggle">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>  
            </div>
        </nav>
        <nav className="main-nav">
            <ul>
                <li><Link to='/'className="link">Movies</Link></li>
                <li><Link to='/stream' className="link">Stream</Link></li>
                <li><Link to='events' className="link">Events</Link></li>
                <li><Link to='plays' className="link">Plays</Link></li>
                <li><Link to='sports' className="link">Sports</Link></li>
                <li><Link to='activities' className="link">Activities</Link></li>

            </ul>
        </nav>
        </>
    )
}

export default Navbar