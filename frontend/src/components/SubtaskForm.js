```javascript
import React, { useState } from 'react';
import axios from 'axios';

const SubtaskForm = ({ taskId }) => {
    const [subtaskName, setSubtaskName] = useState('');
    const [subtaskDescription, setSubtaskDescription] = useState('');

    const handleSubtaskNameChange = (event) => {
        setSubtaskName(event.target.value);
    };

    const handleSubtaskDescriptionChange = (event) => {
        setSubtaskDescription(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`/api/subtasks/${taskId}`, {
                name: subtaskName,
                description: subtaskDescription
            });
            if (response.status === 200) {
                setSubtaskName('');
                setSubtaskDescription('');
                alert('Subtask created successfully');
            }
        } catch (error) {
            console.error('Error creating subtask', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="subtask-name">Subtask Name:</label>
            <input
                type="text"
                id="subtask-name"
                value={subtaskName}
                onChange={handleSubtaskNameChange}
            />
            <label htmlFor="subtask-description">Subtask Description:</label>
            <textarea
                id="subtask-description"
                value={subtaskDescription}
                onChange={handleSubtaskDescriptionChange}
            />
            <button type="submit">Create Subtask</button>
        </form>
    );
};

export default SubtaskForm;
```