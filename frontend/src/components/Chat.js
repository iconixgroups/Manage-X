import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        // Fetch messages from API
        axios.get('/api/comments')
            .then(response => {
                setMessages(response.data);
            })
            .catch(error => {
                console.error('Error fetching comments', error);
            });
    }, []);

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        // Send message to API
        axios.post('/api/comments', { text: newMessage })
            .then(response => {
                // Add new message to local state
                setMessages([...messages, response.data]);
                setNewMessage('');
            })
            .catch(error => {
                console.error('Error sending comment', error);
            });
    };

    return (
        <div className="chat">
            <div className="messages">
                {messages.map((message, index) => (
                    <div key={index} className="message">
                        <div className="message-user">{message.user}</div>
                        <div className="message-text">{message.text}</div>
                    </div>
                ))}
            </div>
            <div className="new-message">
                <input
                    value={newMessage}
                    onChange={handleNewMessageChange}
                    placeholder="Type your message here..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;