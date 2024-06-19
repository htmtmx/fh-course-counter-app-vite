import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';
import { getAllByText } from '@testing-library/react';

describe('Prueba FirstApp2', () => {
  const title = 'Presentación';
  const name = 'Cesar';
  const subtitle = 'Soy un subtitulo';
  test('Debe de hacer match con el snapsot', () => { 

    const { container } = render(<FirstApp name={name} title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el mensaje Presentacion', () => {
    render(<FirstApp title={title} name={name} />);
    // screen.debug();
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('Debe mostrar el titulo en un h1', () => {
    render(<FirstApp title={title} name={name} />);
    //! Forma básica de como resolver el test mediante un testId
    // expect(screen.getByTestId('test-title').innerHTML).toBe('Presentación');

    //! Forma de acceder al elemento HTML h1 y verificar el contenido del mismo
    expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
  });
  test('Debe mostrar el subtitulo enviado por props', () => {
    render(<FirstApp title={title} name={name} subtitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});