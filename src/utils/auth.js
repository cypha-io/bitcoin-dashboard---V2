import bcrypt from 'bcryptjs'; // Use bcryptjs for frontend compatibility

// Removed database connection logic as it should be handled in the backend

export async function signUp(name, email) {
  try {
    const response = await fetch('/api/create-account', {
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

export const login = async (email, password) => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      return 'Login successful';
    } else {
      console.error('Server error:', data.error);
      return data.message || 'Invalid email or password';
    }
  } catch (error) {
    console.error('Error:', error);
    return 'Login failed';
  }
};
