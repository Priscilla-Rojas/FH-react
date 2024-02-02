import { getHeroeById, getHeroesByOwner } from "../../src/base--pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas 08-imp-exp', () => {
  test('getHeroeById debe retornar un heroe por ID', () => { 
    const id = 1;
    const hero = getHeroeById( id );
    console.log(hero)
    expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  })
  test('getHeroeById debe retornar undefined si no existe el heroe', () => { 
    const id = 20;
    const hero = getHeroeById( id );
    // expect( hero ).toBeFalsy()
    expect( hero ).toBe( undefined )
  })

  test('getHeroesByOwner debe retonar un arreglo con los eroes de DC, de 3 heroes y debe compararlos', () => {
    
    const owner = 'DC';
    const hero = getHeroesByOwner(owner);
    const heroesCompartion =  [
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ]

    expect( hero.length).toBe( 3 )
    expect( hero ).toEqual( heroesCompartion )
    expect( hero ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) )

  })
  test('getHeroesByOwner debe retonar un arreglo con los eroes de Marvel, de 2 heroes', () => {
    
    const company = 'Marvel';
    const heroes = getHeroesByOwner(company);
    

    console.log(heroes)
    expect( heroes.length).toBe( 2 )

  })
  

})
