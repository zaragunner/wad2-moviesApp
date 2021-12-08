let shows;
let episodes;
const showId =  1399;
const showName = 'Game of Thrones' // The show GOT
const seasonno = 1;
let reviews;
const episodeTitle = "Winter Is Coming"


const filterByTitle = (tvList, string) =>
  tvList.filter((m) => m.name.toLowerCase().search(string) !== -1);

const filterByGenre = (tvList, genreId) =>
  tvList.filter((m) => m.genre_ids.includes(genreId));

  describe("Tv Show Page ", () => {
    before(() => {
      // GettvShows from TMDB and store in shows variable.
      cy.request(
        `https://api.themoviedb.org/3/discover/tv?api_key=${Cypress.env("TMDB_KEY")}&language=en-US&include_adult=false&include_video=false&page=3`
      )
        .its("body")    // Take the body of HTTP response from TMDB
        .then((response) => {
          shows = response.results
        })

        cy.request(
            `https://api.themoviedb.org/3tv/${showId}/?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
          )
            .its("body")
            .then((response) => {
              // console.log(response);
              reviews = response.results;
            });

            
            cy.request(
                `https://api.themoviedb.org/3/tv/${showId}/season/${seasonno}?api_key=${Cypress.env(
                  "TMDB_KEY"
                )}`
              )
                .its("body")
                .then((response) => {
                  episodes = response.results;
                });
           
    })
    beforeEach(() => {
      cy.visit("/tv")
    });

    describe("Base tests", () => {
        it("should be on the tv show page", () => {
            cy.url().should("include", `/tv`);
            cy.get("h3").contains("Discover Tv Shows");
          });
        });

        describe("Filtering and Sorting" , () => {
            describe("By show name", () => {
                it("should only display shows with s in the title", () => {
                  let searchString = "s";
                  let matchingShows = filterByTitle(shows, searchString);
                  console.log(matchingShows)
                  cy.get("#filled-search").clear().type(searchString); // Enter m in text box
                  cy.get(".MuiCardHeader-content").should(
                    "have.length",
                    matchingShows.length
                  );
                  cy.get(".MuiCardHeader-content").each(($card, index) => {
                cy.wrap($card).find("p").should("contain", (matchingShows[index].name));
                  });
                })
                it("should only display shows with o in the title", () => {
                  let searchString = "o";
                  let matchingShows = filterByTitle(shows, searchString);
                  cy.get("#filled-search").clear().type(searchString); // Enter m in text box
                  cy.get(".MuiCardHeader-content").should(
                    "have.length",
                    matchingShows.length
                  );
                  cy.get(".MuiCardHeader-content").each(($card, index) => {
                    cy.wrap($card).find("p").should("contain", (matchingShows[index].name));
                  });
                });
                it("should only display shows with XYZ in the title", () => {
                   let searchString = "XYZ";
                   cy.get("#filled-search").clear().type(searchString); // Enter XYZ in text box
                   cy.get(".MuiCardHeader-content").should(
                       'not.exist'
                   )
                 })
        });
            describe("By show genre", () => {
            it("should display shows with the specified genre only", () => {
                //list of genre ids and corresponding categories @ https://www.themoviedb.org/talk/5daf6eb0ae36680011d7e6ee
               const selectedGenreId = 10751;
               const selectedGenreText = "Family";
               const matchingShows = filterByGenre(shows, selectedGenreId);
               cy.get("#genre-select").click();
               cy.get("li").contains(selectedGenreText).click();
               cy.get(".MuiCardHeader-content").should(
                 "have.length",
                 matchingShows.length
               );
               cy.get(".MuiCardHeader-content").each(($card, index) => {
                 cy.wrap($card).find("p").should("contain", (matchingShows[index].name));
               });
             });
    
             describe("By show genre and title", () => {
              it("should display show with the specified genre and title substring only", () => {
                const selectedGenreId = 18;
                const selectedGenreText = "Drama";
                const genreMatchingShows = filterByGenre(shows, selectedGenreId);
                let searchString = "o";
                let matchingShows = filterByTitle(genreMatchingShows, searchString);
                cy.get("#filled-search").clear().type(searchString); // Enter m in text box 
                cy.get("#genre-select").click();
                cy.get("li").contains(selectedGenreText).click();
                cy.get(".MuiCardHeader-content").should(
                  "have.length",
                  matchingShows.length
                );
                cy.get(".MuiCardHeader-content").each(($card, index) => {
                  cy.wrap($card).find("p").should("contain", (matchingShows[index].name));
                });
              });
            });
           });
        

    });

     describe("Viewing TV Show Details", () => {
        it("should display the shows details on a new page", () => {
            cy.get(".MuiCardActions-root").eq(0).contains("More Info").click();
            cy.get("h3").contains(showName);
            cy.url().should("include", `tv/${showId}`)
        })
       })

describe("Viewing Shows Reviews", () => {
        it("should display the show reviews in an overlay", () => {
          cy.get(".MuiCardActions-root").eq(0).contains("More Info").click();
            cy.get("h3").contains(showName);
            cy.url().should("include", `tv/${showId}`)
            cy.get("header").find(".MuiToolbar-root").find("button").click();
            cy.get(".MuiGrid-container").find("button").click();

    });

    it("should direct to individual show review page when 'full review' is clicked", () =>{
      cy.get(".MuiCardActions-root").eq(0).contains("More Info").click();
      cy.get("h3").contains(showName);
      cy.url().should("include", `tv/${showId}`)
      cy.get("header").find(".MuiToolbar-root").find("button").click();
      cy.get(".MuiGrid-container").find("button").click();
      cy.get(".MuiTable-root").find("a").eq(0).click();
      cy.get(".MuiGrid-grid-xs-9").find("p").eq(0).should("contain", "Review By")
 })
  });

  describe("Viewing season information", () => {
      it("should display information relevant to the chosen season", () => {
        cy.get(".MuiCardActions-root").eq(0).contains("More Info").click();
          cy.get(".MuiGrid-grid-xs-9").find("a").eq(1).click()
          cy.get("h2").should("contain" , "Season" && seasonno)
          cy.url().should("contain" , seasonno)
          cy.get("h3").should("contain" , episodeTitle)
      });

});
  });
  