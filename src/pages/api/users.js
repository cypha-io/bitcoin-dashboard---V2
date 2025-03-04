import { saveUser, getUsers } from '../../api/neon';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const user = req.body;
        await saveUser(user);
        res.status(200).json({ message: 'User saved successfully' });
    } else if (req.method === 'GET') {
        const users = await getUsers();
        res.status(200).json(users);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
