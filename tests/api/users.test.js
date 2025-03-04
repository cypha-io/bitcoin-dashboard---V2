import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/users';

const testUser = {
    name: 'Test User',
    email: 'test.user@example.com'
};

const testApi = async () => {
    try {
        // Test POST request to save a user
        const postResponse = await axios.post(apiUrl, testUser);
        console.log('POST response:', postResponse.data);

        // Test GET request to fetch users
        const getResponse = await axios.get(apiUrl);
        console.log('GET response:', getResponse.data);

        // Verify the user is saved
        const savedUser = getResponse.data.find(user => user.email === testUser.email);
        if (savedUser) {
            console.log('User saved successfully:', savedUser);
        } else {
            console.error('User not found in the database');
        }
    } catch (error) {
        console.error('API test failed:', error);
    }
};

testApi();
