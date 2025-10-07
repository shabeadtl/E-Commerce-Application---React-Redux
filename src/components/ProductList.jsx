import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts, changeCategory } from "../redux/productSlice";
import "../components/home.css";

export default function ProductList() {
  const dispatch = useDispatch();
  const { list, status, category } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const ratingStars = (rate) => {
    let stars = "";
    for (let i = 0; i < 5; i++) {
      stars += i < Math.round(rate) ? "★" : "☆";
    }
    return stars;
  };

  const filtered = category === "all" ? list : list.filter((p) => p.category === category);

  return (
    <div style={{ margin: "45px" }}>
      <h4 className="mb-2 ms-4" style={{ marginTop: "80px" }}>
        Recommended Products
      </h4>

      <div className="mb-4 ms-4">
        <select
          value={category}
          onChange={(e) => dispatch(changeCategory(e.target.value))}
          className="form-select w-auto"
        >
          <option value="all">All</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>

      

      <div className="row g-4">
        {filtered.map((p) => (
          <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div
              className="card h-100 shadow"
              style={{
                background: "linear-gradient(to right, #e4edefff, #f3f3f3ff)",
              }}
            >
              <div className="prod">
                <img
                  src={p.image}
                  className="card-img-top p-3"
                  alt={p.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
              </div>
              <div className="card-body d-flex flex-column">
                 <div>
                    <a href="/" style={{ fontSize: "0.8em" }}>
                      Other color/patterns
                    </a>
                  </div>
                  <div className="text-muted mt-2" style={{ fontSize: "0.7em" }}>
                    Sponsored🌐
                  </div>
                <h5 className="card-title text-truncate">{p.title}</h5>
                <p className="card-text overflow-auto" style={{ maxHeight: "90px", fontSize: "0.9em" }}>
                  {p.description}
                </p>
                <div className="text-warning fw-bold
                 fs-6">
                  {ratingStars(p.rating.rate)} ({p.rating.rate})
                </div>
                 <div
                    className=" p-1 text-white fw-bold mt-2"
                    style={{
                      width: "160px",
                      borderRadius: "5px",
                      textAlign: "center",
                      fontSize: "0.8em",
                      background: "linear-gradient(to right, #f6b142ff, #f8be91ff)",
                    }}
                  >
                   BIG BILLION DAY Price!!
                  </div>
                <span className="fw-bold fs-4 mb-3 mt-2">
                  <sup>₹</sup> {p.price}
                </span>
                <button className="btn btn-sm btn-primary fs-6 p-2 fw-bold mb-4 w-75 d-block mx-auto rounded">
                  <Link to={`/ProductList/${p.id}`} style={{ color: "white", textDecoration: "none" }}>
                    View More
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
