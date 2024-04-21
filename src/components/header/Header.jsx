import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
    const [active, setActive] = useState(false);
    const [listpages, setListPages] = useState(false);

    const hamber = () => {
        let el = document.querySelector(".menu-trigger");
        let nav = document.querySelector(".nav");
    
        if (active) {
          el.classList.add('click', 'active');
          nav.style.display = 'block';
        } else {
          el.classList.remove('active');
          nav.style.display = 'none';
        }
    
        setActive(!active); 
      };

    const listpage = () => {
        let ul = document.querySelector(".ul-pages")
        if (listpages) {
            ul.classList.add('click', 'active')
        } else {
            ul.classList.remove('active')
        }

        setListPages(!listpages)
    }

  return (
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a className="logo">
                  <Link to="/">
                    <img src={logo} />
                  </Link>
                </a>
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" className="active">
                      <Link to="/">Home</Link>
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#men">Men's</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#women">Women's</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#kids">Kid's</a>
                  </li>
                  <li className="submenu">
                    <a href="#" onClick={listpage}>Pages</a>
                    <ul classNameName="ul-pages">
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/product">Product</Link>
                      </li>
                      {/* <li><Link to="">Single Product</Link></li> */}
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="submenu">
                    <a href="#">Features</a>
                    <ul>
                      <li>
                        <a href="#">Features Page 1</a>
                      </li>
                      <li>
                        <a href="#">Features Page 2</a>
                      </li>
                      <li>
                        <a href="#">Features Page 3</a>
                      </li>
                      <li>
                        <a
                          rel="nofollow"
                          href="https://templatemo.com/page/4"
                          target="_blank"
                        >
                          Template Page 4
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#explore">Explore</a>
                  </li>
                </ul>
                <a className="menu-trigger" onClick={hamber}>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
  );
}
