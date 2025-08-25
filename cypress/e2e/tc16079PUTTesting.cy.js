/// <reference types="cypress" />

describe("API PUT testing", () => {
  // With Copilot
  it("PUT request", () => {
    cy.request({
      method: "PUT",
      url: "https://reqres.in/api/users/2",
      headers: { "x-api-key": "reqres-free-v1" },
      body: {
        name: "morpheus",
        job: "zion resident",
      },
    }).then((response) => {
      expect(response.status).equal(200);
      expect(response.body?.name).equal("morpheus");
      expect(response.body?.job).equal("zion resident");
      expect(response.body).to.have.property("updatedAt");
    });
  });

  //With Instructor
  it("POST PUT in ReqRes Testing", () => {
    const user = {
      name: "JPiza",
      job: "Developer",
    };
    cy.request({
      method: "PUT",
      url: "https://reqres.in/api/users/2",
      headers: { "x-api-key": "reqres-free-v1" },
      body: user,
    }).then((response) => {
      expect(response.status).equal(200);
      expect(response.body?.name).equal(user.name);
      expect(response.body?.job).equal(user.job);
    });
  });

});
