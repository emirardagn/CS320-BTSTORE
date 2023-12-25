import React from 'react';
import './auth.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
});

const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
};

const handleLogin = (event) => {
    event.preventDefault();

    // API'ye giriş isteği gönderme
    fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: loginData.email,
            password: loginData.password
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Giriş işlemi başarılıysa burada işleyin
    })
    .catch(error => {
        console.error('Error:', error);
    });
};

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
