```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await axios.get('/api/projects');
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    return (
        <div className="project-list">
            <h2>Projects</h2>
            {projects.length > 0 ? (
                <ul>
                    {projects.map((project) => (
                        <li key={project._id}>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No projects found.</p>
            )}
        </div>
    );
};

export default ProjectList;
```