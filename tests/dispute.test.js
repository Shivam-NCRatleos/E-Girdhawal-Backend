const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');

describe('Dispute Management API', () => {
  beforeAll(async () => {
    // Connect to the test database
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    // Disconnect from the test database
    await mongoose.connection.close();
  });

  it('should create a dispute', async () => {
    const userToken = 'your_user_token'; // Replace with a valid user token
    const res = await request(app)
      .post('/api/disputes')
      .set('Authorization', `Bearer ${userToken}`)
      .send({
        subject: 'Dispute over land ownership',
      });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('status', 'open');
  });

  it('should fetch all disputes (admin only)', async () => {
    const adminToken = 'your_admin_token'; // Replace with a valid admin token
    const res = await request(app).get('/api/disputes').set('Authorization', `Bearer ${adminToken}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});