import { getHeroeByIdAsync } from "../../src/base--pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync debe retornar un Heroe', () => { 
    const id = 1;
    return expect( getHeroeByIdAsync( id )).resolves.toEqual( {
      id: 1,
      name: 'Batman',
      owner: 'DC'
    })
    
  })
  test('getHeroeByIdAsync debe retornar un Error si el Heroe no existe', () => { 
    const id = 100;
    return expect(getHeroeByIdAsync( id )).rejects.toMatch('No se pudo encontrar el héroe');
    
  })
})
