import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas - 02-template-string', () => {
  test('should first', () => { 

    const name = 'Cesar';
    const message = getSaludo(name);
    expect(message).toBe(`Hola ${name}`)
   })
});