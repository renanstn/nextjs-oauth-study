describe("Basic tests", () => {
  it("should display the correct heading for home page", () => {
    cy.visit("/");
    cy.get("h1").should("have.text", "Home page");
  });

  it("should display the correct heading for sign in page", () => {
    cy.visit("/sign-in");
    cy.get("h1").should("have.text", "SignInPage");
  });

  it("should display the correct heading for sign out page", () => {
    // Este teste não está funcionando ainda por problemas no login
    cy.visit("/sign-out");
    cy.get("h1").should("have.text", "SignOutPage");
  });

  it("should display the correct heading for profile page", () => {
    // Este teste não está funcionando ainda por problemas no login
    cy.visit("/profile");
    cy.get("div").should("have.text", "Renan Santana");
  });
});
