import React, { useState } from 'react';
import './Dashboard.css';
import { FaSignInAlt, FaLifeRing, FaEnvelope, FaInfoCircle, FaUserPlus, FaBook, FaSearch, FaNewspaper, FaBitcoin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import Login from './Login';
import CreateAccount from './CreateAccount';

function Dashboard() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isCreateAccountOpen, setIsCreateAccountOpen] = useState(false);

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
                        <li><Link to="/learn" className="Sidebar-button"><FaBook /> Learn</Link></li>
                        <li><Link to="/research" className="Sidebar-button"><FaSearch /> Research</Link></li>
                        <li><Link to="/news" className="Sidebar-button"><FaNewspaper /> News</Link></li>
                        <li><Link to="/support" className="Sidebar-button"><FaLifeRing /> Support</Link></li>
                        <li><Link to="/contact" className="Sidebar-button"><FaEnvelope /> Contact</Link></li>
                        <li><Link to="/about" className="Sidebar-button"><FaInfoCircle /> About</Link></li>
                    </ul>
                </aside>
                <section className="Content">
                    <div className="Background-image">
                        <img src="/earnbitcoin.webp" alt="Earn Bitcoin" className="Cartoon-image" />
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
