import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchProjects();
        fetchTasks();
    }, []);

    const fetchProjects = async () => {
        const response = await axios.get('/api/projects');
        setProjects(response.data);
    };

    const fetchTasks = async () => {
        const response = await axios.get('/api/tasks');
        setTasks(response.data);
    };

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="project-summary">
                <h3>Projects</h3>
                {projects.map(project => (
                    <div key={project._id} className="project-card">
                        <h4>{project.name}</h4>
                        <p>Deadline: {new Date(project.deadline).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
            <div className="task-summary">
                <h3>Tasks</h3>
                {tasks.map(task => (
                    <div key={task._id} className="task-card">
                        <h4>{task.title}</h4>
                        <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;