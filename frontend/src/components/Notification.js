import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notification = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        try {
            const response = await axios.get('/api/notifications');
            setNotifications(response.data);
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
    };

    return (
        <div className="notification-container">
            {notifications.map((notification, index) => (
                <div key={index} className="notification">
                    <h4>{notification.title}</h4>
                    <p>{notification.message}</p>
                </div>
            ))}
        </div>
    );
};

export default Notification;