describe('Este es mi primer grupo de pruebas', () => {
  test( ' Esta es mi primer prueba', ()=>{
    // 1. Inicializaación
    const message1= 'hola mundo';
  
    // 2. Estimulo
    const message2= message1.trim();
  
    // 3. Observar el comportamiento... esperado
    // expect( message1 ).toBe( message2);
    expect( message1 ).toBe( message2);
  
  })
})


