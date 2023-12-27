import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
    return (
        <div className="Dashboard-artist">
            <aside className="Sidebar-artist">
                <nav>
                    <ul>
                        <li><Link to="/productPage">Product Page</Link></li>
                        <li><Link to="/createNewProduct">Create New Product</Link></li>
                        <li><Link to="/profilePageArtist">Profile Page</Link></li>
                    </ul>
                </nav>
            </aside>
            <section className="Content-artist">
                {/* Content goes here */}
                <h1>Welcome to your Dashboard</h1>
            </section>
        </div>
    );
}

export default Dashboard;