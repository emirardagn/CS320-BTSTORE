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

  fetch("http://localhost:3000/user/id/"+userID)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
      document.getElementById("name").placeholder =data.name;
      document.getElementById("surname").placeholder =data.surname;
      document.getElementById("username").placeholder =data.username;
      document.getElementById("password").placeholder ="******";
      document.getElementById("password-again").placeholder ="******";
  })
  .catch(error => {
    document.getElementById("infoText").innerText ="Wrong username, password or may be role";
  });

  const logoutHandler = () => {
    document.cookie = null;
    window.location.href = '/';
}
  let infoText = document.getElementById("infoText")
  const [username, setUsername] = useState('');
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleUpdate = () => {
      if (password != passwordConfirm) {
          infoText.innerText = "Passwords do not match";
        } else if (password.length < 8) {
          infoText.innerText = "Password length must be at least 8 characters";
        } else if (name.trim() === "") {
          infoText.innerText = "Name cannot be empty, if you don't want to change, write same";
        } else if (surname.trim() === "") {
          infoText.innerText = "Surname cannot be empty,if you don't want to change, write same";
        } else if (username.trim() === "") {
          infoText.innerText = "Username cannot be empty,if you don't want to change, write same";
        }else{
          fetch("http://localhost:3000/user/update/"+userID, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          surname: surname,
          username: username,
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

  };

  const handleDelete = () => {
      const url = 'http://localhost:3000/user/delete/'+userID;
      console.log(url);
      fetch(url, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      },
      })
      .then(response => {
          if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          document.cookie = null;
          window.location.href = '/';
      })
      .catch(error => {
          document.cookie = null;
          window.location.href = '/';
      });
  };


return (
  <div>
      <div className="ProfilePage-user">
        <aside className="Sidebar-user">
            <nav>
                <h1 className='btstoreDashboard'>BT-STORE</h1>
                <ul>
                    <li><a href='/shoppingPage'>Shopping</a></li>
                    <li><a href='/profilePageUser'>My Profile</a></li>
                    <li><a href='/singleProductPage'>Single Product</a></li>
                    <li><a href='/orderPage'>Order</a></li>
                    <li><a href='/paymentPage'>Payment</a></li>
                    <li className='logoutbtn' onClick={logoutHandler}><button>Log out</button></li>
                </ul>
            </nav>
        </aside>
        <section className="Content-user">
        <div className="ProfilePage-user">
        <div className="ProfileCard-user">
            <h2>Edit Your Informations</h2>
            <h5 id='infoText'>Please fill all the informations that you want to change, keep the others same</h5>
            <text>Name</text>
            <input
            className='inputs'
                id='name'
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <text>Surname</text>
            <input
            className='inputs'
                id='surname'
                type="text"
                placeholder="Surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
            />
            <text>Username</text>
            <input
            className='inputs'
                id='username'
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <text>Password</text>
            <input
            className='inputs'
                id='password'
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <text>Confirm Password</text>
            <input
            className='inputs'
                id='password-again'
                type="password"
                placeholder="Confirm Password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <button className='button-user' onClick={handleUpdate}>Apply Changes</button>
            <button onClick={handleDelete} className="deleteButton-artist">Delete Account</button>
        </div>
    </div>
        </section>
    </div>

    
    </div>
);
}

export default ProfilePage;
