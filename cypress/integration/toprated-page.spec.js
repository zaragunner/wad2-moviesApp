let topRated ;

const filterByTitle = (movieList, string) =>
  movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
  movieList.filter((m) => m.genre_ids.includes(genreId));

  describe("Top Rated Page ", () => {
    before(() => {
      // Get movies from TMDB and store in movies variable.
      cy.request(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${Cypress.env( "TMDB_KEY")}&language=en-US`
      )
        .its("body")    // Take the body of HTTP response from TMDB
        .then((response) => {
          topRated= response.results
        })
    })
    beforeEach(() => {
      cy.visit("/toprated")
    });
      describe("Base test", () => {
        it("displays page header", () => {
          cy.get("h3").contains("Top Rated Movies");
          cy.get("h1").contains("Filter the movies");
        });
      });

      describe("Filtering", () => {
        describe("By movie title", () => {
         it("should only display movies with m in the title", () => {
           let searchString = "m";
           let matchingMovies = filterByTitle(topRated, searchString);
           console.log(matchingMovies)
           cy.get("#filled-search").clear().type(searchString); // Enter m in text box
           cy.get(".MuiCardHeader-content").should(
             "have.length",
             matchingMovies.length
           );
           cy.get(".MuiCardHeader-content").each(($card, index) => {
             cy.wrap($card).find("p").contains(matchingMovies[index].title);
           });
         })
         it("should only display movies with o in the title", () => {
           let searchString = "o";
           let matchingMovies = filterByTitle(topRated, searchString);
           cy.get("#filled-search").clear().type(searchString); // Enter m in text box
           cy.get(".MuiCardHeader-content").should(
             "have.length",
             matchingMovies.length
           );
           cy.get(".MuiCardHeader-content").each(($card, index) => {
             cy.wrap($card).find("p").contains(matchingMovies[index].title);
           });
         });
         it("should only display movies with XYZ in the title", () => {
            let searchString = "XYZ";
            cy.get("#filled-search").clear().type(searchString); // Enter XYZ in text box
            cy.get(".MuiCardHeader-content").should(
                'not.exist',
                
            )
                    
           
          })
       })
       describe("By movie genre", () => {
        it("should display movies with the specified genre only", () => {
           const selectedGenreId = 35;
           const selectedGenreText = "Comedy";
           const matchingMovies = filterByGenre(topRated, selectedGenreId);
           cy.get("#genre-select").click();
           cy.get("li").contains(selectedGenreText).click();
           cy.get(".MuiCardHeader-content").should(
             "have.length",
             matchingMovies.length
           );
           cy.get(".MuiCardHeader-content").each(($card, index) => {
             cy.wrap($card).find("p").contains(matchingMovies[index].title);
           });
         });

         describe("By movie genre and title", () => {
          it("should display movies with the specified genre and title substring only", () => {
            const selectedGenreId = 35;
            const selectedGenreText = "Comedy";
            const genreMatchingMovies = filterByGenre(topRated, selectedGenreId);
            let searchString = "o";
            let matchingMovies = filterByTitle(genreMatchingMovies, searchString);
            cy.get("#filled-search").clear().type(searchString); // Enter m in text box 
            cy.get("#genre-select").click();
            cy.get("li").contains(selectedGenreText).click();
            cy.get(".MuiCardHeader-content").should(
              "have.length",
              matchingMovies.length
            );
            cy.get(".MuiCardHeader-content").each(($card, index) => {
              cy.wrap($card).find("p").contains(matchingMovies[index].title);
            });
          });
        });
       });
    });

 describe("Movie Card Buttons", () => {
          it("should add movie to favourites", () => {
            cy.get("button[aria-label='add to favorites']").eq(0).click();
            cy.get("button[aria-label='add to favorites']").eq(1).click();
            cy.get("header").find(".MuiToolbar-root").find("button").click();
            cy.get("header").find(".MuiToolbar-root").find("button").eq(2).click();
          }); 

          it("should direct to indivdual movie page", () => {
            cy.get(".MuiCardActions-root").eq(0).contains("More Info").click();
            cy.url().should("include", `/movies/${topRated[0].id}`);
            cy.get("h3").contains(topRated[0].title);
          }); 
        });
    });


