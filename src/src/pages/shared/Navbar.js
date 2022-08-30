// import React, { useEffect } from "react";
import "./Navber.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import UseHooks from "./UseHooks";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [tm, setTm] = useState('light-theme')
  const toggleTheme = () => {
    if (tm === 'dark-theme') {
      setTm('light-theme')
    }
    else {
      setTm('dark-theme')
    }
  }
  useEffect(() => {
    document.body.className = tm;
  }, [tm]);



 

  const [user] = useAuthState(auth);
  const [dark, setDark] = useState(false);
  const themes = () => {
    setDark(!dark);
    // setTheme(!theme);
  }


  // useEffect(() => {
  // }, [])
  // console.log(user);



  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };

  const [nav, setNav] = useState(false);
  const backgroundChange = () => {
    if (window.scrollY >= 20) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", backgroundChange);
  return (
    <div className={nav ? "changebg" : "style-nev"}>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid fs-5">
          <div class="flex items-center justify-center">
            <Link class="navbar-brand" to="/">
              {/* <img
                src="https://i.ibb.co/MsmSNWq/My-project-1.png?fbclid=IwAR2MinoRXSa1rYKjZdbwfQtQxwz4x7TzHB8Dj37ow-rGO6mDOd1z14FyQxU"
                alt=""
                width="160"
                height="120"
              /> */}
              <h2 className="text-2xl text-white ">Ticket-Kato</h2>
            </Link>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul> */}
            <ul class="d-flex navbar-nav text-black ">
              <li class="nav-item dropdown me-2 text-white">
                <a
                  class="nav-link active dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Book Tickets
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="BookList">
                      Book a Tickets
                    </Link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Destinations
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Schedules
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="d-flex navbar-nav">
              <li class="nav-item dropdown me-4">
                <a
                  class="nav-link active dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Travel Info
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="/bagInfo">
                      Baggage Info
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/privacy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/refund">
                      Refund Request & Policy
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/termsCondition">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="d-flex navbar-nav ">
              <li class="nav-item dropdown me-4">
                <a
                  class="nav-link active dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Offers
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Ticket Discounts
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Limited Offers
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="d-flex navbar-nav ">
              <li class="nav-item dropdown me-5">
                <a
                  class="nav-link active dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link class="dropdown-item" to="/contactus">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/feedback">
                      Feedback
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/about">
                      About Us
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="navbar-nav me-end mb-2 mb-lg-0 px-3">
              <li class="nav-item">
                <Link to='/dashboard'>Dashboard</Link>
              </li>
            </ul>
            <ul class="navbar-nav me-end mb-2 mb-lg-0 px-3">
              <li class="nav-item">
                {
                  dark ? <a onClick={() => { toggleTheme(); themes() }} ><FaSun></FaSun></a> :
                    <a onClick={() => { toggleTheme(); themes() }} ><FaMoon></FaMoon></a>
                }
              </li>
            </ul>
            <ul class="navbar-nav me-end mb-2 mb-lg-0">
              <li class="nav-item">
                {user ? (
                  <button onClick={logout} className="btn btn-success text-white">
                    Logout
                  </button>
                ) : (
                  <Link to="/login" className="btn btn-success">
                    Login
                  </Link>
                )}
              </li>
            </ul>

            <ul className="navbar-nav me-end mb-2 mb-lg-0 mx-3">
              {user?.photoURL ? (
                <div className="h-10 w-10 sm:mb-2 lg:mb-0 mr-3 ml-4">
                  <img
                    src={user?.photoURL}
                    class="rounded-circle d-flex justify-center align-items-center"
                    style={{ width: "50px", height: "40px" }}
                    alt="Avatar"
                  />
                </div>
              ) : (
                <div className="h-10 w-10 sm:mb-2 lg:mb-0 mr-3 ml-4">
                  <img
                    src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"
                    class="rounded-circle d-flex justify-center align-items-center"
                    style={{ width: "50px", height: "40px" }}
                    alt="Avatar"
                  />
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
