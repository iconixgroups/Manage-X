```javascript
import React, { useState } from 'react';
import axios from 'axios';

const ProjectForm = () => {
    const [projectName, setProjectName] = useState('');
    const [teamMembers, setTeamMembers] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/projects', {
                name: projectName,
                teamMembers: teamMembers.split(',').map(member => member.trim()),
                deadline
            });
            if (response.data.success) {
                setProjectName('');
                setTeamMembers('');
                setDeadline('');
                alert('Project created successfully');
            } else {
                alert('Failed to create project');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Project Name:
                <input type="text" value={projectName} onChange={e => setProjectName(e.target.value)} required />
            </label>
            <label>
                Team Members (comma separated):
                <input type="text" value={teamMembers} onChange={e => setTeamMembers(e.target.value)} required />
            </label>
            <label>
                Deadline:
                <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} required />
            </label>
            <button type="submit">Create Project</button>
        </form>
    );
};

export default ProjectForm;
```