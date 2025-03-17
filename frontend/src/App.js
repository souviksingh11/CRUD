import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>User Management</h1>
                <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/create-user" element={<CreateUser />} />
                    <Route path="/edit-user/:id" element={<EditUser />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;