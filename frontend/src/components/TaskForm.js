```javascript
import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/tasks', {
                taskName,
                taskDescription,
                assignedTo,
                dueDate
            });
            if (response.data.success) {
                setTaskName('');
                setTaskDescription('');
                setAssignedTo('');
                setDueDate('');
                alert('Task created successfully');
            } else {
                alert('Failed to create task');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Task Name:
                <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
            </label>
            <label>
                Task Description:
                <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} required />
            </label>
            <label>
                Assigned To:
                <input type="text" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} required />
            </label>
            <label>
                Due Date:
                <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
            </label>
            <button type="submit">Create Task</button>
        </form>
    );
};

export default TaskForm;
```