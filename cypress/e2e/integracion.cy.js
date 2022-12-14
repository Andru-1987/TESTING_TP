describe('PRUEBA DE INTEGRACION',function(){

    beforeEach('Stub data',function(){
        cy.visit('http://localhost:5500/index.html')
        cy.fixture('fixture-demo/test_createuser')
        .then(data =>{
            this.data = data;
        })
    })

    it('CREACION DE USUARIO ', function(){

        cy.get('[placeholder="Ingrese nombre"]').type(this.data.nombre);
        cy.get('[placeholder="Ingrese apellido"]').type(this.data.apellido);
        cy.get('#post > div > [type="email"]').type(this.data.userEmail);
        cy.get('[placeholder="Ingrese dni"]').type(this.data.dni);
        cy.get('[placeholder="Ingrese edad"]').type(this.data.edad);
        cy.get('#post > div > [type="password"]').type(this.data.password);
        
        // las aserttions que debe contener en el test para comprobar de que el back end funciona
        const stub = cy.stub()  
        cy.on ('window:alert', stub)
        
        cy.get('#sign').click()
        .then(() => {
          expect(stub.getCall(0)).to.be.calledWith(`Usuario ${this.data.userEmail} ha sido creado satisfactoriamente`)      
        })  
        })

    it('LOGIN DE USUARIO', function(){
        
            cy.get('.selection > :nth-child(1) > input').click();
            cy.get('#get > div > [type="email"]').type(this.data.userEmail);
            cy.get('#get > div > [type="password"]').type(this.data.password);
            cy.get('#get > #login').click();
            
            // las aserttions que debe contener en el test para comprobar de que el back end funciona
            cy.contains('#modal','Bienvenido').should('be.visible');
            cy.get('#modal > :nth-child(3)').should('include.text',this.data.nombre);
        })
    })
