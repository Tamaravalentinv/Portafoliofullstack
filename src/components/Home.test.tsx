import { render, screen } from '@testing-library/react'
import { Home } from './Home'

describe('Home', () => {
  it('renderiza el título', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /hola, soy Tamara Vega/i })).toBeTruthy()
  })

  it('muestra botones de acción', () => {
    render(<Home />)
    expect(screen.getByText(/mis proyectos/i)).toBeTruthy()
    expect(screen.getByText(/hablemos/i)).toBeTruthy()
  })
})
