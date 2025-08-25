/// <reference types="cypress" />

describe("API testing", () => {
  // With Copilot
  it("GET request", () => {
    cy.request("https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("id", 1);
        expect(response.body).to.have.property("userId", 1);
        expect(response.body).to.have.property("title");
        expect(response.body).to.have.property("body");
      }
    );
  });

  //With Instructor
  it("GET API Testing", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2",
      headers: { "x-api-key": "reqres-free-v1" },
    }).then((response) => {
      expect(response.status).equal(200);
      expect(response.body.data[1]?.first_name).equal("Lindsay");
      expect(response.body?.support.text).contains("Tired of writing endless");
    });
  });
});
