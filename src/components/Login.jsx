import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, loginFailure } from "../redux/authSlice";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.auth.error);

  const handleLogin = (e) => {
    e.preventDefault();

    
    const Email = "shabeeb@gmail.com";
    const Password = "shabeeb@upcode";

    if (email === Email && password === Password) {
      const user = { email };
      localStorage.setItem("user", JSON.stringify(user)); 
      dispatch(loginSuccess(user));
      navigate("/");
    } else {
      dispatch(loginFailure("Invalid email or password ❌"));
    }
  };

  return (
    <div className="container" style={{ marginTop: "120px", maxWidth: "400px" }}>
      <h3 className="text-center mb-4">Login</h3>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>

        {error && <p className="text-danger">{error}</p>}

        <button type="submit" className="btn btn-success w-100">
          Login
        </button>
      </form>

      <p className="mt-3 text-center">
        Don’t have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
}
