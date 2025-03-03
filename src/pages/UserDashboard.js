import React from 'react';
import './UserDashboard.css';
import { FaMoneyBillWave, FaBalanceScale, FaExchangeAlt, FaWallet, FaHome, FaSignOutAlt, FaChartLine, FaBell, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function UserDashboard() {
    const data = [
        { name: 'Jan', investment: 10000, balance: 10500 },
        { name: 'Feb', investment: 10000, balance: 11000 },
        { name: 'Mar', investment: 10000, balance: 11500 },
        { name: 'Apr', investment: 10000, balance: 12000 },
        { name: 'May', investment: 10000, balance: 12500 },
    ];

    return (
        <div className="UserDashboard">
            <div className="Main">
                <aside className="Sidebar">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Bitcoin Logo" className="Bitcoin-logo" />
                    <div className="Faint-line"></div>
                    <ul>
                        <li><Link to="/" className="Sidebar-button"><FaHome /> Home</Link></li>
                        <li><Link to="/settings" className="Sidebar-button"><FaCog /> Settings</Link></li>
                        <li><Link to="/logout" className="Sidebar-button"><FaSignOutAlt /> Logout</Link></li>
                    </ul>
                </aside>
                <section className="Content">
                    <div className="Header">
                        <h1>Welcome to Your Dashboard</h1>
                        <div className="Notifications">
                            <FaBell className="Notification-icon" />
                            <span className="Notification-count">3</span>
                        </div>
                    </div>
                    <div className="Cards">
                        <div className="Card">
                            <FaMoneyBillWave className="Card-icon" />
                            <h3>Amount Invested</h3>
                            <p>$10,000</p>
                        </div>
                        <div className="Card">
                            <FaBalanceScale className="Card-icon" />
                            <h3>Current Balance</h3>
                            <p>$12,500</p>
                        </div>
                        <div className="Card">
                            <FaExchangeAlt className="Card-icon" />
                            <h3>Transactions</h3>
                            <p>15</p>
                        </div>
                        <div className="Card">
                            <FaWallet className="Card-icon" />
                            <h3>Bitcoin Balance</h3>
                            <p>0.5 BTC</p>
                        </div>
                    </div>
                    <div className="Chart">
                        <h2>Investment Growth</h2>
                        <FaChartLine className="Chart-icon" />
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="balance" stroke="#f7931a" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default UserDashboard;
