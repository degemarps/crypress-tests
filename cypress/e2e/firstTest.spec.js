/// <reference types="cypress" />

describe('First test suite', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
  })

  it('First test', () => {
    cy.get('[data-cy="imputEmail1"]')
  })

  it('Second test', () => {
    cy.contains('[status="primary"]', 'Sign in')
    cy.get('nav.fixed')
      .find('g[data-name="menu-2"]')
      .click()
  })

  it.only('Save subject of the command', () => {
    cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
    cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')

    // Cypress alias
    cy.contains('nb-card', 'Using the Grid').as('usingTheGrid')
    cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain', 'Email')
    cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain', 'Password')

    // Cypress then()
    cy.contains('nb-card', 'Using the Grid').then(usingTheGridForm => {
      cy.wrap(usingTheGridForm).find('[for="inputEmail1"]').should('contain', 'Email')
      cy.wrap(usingTheGridForm).find('[for="inputPassword2"]').should('contain', 'Password')
    })
  })
})