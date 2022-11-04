
describe('SMOKE TEST',()=>{

    it('VALIDAR LOADING', ()=>{
        cy.visit('http://localhost:5500/index.html')
        cy.get('.selection > :nth-child(2)').should('be.visible')

    })

    it('VALIDAR CLICK SOBRE LOGIN', ()=>{
        cy.visit('http://localhost:5500/index.html')
        cy.get('.selection > :nth-child(1) > input').click()
        cy.get('#get').should('be.visible')
        cy.get('#post').should('not.be.visible')
    })
})
