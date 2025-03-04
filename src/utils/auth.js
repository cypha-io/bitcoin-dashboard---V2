const getUsers = () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
};

const saveUsers = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
};

export function signUp(username, password) {
    const users = getUsers();
    if (users.find(user => user.username === username)) {
        return 'Username already exists';
    }
    users.push({ username, password });
    saveUsers(users);
    return 'User registered successfully';
}

export function login(username, password) {
    const users = getUsers();
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        return 'Login successful';
    }
    return 'Invalid username or password';
}
