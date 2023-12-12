```javascript
const request = require('supertest');
const app = require('../server');
const Comment = require('../models/Comment');

describe('Comment API endpoints', () => {
    let comment;

    beforeAll(async () => {
        comment = new Comment({
            content: 'Test comment',
            author: 'Test author',
            task: 'Test task'
        });
        await comment.save();
    });

    // Test for GET request to retrieve all comments
    it('should retrieve all comments', async () => {
        const res = await request(app).get('/api/comments');
        expect(res.statusCode).toEqual(200);
        expect(res.body[0]).toHaveProperty('content');
        expect(res.body[0]).toHaveProperty('author');
        expect(res.body[0]).toHaveProperty('task');
    });

    // Test for GET request to retrieve a specific comment
    it('should retrieve a specific comment', async () => {
        const res = await request(app).get(`/api/comments/${comment._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('content');
        expect(res.body).toHaveProperty('author');
        expect(res.body).toHaveProperty('task');
    });

    // Test for POST request to create a new comment
    it('should create a new comment', async () => {
        const res = await request(app)
            .post('/api/comments')
            .send({
                content: 'New test comment',
                author: 'New test author',
                task: 'New test task'
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('content');
        expect(res.body).toHaveProperty('author');
        expect(res.body).toHaveProperty('task');
    });

    // Test for DELETE request to delete a specific comment
    it('should delete a specific comment', async () => {
        const res = await request(app).delete(`/api/comments/${comment._id}`);
        expect(res.statusCode).toEqual(204);
    });

    afterAll(async () => {
        await Comment.deleteMany();
    });
});
```