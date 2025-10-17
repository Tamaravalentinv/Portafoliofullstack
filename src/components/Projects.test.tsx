import { render, screen } from '@testing-library/react';
import Projects from '../Projects'; // CORRECCIÓN: Ruta y tipo de importación

describe('Projects', () => {
  it('lista proyectos de ejemplo', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /proyectos/i })).toBeTruthy();
    // Comprueba que al menos el primer proyecto aparece
    expect(screen.getByText(/portafolio web/i)).toBeTruthy();
  });

  it('muestra tecnologías usadas', () => {
    render(<Projects />);
    const techTags = screen.getAllByText(/react/i);
    expect(techTags.length).toBeGreaterThan(0);
  });
});