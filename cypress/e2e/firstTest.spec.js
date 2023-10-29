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

  it('Save subject of the command', () => {
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

  it.only('Extract text value', () => {
    // 1
    cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

    // 2
    cy.get('[for="exampleInputEmail1"]').then( label => {
      const labelTex = label.text()
      expect(labelTex).to.equal('Email address')
    })

    // 3
    cy.get('[for="exampleInputEmail1"]').invoke('text').then( text => {
      expect(text).to.equal('Email address')
    })

    // 4
    cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').then( classValue => {
      expect(classValue).to.equal('label')
    })

    // 5
    cy.get('#exampleInputEmail1').type('test@test.com')
    cy.get('#exampleInputEmail1').invoke('prop', 'value').should('contain', 'test@test.com').then( prop => {
      expect(prop).to.equal('test@test.com')
    })
  })
})