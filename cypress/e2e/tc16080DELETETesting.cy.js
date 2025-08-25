/// <reference types="cypress" />

describe("API DELETE testing", () => {
  // With Copilot
  it("DELETE request", () => {
    cy.request({
      method: "DELETE",
      url: "https://reqres.in/api/users/2",
      headers: { "x-api-key": "reqres-free-v1" },
    }).then((response) => {
      expect(response.status).equal(204);
    });
  });

  //With Instructor
  it("DELETE API in ReqRes Testing", () => {
    cy.request({
      method: "DELETE",
      url: "https://reqres.in/api/users/2",
      headers: { "x-api-key": "reqres-free-v1" },
    }).then((response) => {
      expect(response.status).equal(204);
    });
  });
});
