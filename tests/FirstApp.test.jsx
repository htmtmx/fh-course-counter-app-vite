import { render } from "@testing-library/react";
import { FirstApp } from '../src/FirstApp';

// eslint-disable-next-line no-undef
describe('Pruebas en FirstApp', () => {
  // eslint-disable-next-line no-undef
  test('Debe hacer match con el snapshot', () => {
    
    const title = 'Presentación:';
    const name = 'Hola soy Cesar'
    const { container } = render(<FirstApp name={name} title={title} />);
    // eslint-disable-next-line no-undef
    expect(container).toMatchSnapshot();
  });
  // eslint-disable-next-line no-undef
  test('Debe de mostrar el titulo en un h1', () => { 
    const title = 'Presentación:';
    const name = 'Hola soy Cesar'
    const { container, getByText } = render(<FirstApp name={name} title={title} />);
    // eslint-disable-next-line no-undef
    expect(getByText(title)).toBeTruthy();
    
    const h1 = container.querySelector('h1');
    // eslint-disable-next-line no-undef
    expect(h1.innerHTML).toContain(title);
    // expect(h1)
   })
});