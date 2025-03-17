import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/users');
                setUsers(response.data.user);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (userId) => {
        try {
            await axios.delete(`http://localhost:8000/api/users/${userId}`);
            setUsers(users.filter((user) => user._id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div>
            <h2>User List</h2>
            <Link to="/create-user">
                <button>Create New User</button>
            </Link>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        {user.name} - {user.email}
                        <Link to={`/edit-user/${user._id}`}>
                            <button>Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(user._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;