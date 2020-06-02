const request = require('supertest');
const server = require('../src/server');

test('It should say hello to Steave Job', async () => {
  const name = 'Steave Jobs';

  const response = await request(server)
    .get(`/hello-world?name=${name}`);

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('message');
  expect(response.body.message).toBe(`Hello ${name}`);
});

test('It should say hello world', async () => {
  const response = await request(server)
    .get('/hello-world');

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('message');
  expect(response.body.message).toBe('Hello World');
});
