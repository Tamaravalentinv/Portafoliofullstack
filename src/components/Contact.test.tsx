import { render, screen } from '@testing-library/react';
import Contact from '../Contact'; // CORRECCIÓN: Ruta y tipo de importación

describe('Contact', () => {
  it('muestra el formulario de contacto', () => {
    render(<Contact />);
    // Verifica que el título del formulario esté presente
    expect(screen.getByRole('heading', { name: /contacto/i })).toBeTruthy();
    // Verifica que existan campos para el nombre y el mensaje
    expect(screen.getByPlaceholderText(/tu nombre/i)).toBeTruthy();
    expect(screen.getByPlaceholderText(/tu mensaje/i)).toBeTruthy();
  });

  it('el botón de enviar está presente', () => {
    render(<Contact />);
    expect(screen.getByRole('button', { name: /enviar mensaje/i })).toBeTruthy();
  });
});