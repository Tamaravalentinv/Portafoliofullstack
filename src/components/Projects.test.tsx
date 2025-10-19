import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('lista proyectos de ejemplo', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: /soluciones desarrolladas/i })).toBeTruthy();
    expect(screen.getByText(/portafolio web\.?/i)).toBeTruthy();
  });

  it('muestra tecnologías usadas', () => {
    render(<Projects />);
    const techTags = screen.getAllByText(/react/i);
    expect(techTags.length).toBeGreaterThan(0);
  });
});
