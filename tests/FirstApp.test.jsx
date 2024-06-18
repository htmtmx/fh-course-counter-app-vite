import { render } from "@testing-library/react";
import { FirstApp } from '../src/FirstApp';

// eslint-disable-next-line no-undef
describe('Pruebas en FirstApp', () => {
  // eslint-disable-next-line no-undef
  test('Debe hacer match con el snapshot', () => {
    
    const title = 'Sola soy Cesar';
    const name = 'Cesar'
    render(<FirstApp name={name} title={title} />);

  });
});