import bcrypt from 'bcryptjs'; // Use bcryptjs for frontend compatibility

export async function signUp(name, email, password) {
  try {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { name, email, password: hashedPassword };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return 'User registered successfully';
  } catch (error) {
    console.error('Error:', error);
    return 'Account creation failed';
  }
}

export const login = async (email, password) => {
  try {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email);
    if (user && await bcrypt.compare(password, user.password)) {
      return 'Login successful';
    } else {
      return 'Invalid email or password';
    }
  } catch (error) {
    console.error('Error:', error);
    return 'Login failed';
  }
};
