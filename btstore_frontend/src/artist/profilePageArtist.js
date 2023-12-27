import React, { useState } from 'react';
import './ProfilePage.css';

function ProfilePage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [iban, setIban] = useState('');

    const handleUpdate = () => {
        // Handle profile update logic here
    };

    const handleDelete = () => {
        // Handle account deletion logic here
    };

    return (
        <div className="ProfilePage">
            <h1>Profile Page</h1>
            <div className="ProfileCard">
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
                <button onClick={handleUpdate}>Apply Changes</button>
                <button onClick={handleDelete} className="deleteButton">Delete Account</button>
            </div>
        </div>
    );
}

export default ProfilePage;
