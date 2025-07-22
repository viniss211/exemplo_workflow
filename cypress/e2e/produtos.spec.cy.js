describe('Página de Produtos', () => {
  it('Deve exibir o título corretamente', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Lista de Produtos');
  });

  it('Deve conter 3 produtos inicialmente', () => {
    cy.visit('http://localhost:3000');
    cy.get('ul#lista-produtos li').should('have.length', 3);
  });

  it('Adiciona um novo produto na lista', () => {
    cy.visit('http://localhost:3000');

    cy.get('#nome-produto').type('Fone de Ouvido');
    cy.get('#preco-produto').type('149.99');
    cy.get('form').submit();

    cy.contains('Fone de Ouvido - R$ 149.99');
  });

  it('Remove um produto da lista', () => {
    cy.visit('http://localhost:3000');
    cy.get('.remover').first().click();
    cy.get('ul#lista-produtos li').should('have.length', 2);
  });
});
