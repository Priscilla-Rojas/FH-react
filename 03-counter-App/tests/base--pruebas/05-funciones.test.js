import { getUser, getUsuarioActivo } from "../../src/base--pruebas/05-funciones"

describe('Pruebas en 05-Funciones', () => {
  test('getUser debe retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }
    const user = getUser();
    expect( testUser ).toEqual( user );
  })

  test('getUsuarioActivo debe retornar un objeto', () => { 
    const name = 'Priscilla';
    const testUserActive = {
      uid: 'ABC567',
      username: name
    };
    const userActive= getUsuarioActivo(name);
    expect(userActive).toEqual(testUserActive)
  })
  
})
