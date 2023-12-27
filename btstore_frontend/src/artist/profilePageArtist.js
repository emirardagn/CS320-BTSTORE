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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [iban, setIban] = useState('');

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
            <h1>Profile Page</h1>
            <div className="ProfileCard-artist">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="IBAN"
                    value={iban}
                    onChange={(e) => setIban(e.target.value)}
                />
                <button className='button-artist' onClick={handleUpdate}>Apply Changes</button>
                <button onClick={handleDelete} className="deleteButton-artist">Delete Account</button>
            </div>
        </div>
    );
}

export default ProfilePage;
