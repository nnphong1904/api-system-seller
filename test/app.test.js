const request = require('supertest');
const app = require('../app');
describe('Get Index Endpoints', () => {
  it('should get json response', async () => {
    const res = await request(app)
      .get('/')
    
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('title')
    expect(res.body).toHaveProperty('success', true);
  })
})