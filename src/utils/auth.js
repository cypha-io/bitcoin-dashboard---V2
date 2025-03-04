import bcrypt from 'bcryptjs'; // Use bcryptjs for frontend compatibility

// Removed database connection logic as it should be handled in the backend

export async function signUp(name, email) {
  try {
    const response = await fetch('https://your-app-name.herokuapp.com/create-account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    const data = await response.json();
    if (response.ok) {
      return 'User registered successfully';
    } else {
      console.error('Server error:', data.error);
      return data.message || 'Account creation failed';
    }
  } catch (error) {
    console.error('Error:', error);
    return 'Account creation failed';
  }
}

export const login = async (username, password) => {
  // Simulate a backend call
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.username === username);
  if (user && await bcrypt.compare(password, user.password)) {
    return 'Login successful';
  } else {
    return 'Invalid username or password';
  }
};
