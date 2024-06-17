import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
import heroes from "../../src/data/heroes";

// eslint-disable-next-line no-undef
describe('Prueba 08-imp-exp', () => { 
  // eslint-disable-next-line no-undef
  test('getHeroById debe retornar un heroe por ID', () => {
    const testId = 2;
    const hero = getHeroeById(testId);
    // eslint-disable-next-line no-undef
    expect(hero).toStrictEqual({ id: 2, name: 'Spiderman', owner: 'Marvel' });
  });
  // eslint-disable-next-line no-undef
  test('getHeroById debe regresar undefined si no existe el superheroe', () => {
    const hero = getHeroeById(39);
    // eslint-disable-next-line no-undef
    expect(hero).toBe(undefined);
    //! Para evitar el uso de undefined con toBe(undefined), usamos toBeFalsy()
    //! el cual checa si el valor es undefined, null, 0, '', NaN
    // eslint-disable-next-line no-undef
    expect(hero).toBeFalsy();
  });

  // eslint-disable-next-line no-undef
  test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
    const owner = 'DC';
    const dcHeroes = getHeroesByOwner(owner);

    // eslint-disable-next-line no-undef
    expect(dcHeroes.length).toBe(3);
    // eslint-disable-next-line no-undef
    expect(dcHeroes).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ]);
    
    // eslint-disable-next-line no-undef
    expect(dcHeroes).toEqual(heroes.filter((heroe) => heroe.owner === owner))
    
  })

  // eslint-disable-next-line no-undef
  test('getHeroesByOwner debe retornar los heroes de Marvel', () => { 
    const owner = 'Marvel';
    const marvelHeroes = getHeroesByOwner(owner);

    // eslint-disable-next-line no-undef
    expect(marvelHeroes.length).toBe(2);

    // eslint-disable-next-line no-undef
    expect(marvelHeroes).toEqual(heroes.filter((heroe)=> heroe.owner === owner));

   })

})