
describe('SMOKE TEST',()=>{

    it('validar loading', ()=>{
        cy.visit('http://localhost:5500/index.html')
        cy.get('.selection > :nth-child(2)').should('be.visible')

    })

    it('validar click sobre log in', ()=>{
        cy.visit('http://localhost:5500/index.html')
        cy.get('.selection > :nth-child(1) > input').click()
        cy.get('#get').should('be.visible')
        cy.get('#post').should('not.be.visible')
    })
})
