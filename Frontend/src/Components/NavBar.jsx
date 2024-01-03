import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaUserAlt,
  FaInstagramSquare,
  FaCog,
  FaRegCommentDots,
  FaSignOutAlt,
  FaRegBell,
  FaYoutubeSquare,
  FaChevronLeft
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignOut = (e) => {
    e.preventDefault()
    alert("are you sure, Do you want to signout your profile?")
    localStorage.clear()
    dispatch({
      type: 'SIGNOUT_SUCCESS',
      payload: null
    })
    window.location.href = "/"
  }


  return (
    <>
      <nav className="main-nav">

        <div className="logo">

          <h2>
            <span>Welcome to ABC jewelleries</span>
          </h2>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a href="/productlist"> <FaChevronLeft /> Go back </a>
            </li>
            <li>
              <a href="/dashboard"> <FaUserAlt /> View profile</a>
            </li>
            <li>
              <a> <FaRegBell /> Notifications </a>
            </li>
            <li>
              <a> <FaCog /> Settings </a>
            </li>
            <li>
              <div onClick={handleSignOut}><FaSignOutAlt /> SignOut</div>
            </li>
          </ul>
        </div>


        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a> <FaFacebookSquare className="facebook" /> </a>
            </li>
            <li>
              <a> <FaInstagramSquare className="instagram" /> </a>
            </li>
            <li>
              <a> <FaYoutubeSquare className="youtube" /> </a>
            </li>

          </ul>


          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>


    </>
  );
};

export default Navbar;
