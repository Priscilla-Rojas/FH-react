import { getSaludo } from '../../src/base--pruebas/02-template-string.js';

describe('Pruebas en 02-template-string', () => {
  
  test('Get Saludo debe retornar hola Priscilla', () => {
    const name = 'Priscilla';
    const message = getSaludo( name );
  })
})
