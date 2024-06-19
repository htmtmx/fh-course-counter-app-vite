
import { render, screen,fireEvent } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas CounterApp', () => {
  const value = 100;
  test('CounterApp debe hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe tener un valor inicial de 100', () => {
    render(<CounterApp value={value} />);
    expect(screen.getByText(value).innerHTML).toBe('100');
    expect(screen.getByText(value)).toBeTruthy();
    expect(screen.getByTestId('valueCounter').innerHTML).toContain('100');
    expect(screen.getByRole('heading',{level: 2}).innerHTML).toContain('100');
  });

  test('Debe de incrementar con el boton +1', () => { 
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('101')).toBeTruthy();
  });

  test('Debe de decrementar con el boton -1', () => { 
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText('99')).toBeTruthy();
  })
  
  test('Debe resetear al valo inicial', () => { 
    render(<CounterApp value={value} />);
    // fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    expect(screen.getByText('100')).toBeTruthy();
   })
});