import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Dashboard from './pages/Dashboard';
import Support from './pages/Support';
import Contact from './pages/Contact';
import About from './pages/About';
import Signup from './pages/Signup';
import Learn from './pages/Learn';
import Research from './pages/Research';
import News from './pages/News';
import BuyBitcoin from './pages/BuyBitcoin';
import Modal from './components/Modal';

function App() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isCreateAccountOpen, setIsCreateAccountOpen] = useState(false);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/learn" element={<Learn />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/buy-bitcoin" element={<BuyBitcoin />} />
                </Routes>
                <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
                    <Login />
                </Modal>
                <Modal isOpen={isCreateAccountOpen} onClose={() => setIsCreateAccountOpen(false)}>
                    <CreateAccount />
                </Modal>
            </div>
        </Router>
    );
}

export default App;
