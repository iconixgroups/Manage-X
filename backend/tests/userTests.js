```javascript
const request = require('supertest');
const app = require('../server');
const User = require('../models/User');

describe('User Registration and Authentication', () => {
  afterEach(async () => {
    await User.deleteMany();
  });

  test('should register a new user', async () => {
    const res = await request(app)
      .post('/api/register')
      .send({
        username: 'testuser',
        password: 'testpassword',
        email: 'testuser@example.com'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('user');
  });

  test('should not register a user with an existing username', async () => {
    await request(app)
      .post('/api/register')
      .send({
        username: 'testuser',
        password: 'testpassword',
        email: 'testuser@example.com'
      });

    const res = await request(app)
      .post('/api/register')
      .send({
        username: 'testuser',
        password: 'testpassword',
        email: 'testuser2@example.com'
      });

    expect(res.statusCode).toEqual(400);
  });

  test('should login a registered user', async () => {
    await request(app)
      .post('/api/register')
      .send({
        username: 'testuser',
        password: 'testpassword',
        email: 'testuser@example.com'
      });

    const res = await request(app)
      .post('/api/login')
      .send({
        username: 'testuser',
        password: 'testpassword'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  test('should not login an unregistered user', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({
        username: 'testuser',
        password: 'testpassword'
      });

    expect(res.statusCode).toEqual(401);
  });
});
```