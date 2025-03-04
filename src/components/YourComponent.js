import { useState, useEffect } from 'react';
import axios from 'axios';

const YourComponent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('/api/users');
            setUsers(response.data);
        };
        fetchUsers();
    }, []);

    const saveUser = async (user) => {
        await axios.post('/api/users', user);
        // Optionally, refetch users after saving
        const response = await axios.get('/api/users');
        setUsers(response.data);
    };

    // ...existing code...
};
