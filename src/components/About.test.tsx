import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('muestra el título Un poco de mí', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /un poco de mí/i })).toBeTruthy();
  });
});
