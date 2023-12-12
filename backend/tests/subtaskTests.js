```javascript
const request = require('supertest');
const app = require('../server');
const Subtask = require('../models/Subtask');

describe('Subtask API', () => {
    let subtaskId;

    beforeAll(async () => {
        await Subtask.deleteMany();

        const response = await request(app)
            .post('/api/subtasks')
            .send({
                name: 'Test Subtask',
                description: 'This is a test subtask',
                taskId: '60d6c47e0b5f5c6d88a64d9e',
                status: 'pending'
            });

        subtaskId = response.body._id;
    });

    test('Should create a new subtask', async () => {
        const response = await request(app)
            .post('/api/subtasks')
            .send({
                name: 'Another Test Subtask',
                description: 'This is another test subtask',
                taskId: '60d6c47e0b5f5c6d88a64d9e',
                status: 'pending'
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.name).toBe('Another Test Subtask');
    });

    test('Should get all subtasks', async () => {
        const response = await request(app).get('/api/subtasks');

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
        expect(response.body.length).toBeGreaterThan(0);
    });

    test('Should get a subtask by id', async () => {
        const response = await request(app).get(`/api/subtasks/${subtaskId}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Test Subtask');
    });

    test('Should update a subtask', async () => {
        const response = await request(app)
            .put(`/api/subtasks/${subtaskId}`)
            .send({
                status: 'completed'
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('completed');
    });

    test('Should delete a subtask', async () => {
        const response = await request(app).delete(`/api/subtasks/${subtaskId}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Subtask deleted successfully');
    });
});
```