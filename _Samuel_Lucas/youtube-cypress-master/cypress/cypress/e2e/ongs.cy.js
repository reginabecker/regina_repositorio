//Retorna toda a documentação dos comandos do cypress
/// <reference types="cypress" />

describe('Ongs', () => {
    //Hooks São trexos de códigos para executar antes ou depois de cada ou de todos os testes
    beforeEach(() => {
        cy.visit('https://bethehero-frontend.netlify.app/register');
        //cy.visit('https://localhost:3000/')
    });

    it('devem poder realizar um cadastro', () => {
        //cy.get - busca um elemento
        //type   - insere um texto
        cy.get('[placeholder="Nome da ONG"]').type('Dogs queridos');
        cy.get('[type="email"]').type('tobias@gmail.com');
        cy.get('[placeholder="Whatsapp"]').type('51997811463');
        cy.get('[placeholder="Cidade"]').type('Porto Alegre');
        cy.get('[placeholder="UF"]').type('RS'); 
    //routing
    //start server com cy.server()
    //criar uma rota com cy.route()
    //atribuir rota a um alias
    //esperar com cy.wait
    //cy.server();
    //cy.route('POST', '**/ongs').as('postOng');
        cy.get('.button').click();    
    //cy.wait('@postOng'.then((xhr) => {
        //expect(xhr.status).be.eq(200);
        //expect(xhr.response.body).has.property('id');
        //expect(xhr.response.body.id).is.not.null;
    //})        
    });

    it('devem poder realizar um login', () => {
        //const createOngId = Cypress.env('createdOngId');
        //cy.log(createdOngId);

        //cy.visit('https://bethehero-frontend.netlify.app');
        //cy.get('input').type(createdOngId);
        //cy.get('.button').click();    
     });    
});    


