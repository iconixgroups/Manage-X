```javascript
const request = require('supertest');
const app = require('../server');
const Project = require('../models/Project');

describe('Project Management', () => {
  let projectId;

  beforeAll(async () => {
    await Project.deleteMany();

    const response = await request(app)
      .post('/api/projects')
      .send({
        name: 'Test Project',
        description: 'This is a test project',
        deadline: new Date(),
        teamMembers: ['test1', 'test2']
      });

    projectId = response.body._id;
  });

  test('Should create a new project', async () => {
    const response = await request(app)
      .post('/api/projects')
      .send({
        name: 'New Project',
        description: 'This is a new project',
        deadline: new Date(),
        teamMembers: ['test3', 'test4']
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe('New Project');
  });

  test('Should get a project by id', async () => {
    const response = await request(app).get(`/api/projects/${projectId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body._id).toBe(projectId);
  });

  test('Should update a project', async () => {
    const response = await request(app)
      .put(`/api/projects/${projectId}`)
      .send({
        name: 'Updated Project'
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe('Updated Project');
  });

  test('Should delete a project', async () => {
    const response = await request(app).delete(`/api/projects/${projectId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Project deleted successfully');
  });
});
```