describe('Ejemplo de prueba con Cypress', () => {
  it('Busca nuestro curso por el codigo y verifica que esta realmente en el listado de cursos', () => {
    const codigo_curso = "2024.00.B.126.01"

    // visitar la página web
    cy.visit('http://eap.juntaex.es/formacion')

    // Indica el codigo en el campo de búsqueda
    cy.get('#1_08795744-c2dc-4a68-8252-4e21c4c4c774').type(codigo_curso)

    // Haz clic en el botón de búsqueda
    cy.get('button[type="submit"]').click()

    // Verifica que el nombre del curso aparece realmente en la pagina
    cy.contains('SEMINARIOS ONLINE. TESTING')
  })
})
