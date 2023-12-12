import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">ManageX</Link>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/tasks">Tasks</Link>
                    <Link to="/kanban">Kanban Board</Link>
                    <Link to="/chat">Chat</Link>
                    <Link to="/notifications">Notifications</Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link to="/register" className="button is-primary">Register</Link>
                            <Link to="/login" className="button is-light">Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;