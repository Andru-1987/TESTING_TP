describe('TDD METHOD',function(){

    beforeEach('Stub data',function(){
        cy.visit('http://localhost:5500/index.html')
        cy.fixture('fixture-demo/usuario')
        .then(data =>{
            this.data = data;
        })
    })

    it('VALIDAR LANDING PAGE', function(){
        
        cy.get('.selection > :nth-child(1) > input').click();
        cy.get('#get > div > [type="email"]').type(this.data.userEmail);
        cy.get('#get > div > [type="password"]').type(this.data.password);
        cy.get('#get > #login').click();
        
        // las aserttions que debe contener en el test para comprobar de que el back end funciona
        cy.contains('#modal','Bienvenido').should('be.visible');
        cy.get('#modal > :nth-child(3)').should('include.text',this.data.nombre);
    })


})
