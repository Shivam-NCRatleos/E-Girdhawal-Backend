const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');

describe('Chat API', () => {
  beforeAll(async () => {
    // Connect to the test database
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    // Disconnect from the test database
    await mongoose.connection.close();
  });

  it('should send a message', async () => {
    const userToken = 'your_user_token'; // Replace with a valid user token
    const res = await request(app)
      .post('/api/chat')
      .set('Authorization', `Bearer ${userToken}`)
      .send({
        receiver: 'test_receiver_id', // Replace with a valid receiver ID
        message: 'Hello, this is a test message',
      });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('message', 'Hello, this is a test message');
  });

  it('should fetch messages for a user', async () => {
    const userToken = 'your_user_token'; // Replace with a valid user token
    const res = await request(app).get('/api/chat/user/test_user_id').set('Authorization', `Bearer ${userToken}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});