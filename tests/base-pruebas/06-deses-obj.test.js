import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas - 06-deses-obj', () => {
  test('usContext debe regresar un objeto', () => { 
    const clave = 'MX-024593';
    const edad = 32;
    const testObj = {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232
      },
    }
    console.log(testObj)
    const myObj = usContext({clave, edad});
    expect(testObj).toStrictEqual(myObj);

  })
})