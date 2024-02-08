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

});
