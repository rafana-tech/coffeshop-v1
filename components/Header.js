import { PortableText } from "@portabletext/react";
import React, { useEffect, useState } from "react";
import { urlFor } from "../sanity";

const Header = ({ cafe }) => {
  const [changeBg, setchangeBg] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const listenScrollEvent = () => {
    if (window.scrollY > 73) {
      return setchangeBg(true);
    } else if (window.scrollY < 70) {
      return setchangeBg(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <header className={`header ${changeBg ? "scroll-header" : ""}`} id="header">
      <nav className="nav container">
        <div className="top__location">
          <PortableText value={cafe.address} />
        </div>
        <div className="nav__content">
          <div className="nav__logo">
            <img src={cafe.icon ? urlFor(cafe.icon).url() : ""} alt="" />
          </div>
          <div
            className={`nav__menu ${sidebarOpen ? "show-menu" : ""}`}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  About Us
                </a>
              </li>
              <li className="nav__item">
                <a href="#menu" className="nav__link">
                  Menu
                </a>
              </li>
              <li className="nav__item">
                <a href="#experience" className="nav__link">
                  Experience
                </a>
              </li>
              <li className="nav__item">
                <a href="#reserve" className="nav__link">
                  Reserve
                </a>
              </li>
            </ul>
            <ul className="nav__social">
              <li className="social__item">
                <a href="#" className="social__link ">
                  <i className="ri-instagram-fill"></i>
                </a>
              </li>
              <li className="social__item">
                <a href="#" className="social__link">
                  <i className="ri-twitter-fill"></i>
                </a>
              </li>
              <li className="social__item">
                <a href="#" className="social__link">
                  <i className="ri-facebook-fill"></i>
                </a>
              </li>
              <li className="social__item">
                <a href="#" className="social__link">
                  <i className="ri-mail-fill"></i>
                </a>
              </li>
            </ul>
            <div
              className="nav__close"
              id="nav-close"
              onClick={() => setSidebarOpen(false)}
            >
              <i className="ri-close-line"></i>
            </div>
          </div>
        </div>
        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={() => setSidebarOpen(true)}
        >
          <i className="ri-menu-3-line"></i>
        </div>
        <div className="top__book">
          <p>
            Call Us
            <br /> {cafe.phoneNumber}
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
