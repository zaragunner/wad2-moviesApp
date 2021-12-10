beforeEach(() => {
    cy.visit("/");
});
describe("Login feature" , () => {
        it("should change the value of the login button to logout when clicked", () => {
          cy.get("header").find(".MuiToolbar-root").find("button").find(".MuiButton-label").contains("Login")
          cy.get("header").find(".MuiToolbar-root").find("button").click();
          cy.get("header").find(".MuiToolbar-root").find("button").find(".MuiButton-label").contains("Logout")
        })
        it("should change the value of the logout button to back to login when clicked", () => {
            cy.get("header").find(".MuiToolbar-root").find("button").find(".MuiButton-label").contains("Login")
            cy.get("header").find(".MuiToolbar-root").find("button").click();
            cy.get("header").find(".MuiToolbar-root").find("button").find(".MuiButton-label").contains("Logout")
            cy.get("header").find(".MuiToolbar-root").find("button").eq(0).click();
            cy.get("header").find(".MuiToolbar-root").find("button").find(".MuiButton-label").contains("Login")
          })
      })