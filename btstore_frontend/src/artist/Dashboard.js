import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
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
        document.getElementById("username").innerText ="Welcome, @"+data.username;
    })
    .catch(error => {
      document.getElementById("infoText").innerText ="Wrong username, password or may be role";
    });


    const logoutHandler = () => {
        document.cookie = null;
        window.location.href = '/';
    }

    return (
        <div className="Dashboard-artist">
            <aside className="Sidebar-artist">
                <nav>
                    <h1 className='btstoreDashboard'>BT-STORE</h1>
                    <ul>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/profilePageArtist">My Profile</Link></li>
                        <li><Link to="/productPage">My Paintings</Link></li>
                        <li><Link to="/createNewProduct">Sell New Paintings</Link></li>
                        <li className='logoutbtn'><button onClick={logoutHandler}>Log out</button></li>
                    </ul>
                </nav>
            </aside>
            <section className="Content-artist">
                <h1 className='welcomeDashboard'id='username'></h1>
            </section>
        </div>
    );
}

export default Dashboard;