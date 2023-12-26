import React, { useState } from 'react';
import './auth.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    let infoText = document.getElementById("error")
    
    //example checks
    if (password == ""){
      
      infoText.innerText ="passwords not matched";
    }

    else if (password.length <2){
      infoText.innerText ="passwords length must be at least 2";
    }

    else{
      infoText.innerText ="";
      const url = 'http://localhost:3000/artist/name/'+email;

      fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        infoText.innerText = "something went wrong, please try again.";
      });
    }
    
  };



  return (
    <div className="Login">
      <body className="Login_body">
        <div className="card">
          <div className="card-body">
            <p className="Login-h1">BT-STORE</p>
            <p className="Login-h2">Every Painting Tells a Story, Discover Yours</p>
            <p id='error' className="Login-h2-error"></p>
            <div className="input-group-mb3">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="email"
                aria-describedby="basic-addon1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group-mb3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="password"
                aria-describedby="basic-addon1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>
            {/* Login Button */}
            <button type="button" className="btn btn-primary"onClick={handleLogin}>
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
