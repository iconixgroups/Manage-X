```javascript
const request = require('supertest');
const app = require('../server');
const File = require('../models/File');

describe('File API endpoints', () => {
    let fileId;

    beforeAll(async () => {
        await File.deleteMany();

        const file = new File({
            name: 'testFile',
            path: '/test/path',
            size: 1000,
            type: 'text/plain'
        });

        const savedFile = await file.save();
        fileId = savedFile._id;
    });

    // Test the GET route
    test('should get all files', async () => {
        const res = await request(app).get('/api/files');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('files');
    });

    // Test the POST route
    test('should create a new file', async () => {
        const res = await request(app)
            .post('/api/files')
            .send({
                name: 'newFile',
                path: '/new/path',
                size: 2000,
                type: 'text/plain'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('file');
    });

    // Test the GET by ID route
    test('should get a specific file', async () => {
        const res = await request(app).get(`/api/files/${fileId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('file');
    });

    // Test the DELETE route
    test('should delete a file', async () => {
        const res = await request(app).delete(`/api/files/${fileId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message');
    });

    afterAll(async () => {
        await File.deleteMany();
    });
});
```