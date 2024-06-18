import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from '../../src/data/heroes';

describe('Pruebas 09-promesas', () => {
  test('getHeroByIdAsync debe retornar un heroe', (done) => {
    const id = 2;
    getHeroeByIdAsync(id).then(hero => {
      expect(hero).toEqual({ "id": 2, "name": "Spiderman", "owner": "Marvel" });
      done();
    })

  });
  test('getHeroByIdAsync debe obtener un error si heroe no existe', (done) => {
    const id = 100;
    getHeroeByIdAsync(id).then(
      hero => {
        expect(hero).toBeFalsy();
        done();
      }
    )
      .catch(error => {
      expect(error).toBe('No se pudo encontrar el héroe');
      done();
    })

  });
});