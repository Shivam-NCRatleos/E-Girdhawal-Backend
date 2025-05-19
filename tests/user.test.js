const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');

describe('User Management API', () => {
  beforeAll(async () => {
    // Connect to the test database
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    // Disconnect from the test database
    await mongoose.connection.close();
  });

  it('should fetch all users (admin only)', async () => {
    const adminToken = 'your_admin_token'; // Replace with a valid admin token
    const res = await request(app).get('/api/users').set('Authorization', `Bearer ${adminToken}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should fetch a single user by ID', async () => {
    const userToken = 'your_user_token'; // Replace with a valid user token
    const userId = 'test_user_id'; // Replace with a valid user ID
    const res = await request(app).get(`/api/users/${userId}`).set('Authorization', `Bearer ${userToken}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('name');
  });
});