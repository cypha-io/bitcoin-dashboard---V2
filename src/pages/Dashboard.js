import React, { useState } from 'react';
import './Dashboard.css';
import { FaSignInAlt, FaUserPlus, FaBitcoin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import Login from './Login';
import CreateAccount from './CreateAccount';

function Dashboard() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isCreateAccountOpen, setIsCreateAccountOpen] = useState(false);

    console.log("Image path:", `${process.env.PUBLIC_URL}/earnbitcouin.webp`);

    return (
        <div className="Dashboard">
            <div className="Main">
                <aside className="Sidebar">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Bitcoin Logo" className="Bitcoin-logo" />
                    <div className="Faint-line"></div>
                    <ul>
                        <li><Link to="#" className="Sidebar-button login-link" onClick={() => setIsLoginOpen(true)}><FaSignInAlt /> Login</Link></li>
                        <li><Link to="#" className="Sidebar-button signup-link" onClick={() => setIsCreateAccountOpen(true)}><FaUserPlus /> Signup</Link></li>
                        <li><Link to="/buy-bitcoin" className="Sidebar-button"><FaBitcoin /> Buy Bitcoin</Link></li>
                    </ul>
                </aside>
                <section className="Content">
                    <div className="Background-image">
                        <img src={`${process.env.PUBLIC_URL}/earnbitcoin.webp`} alt="Maps" className="EarnBitcoin-image" onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150"; }} />
                    </div>
                </section>
            </div>
            <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
                <Login />
            </Modal>
            <Modal isOpen={isCreateAccountOpen} onClose={() => setIsCreateAccountOpen(false)}>
                <CreateAccount />
            </Modal>
        </div>
    );
}

export default Dashboard;
