import React, { useState } from 'react';
import './auth.css';
import { Link } from 'react-router-dom';

function SignupPage() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [role, setRole] = useState('user');
  const handleSignup = () => {
    let infoText = document.getElementById("error")
    
    //example checks
    if (password != passwordConfirm){
      
      infoText.innerText ="passwords not matched";
    }

    else if (password.length <2){
      infoText.innerText ="passwords length must be at least 2";
    }


    else{
      infoText.innerText ="";
      if (role == "user"){
        fetch("http://localhost:3000/users/create", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            surname: surname,
            username: username,
            email: email,
            password: password,
          }),
        })
          .then(response => response.json())
          .then(data => {
            infoText.innerText ="done!";
          })
          .catch(error => {
            infoText.innerText ="something went wrong, please try again.";
          });
      }else{
        fetch("http://localhost:3000/artist/create", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            surname: surname,
            username: username,
            email: email,
            password: password,
          }),
        })
          .then(response => response.json())
          .then(data => {
            infoText.innerText ="done!";
          })
          .catch(error => {
            infoText.innerText ="something went wrong, please try again.";
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
            <p className="Login-h1">SignUp</p>
            <p className="Login-h2">Every Painting Tells a Story, Discover Yours</p>
            <p id='error' className="Login-h2-error"></p>
            <div className="input-group-mb3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                aria-label="name"
                aria-describedby="basic-addon1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-group-mb3">
              <input
                type="text"
                className="form-control"
                placeholder="Surname"
                aria-label="Surname"
                aria-describedby="basic-addon1"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>

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
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="email"
                aria-describedby="basic-addon1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>
            <div className="input-group-mb-3">
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
              <input
                type="password"
                className="form-control"
                placeholder="Password Confirm"
                aria-label="password-confirm"
                aria-describedby="basic-addon1"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
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
            {/* Sign Up Button */}
            <button type="button" className="btn btn-primary" onClick={handleSignup}>
              Sign Up
            </button>
          </div>
          <div className="next_page_button">
            <text>Have an account yet?</text>
            <Link to="/" className="signupLink">
              Login!
            </Link>
          </div>
        </div>
      </body>
    </div>
  );
}

export default SignupPage;
