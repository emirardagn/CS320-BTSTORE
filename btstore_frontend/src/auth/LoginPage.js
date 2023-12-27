import React, { useState } from 'react';
import './auth.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

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
      if (role == "user"){
        fetch("http://localhost:3000/users/login?username="+username+"&password="+password)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          window.location.href = '/shoppingPage';
          console.log(data);
        })
        .catch(error => {
          infoText.innerText ="Wrong username, password or may be role";
        });

      }else{
        fetch("http://localhost:3000/artist/login?username="+username+"&password="+password)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          window.location.href = '/Dashboard';
          console.log(data);
        })
        .catch(error => {
          infoText.innerText ="Wrong username, password or may be role)";
        });
      }
    }
    
  };

  const handleRole = (event) => {
    setRole(event.target.value);
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
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <div className="input-group-mb3">
              <label>
                Role:
                <input
                  type="radio"
                  value="user"
                  checked={role === 'user'}
                  onChange={handleRole}
                />
                User
              </label>
              <label>
                <input
                  type="radio"
                  value="artist"
                  checked={role === 'artist'}
                  onChange={handleRole}
                />
                Artist
              </label>
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
