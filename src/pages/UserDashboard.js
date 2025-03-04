import React, { useState, useEffect } from 'react';
import './UserDashboard.css';
import { FaMoneyBillWave, FaBalanceScale, FaExchangeAlt, FaWallet, FaHome, FaSignOutAlt, FaChartLine, FaBell, FaCog, FaBitcoin, FaTimes, FaCheck, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function UserDashboard() {
    const [data, setData] = useState([
        { name: 'Jan', investment: 0, balance: 0 },
        { name: 'Feb', investment: 0, balance: 0 },
        { name: 'Mar', investment: 0, balance: 0 },
        { name: 'Apr', investment: 0, balance: 0 },
        { name: 'May', investment: 0, balance: 0 },
    ]);

    const [amountInvested, setAmountInvested] = useState(0);
    const [currentBalance, setCurrentBalance] = useState(0);
    const [transactions, setTransactions] = useState(0);
    const [bitcoinBalance, setBitcoinBalance] = useState(0.0);
    const [showPopup, setShowPopup] = useState(false);
    const [walletDetails, setWalletDetails] = useState('bc1p3dkxtw8z8dqsu7rcxm0qrpnc6cx2rkpmw37tplpwktvjkf6k53ns46afze');
    const [notification, setNotification] = useState('');
    const [notificationDone, setNotificationDone] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [warning, setWarning] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            // Simulate real-time data update
            const newBalance = amountInvested * bitcoinBalance;
            setCurrentBalance(newBalance);
            setData(prevData => prevData.map((item, index) => {
                if (index === prevData.length - 1) {
                    return { ...item, balance: newBalance };
                }
                return item;
            }));
        }, 5000);

        return () => clearInterval(interval);
    }, [currentBalance]);

    const handleBuyBitcoinClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleAlreadySentClick = () => {
        if (!termsAccepted) {
            setWarning('You must accept the terms and conditions.');
            return;
        }
        setNotification('Thank you! We will verify your transaction shortly.');
        setShowPopup(false);
    };

    const handleWalletClick = () => {
        navigator.clipboard.writeText(walletDetails);
        setNotification('Wallet address copied to clipboard!');
    };

    const handleTermsChange = (e) => {
        setTermsAccepted(e.target.checked);
        if (e.target.checked) {
            setWarning('');
        }
    };

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                setNotificationDone(true);
                const doneTimer = setTimeout(() => {
                    setNotification('');
                    setNotificationDone(false);
                }, 1000);
                return () => clearTimeout(doneTimer);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    return (
        <div className="UserDashboard">
            <div className="Main">
                <aside className="Sidebar">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Bitcoin Logo" className="Bitcoin-logo" />
                    <div className="Faint-line"></div>
                    <ul>
                        <li><Link to="/" className="Sidebar-button"><FaHome /> Home</Link></li>
                        <li><button onClick={handleBuyBitcoinClick} className="Sidebar-button"><FaBitcoin /> Buy Bitcoin</button></li>
                        <li><Link to="/logout" className="Sidebar-button"><FaSignOutAlt /> Logout</Link></li>
                    </ul>
                </aside>
                <section className="Content">
                    <div className="Header">
                        <h1>Welcome to Your BitVest Dashboard</h1>
                        <div className="Notifications">
                            <FaBell className="Notification-icon" />
                            <span className="Notification-count">3</span>
                        </div>
                    </div>
                    <div className="Cards">
                        <div className="Card">
                            <FaMoneyBillWave className="Card-icon" />
                            <h3>Amount Invested</h3>
                            <p>${amountInvested.toFixed(2)}</p>
                        </div>
                        <div className="Card">
                            <FaBalanceScale className="Card-icon" />
                            <h3>Current Balance</h3>
                            <p>${currentBalance.toFixed(2)}</p>
                        </div>
                        <div className="Card">
                            <FaExchangeAlt className="Card-icon" />
                            <h3>Transactions</h3>
                            <p>{transactions}</p>
                        </div>
                        <div className="Card">
                            <FaWallet className="Card-icon" />
                            <h3>Bitcoin Balance</h3>
                            <p>{bitcoinBalance} BTC</p>
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
            {showPopup && (
                <div className="Popup">
                    <div className="Popup-content">
                        <h2>Buy Bitcoin</h2>
                        <p>Send Bitcoin to the following wallet address:</p>
                        <p className="Wallet-details" onClick={handleWalletClick} style={{ cursor: 'pointer' }}>{walletDetails}</p>
                        <div className="Terms">
                            <input type="checkbox" id="terms" onChange={handleTermsChange} />
                            <label htmlFor="terms">I agree to the terms and conditions</label>
                        </div>
                        {warning && <p className="Warning">{warning}</p>}
                        <div className="Popup-buttons">
                            <button onClick={handleClosePopup} className="Close-button"><FaTimes /> Close</button>
                            <button onClick={handleAlreadySentClick} className="AlreadySent-button"><FaCheck /> Already Sent</button>
                        </div>
                    </div>
                </div>
            )}
            {notification && (
                <div className={`Notification-popup ${notificationDone ? 'done' : ''}`}>
                    <div className="Loader"></div>
                    <span>{notification}</span>
                    <button className="Close-notification" onClick={() => setNotification('')}><FaTimes /></button>
                </div>
            )}
        </div>
    );
}

export default UserDashboard;
