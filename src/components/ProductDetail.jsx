
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import "../components/home.css";


export default function ProductDetail() {
  const { productid } = useParams();
  const [p, setProduct] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (!productid) return;
    fetch(`https://fakestoreapi.com/products/${productid}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [productid]);

  return (
    <div style={{ marginTop: '85px' }}>
      <h3 className='ms-5 mb-3'>Product Details</h3>
      <div className='container d-flex p-4 rounded' style={{ background: "linear-gradient(to right, #f1f6f8ff, #f3f3f3ff)" }}>
        <div style={{ borderRight: '0.5px solid grey ', padding: '4px' }}>
          <img src={p.image} alt="" width={300} className='prod' />
          <div>
            <button
              className='mt-4 p-2 w-auto btn btn-warning text-white fw-semibold'
              onClick={() => {
                dispatch(addToCart(p));
                alert("✅ Added to Cart,pls Check your cart");
              }}
            >
              🛒 ADD TO CART
            </button>

            <button className='mt-4 ms-3 w-auto p-2 btn btn-danger text-white fw-semibold'>BUY NOW!</button>
          </div>
        </div>

        <div className='ms-5'>
          <h4>{p.title}</h4>
          <span className='rounded fw-bold bg-success text-white' style={{ paddingLeft: '5px', paddingRight: '5px', fontSize: '0.8em' }}>
            {p.rating?.rate}★
          </span>
          <span className='ms-2 text-muted fw-semibold'>{p.rating?.count} Ratings</span>
          <span className='ms-2 fw-bold bg-dark-subtle rounded-1'>  SHA KART<span className='text-primary fw-bold '>✔️Assured </span></span>

          <p className='text-success mt-2 fw-semibold mb-1'>Special Price</p>
          <div><span className='fs-2 fw-bold '>₹ {p.price}</span></div>
          <p className='fw-semibold'>Category: {p.category}</p>
          <p style={{ fontSize: '0.9em' }}>Secure delivery in 2 Days, Monday</p>
          <p className='fw-semibold'>Coupons for you</p>
          <p >💰Partner OfferBuy this & Get 5% off upto ₹750 on furniture, Only for you!</p>
          <p className='fw-semibold'>Available offers</p>
          <span>💰Bank Offer10% Off on Supermoney UPI. Max discount of ₹50. Minimum order value of ₹250.T&C <br />

            💰Bank Offer5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C <br />

            💰Bank Offer5% cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar quarterT&C</span> <br />
            <button className='btn btn-secondary mt-5' style={{marginLeft:'150px'}}>share⤴️</button>
            <button className='btn btn-secondary mt-5 ms-3' >Add to wishlist❤️</button>
        </div>
      </div>
      <div>
        <div className='container d-flex p-4 rounded mt-5' style={{ background: "linear-gradient(to right, #f1f6f8ff, #f3f3f3ff)" }}>
          <div style={{ borderRight: '0.5px solid grey ', padding: '4px', maxWidth: '600px' }}>
            <span className='fs-4 fw-bold' style={{ borderBottom: '1px solid grey' }}>Product Description:</span>
            <div className='mb-3 mt-3 ms-2'>{p.description}</div>
          </div>
          <div className='ms-3'>
            <span className='fs-4 fw-bold ' style={{ borderBottom: '1px solid grey' }}>Ratings & Reviews</span>
            <div className='mt-3 ms-3'>
               <span className='rounded fw-bold  p-1 fs-3' style={{ paddingLeft: '5px', paddingRight: '5px', fontSize: '0.8em' }}>
            {p.rating?.rate}★
          </span>
          <span className='ms-4 text-muted fw-semibold fs-3'>{p.rating?.count} Ratings</span>
          <p>Certified Buyers done thei reviews!</p>
          <div><button className="btn btn-primary " >Rate this..</button></div>
            </div>
          </div>
        </div>
      </div>
      <div className='container d-flex p-4 rounded mt-5 ' style={{ background: "linear-gradient(to right, #f1f6f8ff, #f3f3f3ff)"}}>
        <div className='text-center fs-4 fw-bold'><ul><li>Safe and Secure Payments.Easy returns.100% Authentic products 🛡️</li></ul></div>
      </div>
    </div>
  );
}
