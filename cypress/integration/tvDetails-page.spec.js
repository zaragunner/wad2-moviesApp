let episodes;
let show ;
const showId =  1399;
const showName = 'Game of Thrones' // The show GOT
const seasonno = 1;
let reviews;
const episodeTitle = "Winter Is Coming"

describe("TV Show Details Page", () => {
    before(() => {
      cy.request(
        `https://api.themoviedb.org/3/tv/${showId}?api_key=${Cypress.env(
          "TMDB_KEY"
        )}`
      )
        .its("body")
        .then((showDetails) => {
           show = showDetails;
          return showDetails.id;
        });

        // cy.request(
        //     `https://api.themoviedb.org/3tv/${showId}/?api_key=${Cypress.env(
        //       "TMDB_KEY"
        //     )}`
        //   )
        //     .its("body")
        //     .then((response) => {
        //       // console.log(response);
        //       reviews = response.results;
        //     });

            
        //     cy.request(
        //         `https://api.themoviedb.org/3/tv/${showId}/season/${seasonno}?api_key=${Cypress.env(
        //           "TMDB_KEY"
        //         )}`
        //       )
        //         .its("body")
        //         .then((response) => {
        //           episodes = response.results;
        //         });
    });
    beforeEach(() => {
      cy.visit(`/tv/${show.id}`);
    });

describe("Viewing TV Show Details", () => {
    it("should display the shows details on a new page", () => {
       
        cy.get("h3").contains(showName);
        cy.url().should("include", `tv/${showId}`)
    })
   })

describe("Viewing Shows Reviews", () => {
    it("should display the show reviews in an overlay", () => {
        cy.get("h3").contains(showName);
        cy.url().should("include", `tv/${showId}`)
        cy.get("header").find(".MuiToolbar-root").find("button").click();
        cy.get(".MuiGrid-container").find("button").click();

});

it("should direct to individual show review page when 'full review' is clicked", () =>{
  cy.get("h3").contains(showName);
  cy.url().should("include", `tv/${showId}`)

  cy.get(".MuiGrid-container").find("button").click();
  cy.get(".MuiTable-root").find("a").eq(0).click();
  cy.get(".MuiGrid-grid-xs-9").find("p").eq(0).should("contain", "Review By")
})
});

describe("Viewing season information", () => {
  it("should display information relevant to the chosen season", () => {
      cy.get(".MuiGrid-grid-xs-9").find("a").eq(1).click()
      cy.get("h2").should("contain" , "Season" && seasonno)
      cy.url().should("contain" , seasonno)
      cy.get("h3").should("contain" , episodeTitle)
  });

});
});