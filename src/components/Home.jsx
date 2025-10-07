import React from "react";
import '../components/home.css'
import carousel1 from "../assets/carousel1.webp";
import carousel2 from '../assets/carousel2.webp'
import carousel3 from '../assets/carousel3.webp'
import carouselmain from '../assets/carouselmain.webp'

import ad from '../assets/Your ad.gif'
import fansgeyser from '../assets/product2/fans&gey.webp'
import home from '../assets/product2/home.webp'
import projector from '../assets/product2/projector.webp'
import speaker from '../assets/product2/spkr.webp'
import monitor from '../assets/product2/monitors.webp'
import watch from '../assets/product2/smartwatch.webp'

import samsung from '../assets/product2/smsng galaxy s25.webp'
import pixel from '../assets/product2/google pixel 9.webp'
import nothing from '../assets/product2/nothing phone 3a.webp'
import realme from '../assets/product2/realme  p3x 5g.webp'
import oppo from '../assets/product2/oppo k13x 5g.webp'
import vivo from '../assets/product2/vivo.webp'

import promo1 from '../assets/product2/promo1.webp'
import promo2 from '../assets/product2/promo2.webp'
import promo3 from '../assets/product2/promo3.webp'

import pro17 from '../assets/iphone/17pro.webp'
import pro16 from '../assets/iphone/16pro.webp'
import pro15 from '../assets/iphone/15pro.webp'
import pro14 from '../assets/iphone/14pro.webp'
import pro13 from '../assets/iphone/13pro.webp'
import pro12 from '../assets/iphone/12pro.webp'
import pro11 from '../assets/iphone/11pro.webp'


