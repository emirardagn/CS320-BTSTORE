import React from 'react';
import './user.css';

function SingleProductPage() {
  var symbol = /"([^"]+)"/;
  var catching = document.cookie.match(symbol);
  
  //check user is logged in
  if (catching && catching.length > 1) {
      var userID = catching[1];
  } else {
      window.location.href = '/';
  }
  
  return (
    <div className="product-detail-container-user">
      <h2>Product Name</h2>
      {/* Ürün detayları */}
      <div className="product-details-user">
        {/* Ürün bilgileri burada gösterilir */}
      </div>
    </div>
  );
}

export default SingleProductPage;
