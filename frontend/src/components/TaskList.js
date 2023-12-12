```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('/api/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    return (
        <div className="task-list">
            <h2>Tasks</h2>
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <div key={task._id} className="task-item">
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Assigned to: {task.assignedTo}</p>
                        <p>Status: {task.status}</p>
                        <p>Deadline: {task.deadline}</p>
                    </div>
                ))
            ) : (
                <p>No tasks found</p>
            )}
        </div>
    );
};

export default TaskList;
```