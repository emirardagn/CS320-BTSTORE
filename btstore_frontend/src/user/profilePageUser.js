import React, { useState } from 'react';
import './user.css';

function ProfilePageUser() {
  const [username, setUsername] = useState(''); // Örnek state

  // Profil güncelleme işlemi için handleUpdate fonksiyonu
  const handleUpdate = (e) => {
    e.preventDefault();
    // Profil güncelleme işlemleri burada yapılacak
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <form onSubmit={handleUpdate}>
        {/* Kullanıcı adı giriş alanı */}
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/* Profili güncelle butonu */}
        <button type="submit" className="btn btn-primary">Update Profile</button>
      </form>
    </div>
  );
}

export default ProfilePageUser;
