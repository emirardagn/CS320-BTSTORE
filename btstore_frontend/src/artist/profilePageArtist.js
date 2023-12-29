import React, { useState } from 'react';
import './ProfilePage.css';

function ProfilePage() {
    var symbol = /"([^"]+)"/;
    var catching = document.cookie.match(symbol);
    
    //check artist is logged in
    if (catching && catching.length > 1) {
        var artistID = catching[1];
        
    } else {
        window.location.href = '/';
    }

    fetch("http://localhost:3000/artist/id/"+artistID)
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
        document.getElementById("password").placeholder =data.password;
        document.getElementById("password-again").placeholder =data.password;

        document.getElementById("surname").value =data.surname;
        document.getElementById("username").value =data.username;
        document.getElementById("name").value =data.name;
        document.getElementById("password").value =data.password;
        document.getElementById("password-again").value =data.password;
    })
    .catch(error => {
      document.getElementById("infoText").innerText ="Wrong username, password or may be role";
    });

    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleUpdate = () => {
        // Handle profile update logic here
    };

    const handleDelete = () => {
        const url = 'http://localhost:3000/artist/delete/'+artistID;
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
        <div className="ProfilePage-artist">
            <div className='nav'>
                <a href='/dashboard'>Dashboard</a>
                <a href='/profilePageArtist'>My Profile</a>
                <a href='/productPage'>My Paintings</a>
                <a href='/createNewProduct'>Sell New Paintings</a>
            </div>

            <div className="ProfileCard-artist">
                                <h1>Edit Your Informations</h1>
                <h5 id='infoText'>Please just touch the informations that you want to change, keep the others same</h5>
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
                <button className='button-artist' onClick={handleUpdate}>Apply Changes</button>
                <button onClick={handleDelete} className="deleteButton-artist">Delete Account</button>
            </div>
        </div>
    );
}

export default ProfilePage;
