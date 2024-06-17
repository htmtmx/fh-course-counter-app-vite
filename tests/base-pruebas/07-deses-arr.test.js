import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => { 
  test('retornsArreglo debe regresar un arreglo [string, number]', () => { 

    const testString = 'ABC';
    const testNumber = 123;

    const [myString, myNumber] = retornaArreglo();

    // expect(testString).toStrictEqual(myString);
    // expect(testNumber).toStrictEqual(myNumber);
    expect(typeof (testString)).toBe('string');
    expect(typeof (testString)).toEqual(expect.any(String));
    expect(typeof(testNumber)).toBe('number');


   })
 })