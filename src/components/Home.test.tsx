import { render, screen } from '@testing-library/react';
import Home from '../Home'; // CORRECCIÓN #1 y #2

describe('Home', () => {
  it('renderiza el título', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /hola, soy francisco/i })).toBeTruthy();
  });

  it('muestra botones de acción', () => {
    render(<Home />);
    expect(screen.getByText(/ver proyectos/i)).toBeTruthy();
    expect(screen.getByText(/contactar/i)).toBeTruthy();
  });
});