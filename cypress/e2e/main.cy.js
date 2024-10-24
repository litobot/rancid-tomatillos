import posters from '../fixtures/movie_posters.json' 

describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept('GET', "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies", { body: posters }).as('getMovies');
    cy.visit('http://localhost:3000/');
  });

  it('displays title on page load', () => {
    cy.get('h1');
    cy.contains('rancid tomatillos');
  });

  it('displays all movies with their posters and vote counts', () => {
    cy.wait('@getMovies');
    cy.get('.movies-container').should('exist');
    cy.get('.movies-container').find('.movie-card').should('have.length', 4);
    posters.forEach((poster, index) => {
      cy.get('.movie-card').eq(index).within(() => {
        cy.get('img').should('have.attr', 'src', poster.poster_path);
        cy.get('.vote-count').should('contain', poster.vote_count);  
      });
    });
  });

  it('should increment a vote count when up arrow is pressed', () => {
    cy.wait('@getMovies');
    cy.get('.movies-container').should('exist');
    cy.get('.movies-container').find('.movie-card').should('have.length', 4);
    cy.intercept("PATCH", "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/155", { body: posters}).as('getMovies');
    let startingVoteCount = posters[0].vote_count;
    cy.get('.movie-card').first().within(() => {
      cy.get('.vote-count').should('contain', startingVoteCount);
      cy.get('img').eq(1).click();  
      cy.get('.vote-count').should('contain', startingVoteCount + 1);
    });
  });

  it('should decrement a vote count when down arrow is pressed', () => {
    cy.wait('@getMovies');
    cy.intercept("PATCH", "https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/155", { body: posters}).as('getMovies');
    let startingVoteCount= posters[0].vote_count;
    cy.get('.movie-card').first().within(() => {
      cy.get('.vote-count').should('contain', startingVoteCount);
      cy.get('img').eq(2).click();  
      cy.get('.vote-count').should('contain', startingVoteCount - 1);
    });
  });
})