describe( 'verifyLicensePlate', () => {
  it( 'verify if vehicle can be on the road with license plate given', () => {
    cy.visit( 'http://localhost:3000' );
    cy.findByPlaceholderText( 'Placa' ).type( 'PDQ-739' );
    cy.findByRole( 'button', { name: /Verificar/i } ).click();
    cy.findByRole( 'textbox', { name: /placa/i } ).type( 'PDF-4567' );
    cy.findByRole( 'textbox', { name: /fecha/i } ).type( '10/18/2021' );
    cy.findByRole( 'textbox', { name: /hora/i } ).type( '07:00:00', { force: true } );
    cy.findByRole( 'button', { name: /ok/i } ).click();
    cy.findByText( 'Buscar' ).click();
  } );
} );
