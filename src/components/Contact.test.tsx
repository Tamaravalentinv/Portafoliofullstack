import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('muestra el formulario de contacto', () => {
    render(<Contact />);
    // Verifica que el título del formulario esté presente
    expect(screen.getByRole('heading', { name: /tu próximo proyecto empieza aquí/i })).toBeTruthy();
    // Verifica que existan campos para el nombre y el mensaje
    expect(screen.getByPlaceholderText(/tu nombre/i)).toBeTruthy();
    expect(screen.getByPlaceholderText(/cuéntame sobre tu idea/i)).toBeTruthy();
  });

  it('el botón de enviar está presente', () => {
    render(<Contact />);
    expect(screen.getByRole('button', { name: /enviar mensaje/i })).toBeTruthy();
  });
});
