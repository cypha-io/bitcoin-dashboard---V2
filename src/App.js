import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import CreateAccount from './pages/CreateAccount.js';
import Dashboard from './pages/Dashboard.js';
import Support from './pages/Support.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import Learn from './pages/Learn.js';
import Research from './pages/Research.js';
import News from './pages/News.js';
import BuyBitcoin from './pages/BuyBitcoin.js';
import UserDashboard from './pages/UserDashboard.js';
import Modal from './components/Modal.js';
import Login from './pages/Login.js';
import { AuthProvider, useAuth } from './contexts/AuthContext.js';
import { FaTimes } from 'react-icons/fa';

function PrivateRoute({ children, setWarning }) {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        setWarning('You must be logged in to access the dashboard.');
        return <Navigate to="/" state={{ from: location }} />;
    }

    return children;
}

function App() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isCreateAccountOpen, setIsCreateAccountOpen] = useState(false);
    const [notification, setNotification] = useState('');
    const [notificationDone, setNotificationDone] = useState(false);

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
        <AuthProvider>
            <Router>
                <div className="App">
                    <title>BitVest</title>
                    <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" />
                    {notification && (
                        <div className={`Notification-popup ${notificationDone ? 'done' : ''}`}>
                            <div className="Loader"></div>
                            <span>{notification}</span>
                            <button className="Close-notification" onClick={() => setNotification('')}><FaTimes /></button>
                        </div>
                    )}
                    <Routes>
                        <Route path="/" element={<Dashboard setIsLoginOpen={setIsLoginOpen} setIsCreateAccountOpen={setIsCreateAccountOpen} setNotification={setNotification} />} />
                        <Route path="/support" element={<Support />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/learn" element={<Learn />} />
                        <Route path="/research" element={<Research />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/buy-bitcoin" element={<BuyBitcoin />} />
                        <Route path="/signup" element={<CreateAccount setNotification={setNotification} />} />
                        <Route path="/user-dashboard" element={
                            <PrivateRoute setWarning={setNotification}>
                                <UserDashboard />
                            </PrivateRoute>
                        } />
                    </Routes>
                    <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
                        <Login onClose={() => setIsLoginOpen(false)} setNotification={setNotification} />
                    </Modal>
                    <Modal isOpen={isCreateAccountOpen} onClose={() => setIsCreateAccountOpen(false)}>
                        <CreateAccount onClose={() => setIsCreateAccountOpen(false)} setNotification={setNotification} />
                    </Modal>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
