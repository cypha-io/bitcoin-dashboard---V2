import { useState, useEffect } from 'react';
import axios from 'axios';

const YourComponent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('/api/new-users');
            setUsers(response.data);
        };
        fetchUsers();
    }, []);

    const saveUser = async (user) => {
        await axios.post('/api/new-users', user);
        // Optionally, refetch users after saving
        const response = await axios.get('/api/new-users');
        setUsers(response.data);
    };

    // ...existing code...
};
