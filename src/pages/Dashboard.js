import React, { useState } from 'react';
import './Dashboard.css';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal.js';
import Login from './Login.js';
import CreateAccount from './CreateAccount.js';

function Dashboard({ setNotification }) {
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
                    </ul>
                </aside>
                <section className="Content">
                    <div className="Background-image">
                        <img src={`${process.env.PUBLIC_URL}/earnbitcoin.webp`} alt="Maps" className="EarnBitcoin-image" onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150"; }} />
                    </div>
                </section>
            </div>
            <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
                <Login onClose={() => setIsLoginOpen(false)} setNotification={setNotification} />
            </Modal>
            <Modal isOpen={isCreateAccountOpen} onClose={() => setIsCreateAccountOpen(false)}>
                <CreateAccount onClose={() => setIsCreateAccountOpen(false)} setNotification={setNotification} />
            </Modal>
        </div>
    );
}

export default Dashboard;
