import React, { useState } from 'react';
import './user.css';

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

  return (
    <div className="profile-container-user">
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
    </div>
  );
}

export default ProfilePageUser;
