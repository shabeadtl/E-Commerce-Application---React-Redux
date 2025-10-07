import React from 'react'
import logo from '../assets/sha_kart_logo.png'
export default function Footer() {
  return (
    <div>
         <footer className="bg-dark text-white p-4 mt-5 ">
      <div className="container">
        <div className="row gy-4 align-items-start">
          <div className="col-12 col-sm-6 col-md-3">
            <h5>ABOUT</h5>
            <ul className="list-unstyled small">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Sha_kart Stories</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h5>GROUP COMPANIES</h5>
            <ul className="list-unstyled small">
              <li>Flipkart</li>
              <li>Amazon</li>
              <li>Ali Express</li>
              <li>sha.in</li>
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-md-2">
            <h5>HELP</h5>
            <ul className="list-unstyled small">
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation & Return</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-md-2 border-end border-secondary pe-3">
            <h5>CONSUMER POLICY</h5>
            <ul className="list-unstyled small">
              <li>Cancellation & Return</li>
              <li>Terms of Use</li>
              <li>Security</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="col-12 col-md-2 text-center text-md-start">
            <h5>Registered Address</h5>
            <p className="small mb-2">
              Randathani (PO),<br />Malappuram (Dist), Kerala, India<br />
              GPIN: MC9-MLF-LFJ5
            </p>
            <img src={logo} alt="Shabe.in Logo" className="img-fluid" style={{ maxWidth: '120px' }} />
          </div>
        </div>
      </div>

      <div className="text-center text-secondary mt-4 small">
        ©️ 2002 - 2025 Sha_kart.com
      </div>
    </footer>
    </div>
  )
}
