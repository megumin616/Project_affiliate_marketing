import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        {/* <!-- ***** Logo Start ***** --> */}
                        <a class="logo">
                        <Link to="/">
                            <img src={logo}/>
                        </Link>
                        </a>
                        {/* <!-- ***** Logo End ***** --> */}
                        {/* <!-- ***** Menu Start ***** --> */}
                        <ul class="nav">
                            <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
                            <li class="scroll-to-section"><a href="#men">Men's</a></li>
                            <li class="scroll-to-section"><a href="#women">Women's</a></li>
                            <li class="scroll-to-section"><a href="#kids">Kid's</a></li>
                            <li class="submenu">
                                <a href="javascript:;">Pages</a>
                                <ul>
                                    <li><Link to="about">About Us</Link></li>
                                    <li><Link to="">Product</Link></li>
                                    <li><Link to="">Single Product</Link></li>
                                    <li><Link to="">Contact Us</Link></li>
                                </ul>
                            </li>
                            <li class="submenu">
                                <a href="javascript:;">Features</a>
                                <ul>
                                    <li><a href="#">Features Page 1</a></li>
                                    <li><a href="#">Features Page 2</a></li>
                                    <li><a href="#">Features Page 3</a></li>
                                    <li><a rel="nofollow" href="https://templatemo.com/page/4" target="_blank">Template Page 4</a></li>
                                </ul>
                            </li>
                            <li class="scroll-to-section"><a href="#explore">Explore</a></li>
                        </ul>        
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        {/* <!-- ***** Menu End ***** --> */}
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}
