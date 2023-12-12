```javascript
const request = require('supertest');
const app = require('../server');
const Task = require('../models/Task');

describe('Task Management', () => {
    let taskId;

    beforeAll(async () => {
        await Task.deleteMany();

        const task = new Task({
            title: 'Test Task',
            description: 'This is a test task',
            assignedTo: 'Test User',
            status: 'In Progress',
            dueDate: new Date(),
        });

        const savedTask = await task.save();
        taskId = savedTask._id;
    });

    test('Should create a new task', async () => {
        const res = await request(app)
            .post('/api/tasks')
            .send({
                title: 'New Task',
                description: 'This is a new task',
                assignedTo: 'New User',
                status: 'Not Started',
                dueDate: new Date(),
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('task');
    });

    test('Should get all tasks', async () => {
        const res = await request(app).get('/api/tasks');

        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test('Should get a task by id', async () => {
        const res = await request(app).get(`/api/tasks/${taskId}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('task');
    });

    test('Should update a task', async () => {
        const res = await request(app)
            .put(`/api/tasks/${taskId}`)
            .send({
                status: 'Completed',
            });

        expect(res.statusCode).toEqual(200);
        expect(res.body.task.status).toEqual('Completed');
    });

    test('Should delete a task', async () => {
        const res = await request(app).delete(`/api/tasks/${taskId}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('Task deleted successfully');
    });
});
```