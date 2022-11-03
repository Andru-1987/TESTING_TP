
describe('Conjunto de pruebas',()=>{

    it('validar loading', ()=>{
        cy.visit('http://127.0.0.1:5500/frontend/index.html')
        cy.get('.selection > :nth-child(2)').should('be.visible')

    })

    it('validar click sobre log in', ()=>{
        cy.visit('http://127.0.0.1:5500/frontend/index.html')
        cy.get('.selection > :nth-child(1) > input').click()
    })
})
