/// <reference types="cypress" />

describe("API POST testing", () => {
  // With Copilot
  it("POST request", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      headers: { "x-api-key": "reqres-free-v1" },
      body: {
        name: "morpheus",
        job: "leader",
      },
    }).then((response) => {
      expect(response.status).equal(201);
      expect(response.body?.name).equal("morpheus");
      expect(response.body?.job).equal("leader");
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("createdAt");
    });
  });

  //With Instructor
  it("POST API in ReqRes Testing", () => {
    const user = {
      name: "JPiza",
      job: "Tester",
    };
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      headers: { "x-api-key": "reqres-free-v1" },
      body: user,
    }).then((response) => {
      expect(response.status).equal(201);
      expect(response.body?.name).equal(user.name);
      expect(response.body?.job).equal(user.job);
    });
  });
});
