


describe('My First Test', () => {

  const email =  "test";
  const pass = 'validPassword23';

beforeEach(() => {
  cy.visit('http://localhost:4200');
})

it('has a title', () => {
  cy.contains("My App")
});

it('Go to login', () => {
  cy.get('#login').click();
  cy.contains("Login")

  cy.get('#loginEmail').type("test")
  cy.get('#loginPassword').type("test")
  cy.get('button[type=submit]').click();
});

it('has both dialogs', () =>{
  // cy.contains("Kaasje");
  // cy.contains("MooieChat");
})






})
