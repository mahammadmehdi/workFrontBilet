import React, { useState } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
    
  return (
    <div className="navigation">
      <div className="navbar">
        <div className="left">
          <img className="image"
            src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png.webp"
            alt=""
          />
          <ul className="pages">
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/addPages"}>Add Pages</NavLink></li>
            <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
            <li><NavLink>About</NavLink></li>
            <li><NavLink>Services</NavLink></li>
            <li><NavLink>Blog</NavLink></li>
          </ul>
            <li className="none"><i className="fa-solid fa-bars"></i></li>
        </div>
        <div className="right">
            <button className="btn">Free Quote</button>
            <div className="contact">
                <div className="icon"><i className="fa-solid fa-headphones"></i></div>
                <div className="number">
                    <div className="head">Have any Question?</div>
                    <div className="bottom">Call: 10 (78) 837 3647</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
