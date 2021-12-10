let listings;

const filterByTitle = (tvList, string) =>
  tvList.filter((m) => m.name.toLowerCase().search(string) !== -1);

const filterByGenre = (tvList, genreId) =>
  tvList.filter((m) => m.genre_ids.includes(genreId));

  describe("Tv Show Listings Page ", () => {
    before(() => {
      // GettvShows from TMDB and store in listings variable.
      cy.request(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=${Cypress.env(
            "TMDB_KEY"
          )}&language=en-US&include_adult=false&include_video=false&page=1`
      )
        .its("body")    // Take the body of HTTP response from TMDB
        .then((response) => {
          listings = response.results
        })
           
    })
    beforeEach(() => {
      cy.visit("/listings")
    });

    describe("Base tests", () => {
        it("should be on the tv show listings page", () => {
            cy.url().should("include", `/listings`);
            cy.get("h3").contains("Tv Shows Airing Today");
          });
        });

        describe("Filtering and Sorting" , () => {
            describe("By show name", () => {
                it("should only display listings with s in the title", () => {
                  let searchString = "s";
                  let matchingShows = filterByTitle(listings, searchString);
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
                it("should only display listings with o in the title", () => {
                  let searchString = "o";
                  let matchingShows = filterByTitle(listings, searchString);
                  cy.get("#filled-search").clear().type(searchString); // Enter m in text box
                  cy.get(".MuiCardHeader-content").should(
                    "have.length",
                    matchingShows.length
                  );
                  cy.get(".MuiCardHeader-content").each(($card, index) => {
                    cy.wrap($card).find("p").should("contain", (matchingShows[index].name));
                  });
                });
                it("should only display listings with XYZ in the title", () => {
                   let searchString = "XYZ";
                   cy.get("#filled-search").clear().type(searchString); // Enter XYZ in text box
                   cy.get(".MuiCardHeader-content").should(
                       'not.exist'
                   )
                 })
        });
            describe("By show genre", () => {
            it("should display listings with the specified genre only", () => {
                //list of genre ids and corresponding categories @ https://www.themoviedb.org/talk/5daf6eb0ae36680011d7e6ee
               const selectedGenreId = 10751;
               const selectedGenreText = "Family";
               const matchingShows = filterByGenre(listings, selectedGenreId);
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
                const genreMatchingShows = filterByGenre(listings, selectedGenreId);
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
    

     describe("TV Card Buttons" , () => {
        it("Should navigate to the individual shows page", () => {
            cy.get(".MuiCardActions-root").eq(0).contains("More Info").click();
            cy.url().should("include", `/tv/${listings[0].id}`); 
        });
    });

 });