export default function Header() {
  return (
    <div>
      
      <div style={{marginTop:'55px'}}>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <img src={carouselmain} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={carousel1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={carousel2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={carousel3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
<div>
 <div className="container mt-4 shadow-lg rounded-3">
      <h4 className="mb-3">Top Deals</h4>
      <div className="d-flex flex-wrap justify-content-between text-center">
        
        <div className="me-3 mb-3">
          <img src={fansgeyser} alt="Fans & Geysers" style={{ width: "120px", height: "120px", objectFit: "contain" }} className="prod"/>
          <p className="mt-2 mb-1">Fans & Geysers</p>
          <b>From ₹999</b>
        </div>

        <div className="me-3 mb-3">
          <img src={home} alt="Home Essentials" style={{ width: "120px", height: "120px", objectFit: "contain" }}className="prod" />
          <p className="mt-2 mb-1">Home Essentials</p>
          <b>Shop Now!</b>
        </div>

        <div className="me-3 mb-3">
          <img src={projector} alt="Projector" style={{ width: "120px", height: "120px", objectFit: "contain" }}className="prod" />
          <p className="mt-2 mb-1">Projector</p>
          <b>From ₹6990</b>
        </div>

        <div className="me-3 mb-3">
          <img src={speaker} alt="Best Selling Mobile" style={{ width: "120px", height: "120px", objectFit: "contain" }}className="prod" />
          <p className="mt-2 mb-1">Best Selling Mobile S...</p>
          <b>From ₹499*</b>
        </div>

        <div className="me-3 mb-3">
          <img src={monitor} alt="Monitors" style={{ width: "120px", height: "120px", objectFit: "contain" }}className="prod" />
          <p className="mt-2 mb-1">Monitors</p>
          <b>From ₹6599</b>
        </div>

        <div className="mb-3">
          <img src={watch} alt="Fastrack Smartwatch" style={{ width: "120px", height: "120px", objectFit: "contain" }}className="prod" />
          <p className="mt-2 mb-1">Fastrack Smartwatc.</p>
          <b>From ₹1,399</b>
        </div>
        <div>
          <img src={ad} alt="" style={{ width: "160px", height: "190px", objectFit: "contain", border:'1px solid grey', padding:'5px', borderRadius:'15px', backgroundColor:'lightgrey' }}/>
        </div>

      </div>
    </div>
</div>
{/* 2nd row */}

<div>
 <div className="container mt-5 shadow-lg rounded-3">
      <h4 className="mb-3">Mobiles</h4>
      <div className="d-flex flex-wrap justify-content-between text-center">
        <div>
          <img src={ad} alt="" style={{ width: "160px", height: "190px", objectFit: "contain", border:'1px solid grey', padding:'5px', borderRadius:'15px', backgroundColor:'lightgrey' }}/>
        </div>
        <div className="me-3 mb-3">
          <img src={samsung} alt="samsung" style={{ width: "120px", height: "120px", objectFit: "contain" }}className="prod" />
          <p className="mt-2 mb-1">Samsung Galaxy S25..</p>
          <b>Just ₹68,999*</b>
        </div>

        <div className="me-3 mb-3">
          <img src={pixel} alt="google pixel" style={{ width: "120px", height: "120px", objectFit: "contain" }}className="prod" />
          <p className="mt-2 mb-1">Google Pixel 9</p>
          <b>From ₹62,999*</b>
        </div>

        <div className="me-3 mb-3">
          <img src={nothing} alt="nothing" style={{ width: "120px", height: "120px", objectFit: "contain" }}className="prod" />
          <p className="mt-2 mb-1">Nothing Phone (3a)</p>
          <b>From ₹22,999*</b>
        </div>

        <div className="me-3 mb-3">
          <img src={oppo} alt="oppo" style={{ width: "120px", height: "120px", objectFit: "contain" }} className="prod"/>
          <p className="mt-2 mb-1">Oppo K13x 5G</p>
          <b>Just ₹10,749*</b>
        </div>

        <div className="me-3 mb-3">
          <img src={realme} alt="Realme" style={{ width: "120px", height: "120px", objectFit: "contain" }} className="prod"/>
          <p className="mt-2 mb-1">Realme P3x 5G</p>
          <b>Just ₹12,499* </b>
        </div>

        <div className="mb-3 ">
          <img src={vivo} alt="Vivo T4 Lite 5G" style={{ width: "120px", height: "120px", objectFit: "contain" }} className="prod"/>
          <p className="mt-2 mb-1">Vivo T4 Lite 5G</p>
          <b>From ₹9,999</b>
        </div>
        

      </div>
    </div>
</div>
<div>
    <div className="container my-4 justify-content-between">
      <div className="row">
        {/* promo Card 1 */}
        <div className="col-md-4 image">
          <div className="card shadow border-0">
            <img
              src={promo1}
              className="card-img-top"
              alt="Samsung Galaxy Book4"
             style={{  width:'430px', objectFit: "contain" }}
            />
            
          </div>
        </div>

        {/* promo Card 2 */}
        <div className="col-md-4 image">
          <div className="card shadow border-0">
            <img
              src={promo2}
              className="card-img-top"
              alt="Logitech Racing Wheel"
              style={{  width:'430px', objectFit: "contain" }}
            />
           
          </div>
        </div>

        {/* promo Card 3 */}
        <div className="col-md-4 image">
          <div className="card shadow border-0">
            <img
              src={promo3}
              className="card-img-top"
              alt="Smart TV"
              style={{  width:'430px', objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
</div>
<div>
  {/* 3rd row  */}
 <div className="container mt-4 shadow-lg rounded-3">
      <h4 className="mb-3">I phone Deal!</h4>
      <div className="d-flex flex-wrap justify-content-between text-center p-3 " style={{boxSizing:'border-box'}}>
        
        <div className="me-3 mb-3">
          <img src={pro17} alt="Iphone 17 Pro" style={{ width: "120px", height: "120px", objectFit: "contain" }} className="prod"/>
          <p className="mt-2 mb-1">Iphone 17 Pro</p>
          <p style={{color:'red', fontSize:'15px', marginBottom:'0', fontStyle:'bold'}}>Upcoming....</p>
          <b>₹1,34,900</b>
        </div>

        <div className="me-3 mb-3">
          <img src={pro16} alt="Iphone 16 Pro" style={{ width: "120px", height: "120px", objectFit: "contain" }}className="prod" />
          <p className="mt-2 mb-1">Iphone 16 Pro</p>
          <b>₹1,09,999</b>
        </div>

        <div className="me-3 mb-3">
          <img src={pro15} alt="Iphone 15 Pro" style={{ width: "120px", height: "120px", objectFit: "contain" }}className="prod" />
          <p className="mt-2 mb-1">Iphone 15 Pro</p>
          <b>₹94,999</b>
        </div>

        <div className="me-3 mb-3">
          <img src={pro14} alt="Iphone 14 Pro" style={{ width: "120px", height: "120px", objectFit: "contain" }}className="prod" />
          <p className="mt-2 mb-1">Iphone 14 Pro</p>
          <b>₹1,29,900</b>
        </div>

        <div className="me-3 mb-3">
          <img src={pro13} alt="Iphone 13 Pro" style={{ width: "120px", height: "120px", objectFit: "contain" }}className="prod" />
          <p className="mt-2 mb-1">Iphone 13 Pro</p>
          <b>₹1,69,900</b>
        </div>
        <div className="me-3 mb-3">
          <img src={pro12} alt="Iphone 12 Pro" style={{ width: "120px", height: "120px", objectFit: "contain" }}className="prod" />
          <p className="mt-2 mb-1">Iphone 12 Pro</p>
          <b>₹1,19,900</b>
        </div>

        <div className="mb-3">
          <img src={pro11} alt="Iphone 11 Pro" style={{ width: "120px", height: "120px", objectFit: "contain" }}className="prod" />
          <p className="mt-2 mb-1">Iphone 11 Pro</p>
          <b>₹1,40,000</b>
        </div>
        

      </div>
    </div>
</div>

    </div>
  );
}
