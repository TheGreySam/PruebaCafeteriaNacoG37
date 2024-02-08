const request = require("supertest");
const server = require("../index");

const cafes = require("../cafes.json")

describe("Operaciones CRUD de cafes", () => {
  // GET /cafes
  it("responds with array", async () => {
    const response = await request(server).get('/cafes')
     
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true)
  });
  // DELETE /cafes/:id
  it("responds 400 if cafe does not exists and there is no token", async () => {
    const idfalso = 'id-no-existente'
    const response = await request(server).delete(`/cafes/${idfalso}`)
    expect(response.status).toBe(400)
  })
  // POST /cafes
  it("responds 201 when posting a new cafe", async () => {
    const response = await request(server).post('/cafes').send(cafes)
    expect(response.status).toBe(201)
  })

});
