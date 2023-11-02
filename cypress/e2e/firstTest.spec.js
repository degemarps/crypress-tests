/// <reference types="cypress" />

describe('First test suite', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
  })

  it('First test', () => {
    cy.get('[data-cy="imputEmail1"]')
    cy.contains('button', 'Sign in')
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

  it('Extract text value', () => {
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

  it.only('Radion button and checkbox', () => {
    cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then( radionButtons => {
      cy.wrap(radionButtons).eq(0).check({force: true}).should('be.checked')
      cy.wrap(radionButtons).eq(1).check({force: true})
      cy.wrap(radionButtons).eq(0).should('not.be.checked')
      cy.wrap(radionButtons).eq(2).should('be.disabled')
    })

    cy.visit('/')
    cy.contains('Modal & Overlays').click()
    cy.contains('Toastr').click()

    cy.get('[type="checkbox"]').check({force: true})
    cy.get('[type="checkbox"]').uncheck({force: true})
    cy.get('[type="checkbox"]').eq(0).click({force: true})
    cy.get('[type="checkbox"]').eq(1).check({force: true})
  })
})