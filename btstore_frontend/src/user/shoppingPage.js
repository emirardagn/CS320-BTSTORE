import React from 'react';
import './user.css';

function ShoppingPage() {
  var symbol = /"([^"]+)"/;
  var catching = document.cookie.match(symbol);
  
  //check user is logged in
  if (catching && catching.length > 1) {
      var userID = catching[1];
  } else {
      window.location.href = '/';
  }



  return (
    <div className="shopping-container-user">
      <h2>Our Products</h2>
      {/* Ürün listesi */}
      <div className="products-list-user">
        {/* Ürünler burada listelenir */}
      </div>
    </div>
  );
}

export default ShoppingPage;
