import React ,{ useState }from 'react';
import './auth.css';
import { Link } from 'react-router-dom';

function SignupPage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');


  const handleSignup = async () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Password Confirm:', passwordConfirm);
  
    // Önce girdileri doğrulayın
    if (password !== passwordConfirm) {
      console.error('Passwords do not match');
      return;
    }
  
    // Kullanıcı verilerini API'ye gönderme
    try {
      const response = await fetch('/api/createUser', {  // API endpoint'inizi '/api/createUser' ile değiştirin
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,  // Şifrenin güvenli bir şekilde işlendiğinden emin olun
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('User created successfully:', data);
        // Başarılı kayıttan sonra yapılacak işlemler (örn. kullanıcıyı giriş sayfasına yönlendirme)
      } else {
        console.error('Signup failed:', data.message);
        // Hata mesajlarını kullanıcıya göster
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };
  

  return (
    <div className="Login">
      <body className="Login_body">
        <div className="card">
          <div className="card-body">
            <p className="Login-h1">SignUp</p>
            <p className="Login-h2">Every Painting Tells a Story, Discover Yours</p>
            <div className="input-group-mb3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                aria-label="name"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group-mb3">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="email"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group-mb-3">
              <input
                type="passowrd"
                className="form-control"
                placeholder="Password"
                aria-label="password"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group-mb3">
              <input
                type="password"
                className="form-control"
                placeholder="Password-confirm"
                aria-label="password-confirm"
                aria-describedby="basic-addon1"
              />
            </div>
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
