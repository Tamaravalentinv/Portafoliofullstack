import { render, screen } from '@testing-library/react';
import About from './About'; // <- ARREGLO: Se quitaron las llaves { }

describe('About', () => {
  it('muestra el título Sobre mí', () => {
    render(<About />);
    // La prueba busca un encabezado (h1, h2, etc.) que contenga "sobre mí"
    expect(screen.getByRole('heading', { name: /sobre mí/i })).toBeTruthy();
  });
});