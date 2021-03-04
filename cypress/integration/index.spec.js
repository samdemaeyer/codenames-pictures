/// <reference types="cypress" />

context('Visit homepage (Rules)', () => {
  it('renders rules page with start button', () => {
    cy.visit('http://localhost:3000')
    cy.url().should('include', 'http://localhost:3000/#/')
    cy.get('.Rules').should('exist')
    cy.get('[data-test="start-btn-top"]').contains('Start!').should('have.attr', 'href', '#/play')
    cy.get('[data-test="start-btn-bottom"]').contains('Start!').should('have.attr', 'href', '#/play')
  })
})

context('Visit play page', () => {
  it('renders a game with all expected elements', () => {
    cy.visit('http://localhost:3000/#/play')
    cy.url().should('include', 'http://localhost:3000/#/play')
    cy.get('.CardGrid .Card').should('have.length', 20)
    cy.get('[data-testing="menu-button"]').contains('Menu').should('not.have.class', 'expanded')
  })

  describe('open the side menu', () => {
    before(() => cy.get('button.Menu').click())

    it('renders a list of actions', () => {
      const menuLinks = [
        { href: '#/play', text: 'Teams' },
        { href: '#/spy-master/', text: 'Spy Master' },
        { href: '#/play', text: 'New Game' },
        { href: '#/', text: 'Rules' },
      ]

      cy.get('[data-testing="menu-button"]').should('have.class', 'expanded')
      cy.get('[data-testing="menu-button"] .menu-content').children()
        .should('have.length', 4)
        .each((link, i) => {
          expect(link.find('a').attr('href')).to.contain(menuLinks[i].href)
          expect(link.find('a')).to.have.text(menuLinks[i].text)
        })
    })
  })
})
