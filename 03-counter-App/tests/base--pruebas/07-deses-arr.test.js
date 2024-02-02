import { number } from "prop-types";
import { retornaArreglo } from "../../src/base--pruebas/07-deses-arr"

describe('Prueba en 07-desde-arr', () => {
    test('Debe de retornar un string y un numero ', () => {
        const [letters, numbers] = retornaArreglo()

        expect( typeof letters ).toBe( 'string');
        expect( typeof numbers ).toBe( 'number' );
                //            espera cualquier string/numero
        expect( letters ).toEqual( expect.any(String));
        expect( numbers ).toEqual( expect.any(Number));
    })
    
})

