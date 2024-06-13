
describe('Pruebas en <MyComponent/>', () => {
  test('Esta prueba no debe fallar', () => { 
    
    //! inicializacion
    const message1 = 'Hola mundo         ';
    //! estimulo
    const message2 = message1.trim();
  
    //! Observar el comportamiento... esperado
    expect(message1).toBe(message2);
  })
})

// expect en Jest es una función que recibe un valor y retorna un objeto con funciones que permiten evaluar el valor recibido.
// toBe es una función que recibe un valor y evalúa si es igual al valor recibido en expect.