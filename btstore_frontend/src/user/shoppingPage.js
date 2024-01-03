import React, { useState, useEffect } from 'react';
import './user.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function ShoppingPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [productName, setProductName] = useState('');
  var symbol = /"([^"]+)"/;
  var catching = document.cookie.match(symbol);
  if (catching && catching.length > 1) {
    var productId = catching[1];
  } else {
    window.location.href = '/';
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/painting');
        if (!response.ok) {
          throw new Error('Error fetching products');
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // İlk başta tüm ürünleri göster
      } catch (error) {
        console.error(error);
      }
    };

    if (catching && catching.length > 1) {
      var userID = catching[1];
    } else {
      window.location.href = '/';
    }

    fetchData();
  }, []);

  const filterProducts = () => {
    // Fiyat ve isme göre filtreleme yap
    const filtered = products.filter(
      (product) =>
        (!minPrice || parseInt(product.price) >= parseInt(minPrice)) &&
        (!maxPrice || parseInt(product.price) <= parseInt(maxPrice)) &&
        (!productName ||
          product.name.toLowerCase().includes(productName.toLowerCase()))
    );
    setFilteredProducts(filtered);
  };

  const handleFilterClick = () => {
    // Filtreleme işlemini başlat
    filterProducts();
  };
  const logoutHandler = () => {
    document.cookie = null;
    window.location.href = '/';
}
  return (
    
    <div className="shopping-container-user">
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
      <h2>Paintings</h2>
      <div>
        <label>Min Price:</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Max Price:</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <button onClick={handleFilterClick}>Apply Filter</button>
      <div className="products-list-user">
        {filteredProducts.map((product) => (
          <Link to="/singleProductPage" state={{ product }} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="product-card-user">
              <img className="paintingsURL" src={product.url} alt="null" />
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p>{product.price} TL</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ShoppingPage;