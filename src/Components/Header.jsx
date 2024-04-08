import React from "react";
import "../Style/Header.css";
import Banner from "../Assets/Image/logo.svg";

const Header = () => {

  let currentUrl = window.location.href
  let currentPathname = new URL(currentUrl).pathname;



  return (
    
    <div id='headerNav'>
      <header>
        <nav className="navbar fixed-top navbar-light nav">
          <div className="wrapper container">
            <div className="logo">
              <a href="/">
                <img src={Banner} alt="" />
              </a>
            </div>
            <div className="logo-white">
              <a href="/"> </a>
            </div>
            <input type="radio" name="slider" id="menu-btn" />
            <input type="radio" name="slider" id="close-btn" />
            <ul className="nav-links">
              <label className="btn close-btn">
                <i className="fas fa-times"></i>
              </label>
              <li className={currentPathname == '/' ? "headerList active":"headerList"} id="Home">
                <a href="/">Home</a>
              </li>
              <li className={currentPathname == '/about' ? "headerList active":"headerList"} id="About">
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="#" className="desktop-item">
                  Services
                </a>
                <input type="checkbox" id="showDrop" />
                <ul className="drop-menu">
                  <li>
                    <a href="/services/website-development-company-coimbatore">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="/services/app-development-company-coimbatore">
                      App Development
                    </a>
                  </li>
                  {/* <li>
                    <a href="https://blog.akkenna.com/digital-marketing-company-india.php">
                      Digital Marketing
                    </a>
                  </li> */}
                </ul>
              </li>

              <li>
                <a href="#" className="desktop-item">
                  Animation
                </a>
                <input type="checkbox" id="showDrop" />
                <ul className="drop-menu">
                  <li>
                    <a href="/nft-marketplace-development-company">
                      NFT Design
                    </a>
                  </li>
                  <li>
                    <a href="/3d-animation-company-india">
                      3D Design
                    </a>
                  </li>
                  {/* <li>
                    <a href="">2D Design</a>
                  </li> */}
                  <li>
                    <a href="/motion-graphics-company-india">
                      Motion Graphics
                    </a>
                  </li>
                  <li>
                    <a href="/explainervideo-animation-company-india">
                      Explainer Video
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className={currentPathname == '/bloglist' ? "headerList active":"headerList"} id="Career">
                <a href="/bloglist">Blogs</a>
              </li> */}
              <li className={currentPathname == '/Career' ? "headerList active":"headerList"} id="Career">
                <a href="/career">Careers</a>
              </li>
              <a href="/contact"  target='_blank'>
                <button className="NavConBtn bg-BlueButton text-white">
                  Contact Us
                </button>
              </a>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
