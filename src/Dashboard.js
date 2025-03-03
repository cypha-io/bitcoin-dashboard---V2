import React from 'react';
import './Dashboard.css';

function Dashboard() {
    return (
        <div className="Dashboard">
            <nav className="Navbar">
                <h2>Navbar</h2>
            </nav>
            <div className="Main">
                <aside className="Sidebar">
                    <h3>Sidebar</h3>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </aside>
                <section className="Content">
                    <h3>Main Content</h3>
                    <p>Welcome to the dashboard!</p>
                </section>
            </div>
        </div>
    );
}

export default Dashboard;
