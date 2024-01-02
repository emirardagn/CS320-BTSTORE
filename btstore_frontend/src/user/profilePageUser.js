import React, { useState, useEffect } from 'react';
import './user.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function ProfilePageUser() {


  var symbol = /"([^"]+)"/;
  var catching = document.cookie.match(symbol);
  
  //check user is logged in
  if (catching && catching.length > 1) {
      var userID = catching[1];
  } else {
      window.location.href = '/';
  }

  const [username, setUsername] = useState(''); // Örnek state

  // Profil güncelleme işlemi için handleUpdate fonksiyonu
  const handleUpdate = (e) => {
    e.preventDefault();
    // Profil güncelleme işlemleri burada yapılacak
  };
  const logoutHandler = () => {
    document.cookie = null;
    window.location.href = '/';
  }
  return (
    <div className="profile-container-user">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand style={{padding:'20px'}}><Link to="/shoppingPage">Shop</Link></Navbar.Brand>
            <Nav.Link style={{ textDecoration: 'none', color: 'inherit' }}><Link to="/orderPage"  style={{ textDecoration: 'none', color: 'inherit' }}>My Orders</Link></Nav.Link>
            <Nav.Link style={{ textDecoration: 'none', color: 'inherit' }}><Link to="/profilePageUser"  style={{ textDecoration: 'none', color: 'inherit' }}>Profile</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <h2>User Profile</h2>
      <form onSubmit={handleUpdate}>
        {/* Kullanıcı adı giriş alanı */}
        <div className="form-group-user">
          <label>Username</label>
          <input
            type="text"
            className="form-control-user"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/* Profili güncelle butonu */}
        <button type="submit" className="btn btn-primary-user">Update Profile</button>
      </form>
      <button  className="btn btn-primary-user" style={{marginTop: 10}} onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default ProfilePageUser;