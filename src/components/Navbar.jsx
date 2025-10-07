import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../assets/sha_kart_logo.png'

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = cartItems.length;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-3 fixed-top shadow-lg" style={{ backgroundColor: "#237850ff" }}>
      <div className="container-fluid">


        <NavLink to="/" className="navbar-brand fw-bold text-white me-3">
          <img src={logo} alt="Sha Kart" width={80} />
        </NavLink>
        <ul className="navbar-nav me-2 mb-2 mb-lg-0">
          {user ? (
            <li className="nav-item">
              <span className="nav-link text-white">🌎 Deliver to {user.email}</span>
            </li>

          ) : (<li className="nav-item">
            <span className="nav-link text-white">🌎 Deliver to ----</span>
          </li>)}


          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              User Type
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item">Purchase</a></li>
              <li><a className="dropdown-item">Sell Products</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item">Create Account</a></li>
            </ul>
          </li>
        </ul>

        <form className="d-flex mx-3" style={{ flexGrow: 1, maxWidth: "600px" }}>
          <input
            className="form-control"
            type="search"
            placeholder="Search products..."
            aria-label="Search"
          />
        </form>


        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <NavLink to="/productlist" className="btn btn-outline-dark text-white fw-bold me-2">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="btn btn-outline-dark text-white fw-bold me-2 position-relative">
                Cart 🛒
                {cartCount > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  >
                    {cartCount}
                  </span>
                )}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/aboutus" className="btn btn-outline-dark text-white fw-bold me-2">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contactus" className="btn btn-outline-dark text-white fw-bold me-2">
                Contact Us
              </NavLink>
            </li>



            {user ? (
              <>
                <li className="nav-item ms-3">
                  <span className="nav-link text-white">Hi, {user.email}</span>
                </li>
                <li className="nav-item ms-2">
                  <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item ms-3">
                  <NavLink to="/login" className="nav-link text-white fw-bold">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item ms-2">
                  <NavLink to="/signup" className="btn btn-warning btn-sm fw-bold">
                    Sign up
                  </NavLink>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}
