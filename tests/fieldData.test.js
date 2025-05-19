const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');

describe('Field Data Request API', () => {
  beforeAll(async () => {
    // Connect to the test database
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    // Disconnect from the test database
    await mongoose.connection.close();
  });

  it('should create a field data request', async () => {
    const userToken = 'your_user_token'; // Replace with a valid user token
    const res = await request(app)
      .post('/api/fields')
      .set('Authorization', `Bearer ${userToken}`)
      .send({
        details: 'Request for crop field data for analysis',
      });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('status', 'pending');
  });

  it('should fetch all field data requests (admin only)', async () => {
    const adminToken = 'your_admin_token'; // Replace with a valid admin token
    const res = await request(app).get('/api/fields').set('Authorization', `Bearer ${adminToken}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});