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

  const handleSignup = () => {
    let infoText = document.getElementById("error")
    
    //example checks
    if (password != passwordConfirm){
      
      infoText.innerText ="passwords not matched";
    }

    else if (password.length <2){
      infoText.innerText ="passwords length must be atleast 2";
    }



    else{
      infoText.innerText ="";
      const url = 'http://localhost:3000/users/create';

      const data = {
        name: name,
        surname: surname,
        username:username,
        email: email,
        password: password,
      };
  
      // Fetch API kullanarak POST isteği gönderme
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Diğer isteğe özel başlıkları buraya ekleyin (örneğin, 'Authorization' gibi)
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Post işlemi başarılı:', data);
        })
        .catch(error => {
          console.error('Hata oluştu:', error);
        });
    }
    
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
                placeholder="Password-confirm"
                aria-label="password-confirm"
                aria-describedby="basic-addon1"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>
            {/* Sign Up Button */}
            <button type="button" className="btn btn-primary" onClick={handleSignup}>
              Sign Up
            </button>
          </div>
          <div className="next_page_button">
            <text>Have an account yet?</text>
            <Link to="/Login" className="signupLink">
              Login!
            </Link>
          </div>
        </div>
      </body>
    </div>
  );
}

export default SignupPage;
