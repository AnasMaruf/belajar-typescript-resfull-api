import supertest from "supertest";
import { logger } from "../src/application/logging";
import { web } from "../src/application/web";

describe("POST /api/users", () => {
  it("should reject register new user if request is invalid", async () => {
    const response = await supertest(web).post("/api/users").send({
      username: "",
      password: "",
      name: "",
    });

    logger.debug(response.body);
    expect(response.status).toBe(400);
    expect(response.body.errors).toBeDefined();
  });
});
