import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas 11-async-await', () => {
  
  test('getImagen debe retornar una url de la imagen', async() => {
    const url = await getImagen();
    expect(typeof url).toBe('string');
  });

});