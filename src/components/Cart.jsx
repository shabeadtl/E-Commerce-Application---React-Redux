
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartItems,
  selectCartCount,
  selectCartTotal,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart
} from '../redux/cartSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const count = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);

  return (
    <div style={{ marginTop: '100px' }}>
      <div className="container mt-4">
        <h4>My Cart 🛒 ({count})</h4>

        {items.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          items.map(item => (
            <div key={item.id} className="border p-2 mb-2 d-flex align-items-center">
              <img src={item.image} alt={item.title} width="70" className="me-3" />
              <div style={{ flex: 1 }}>
                <h6>{item.title}</h6>
                <p className="mb-0 fw-bold fs-5">₹ {item.price}</p>
                <div className="d-flex align-items-center mt-2">
                  <button className="btn btn-sm btn-outline-secondary me-2"
                    onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                  <div className="px-2">{item.quantity || 1}</div>
                  <button className="btn btn-sm btn-outline-secondary ms-2 me-3"
                    onClick={() => dispatch(increaseQuantity(item.id))}>+</button>

                  <button className="btn btn-sm btn-danger"
                    onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {items.length > 0 && (
        <div className="container mt-3">
          <div className="d-flex justify-content-between align-items-center p-3 border rounded">
            <div>
              <div className="fw-bold">Total Items: {count}</div>
              <div className="fw-bold">Total Price: ₹ {total.toFixed(2)}</div>
            </div>
            <div>
              <button className="btn btn-outline-danger me-2" onClick={() => dispatch(clearCart())}>
                Clear Cart
              </button>
              <button className="btn btn-danger">BUY ALL</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
