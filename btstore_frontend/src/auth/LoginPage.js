import React from 'react';
import './auth.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="Login">
      <body className="Login_body">
        <div className="card">
          <div className="card-body">
            <p className="Login-h1">BT-STORE</p>
            <p className="Login-h2">Every Painting Tells a Story, Discover Yours</p>
            <div className="input-group-mb3">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group-mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </div>
            {/* Login Button */}
            <button type="button" className="btn btn-primary">
              Login
            </button>
          </div>
          <div className="next_page_button">
            <text>Doesn't have an account yet?</text>
            <Link to="/createNewUser" className="signupLink">
              SignUp
            </Link>
          </div>
        </div>
      </body>
    </div>
  );
}

export default LoginPage;
