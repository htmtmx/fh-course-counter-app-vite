import { getAllByText, render } from "@testing-library/react";
import { FirstApp } from '../src/FirstApp';

// eslint-disable-next-line no-undef
describe('Pruebas en FirstApp', () => {
  // eslint-disable-next-line no-undef
  // test('Debe hacer match con el snapshot', () => {
    
  //   const title = 'Presentación:';
  //   const name = 'Hola soy Cesar'
  //   const { container } = render(<FirstApp name={name} title={title} />);
  //   // eslint-disable-next-line no-undef
  //   expect(container).toMatchSnapshot();
  // });
  // eslint-disable-next-line no-undef
  test('Debe de mostrar el titulo en un h1', () => { 
    const title = 'Presentación:';
    const name = 'Hola soy Cesar'
    const { container, getByText, getByTestId } = render(<FirstApp name={name} title={title} />);
    // eslint-disable-next-line no-undef
    expect(getByText(title)).toBeTruthy();
    // eslint-disable-next-line no-undef
    expect(getByTestId('test-title').innerHTML).toBe(title);
    
    // const h1 = container.querySelector('h1');
    // // eslint-disable-next-line no-undef
    // expect(h1.innerHTML).toContain(title);
    
  })
  // eslint-disable-next-line no-undef
  test('Debe de mostrar el subtitulo enviado por props', () => {
    const title = 'Presentación:';
    const name = 'Cesar';
    const subtitle = 'Subtitulo lorem';
    // const { getByText } = render(
    const { getAllByText } = render(
      <FirstApp
      title={title}
      name={name}
      subtitle={subtitle}
      />)
    // eslint-disable-next-line no-undef
    // expect(getByText(subtitle)).toBeTruthy();
    //! Cuando hay más de un elemento en el render de nuestro componente
    //! podemos hacer uso de getAllByText()
    expect(getAllByText(subtitle).length).toBe(2);
  });
});