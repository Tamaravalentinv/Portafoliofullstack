import { useScrollReveal } from '../hooks/useScrollReveal'
import heroImage from "../assets/img/hero.svg.png";

export function Home() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      ref={ref}
      className={`section ${isVisible ? 'reveal-active' : 'reveal-hidden'}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: '48px',
        flexWrap: 'nowrap', // evita que se apilen en desktop
      }}
    >
      {/* Columna de texto */}
      <div
        style={{
          flex: '1',
          minWidth: '300px',
          maxWidth: '600px',
        }}
      >
        <h1>Hola, soy Tamara Vega 👩‍💻</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '700px', marginBottom: '32px' }}>
          Desarrolladora de software enfocada en crear experiencias de usuario limpias y accesibles. Mi conjunto de herramientas incluye <strong>React</strong>, <strong>TypeScript</strong>, <strong>Java</strong> y <strong>Python</strong>.
          Disfruto colaborar en proyectos desafiantes y estoy convencida de que la planificación y las pruebas son clave para el éxito.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <button onClick={() => window.location.href = '/proyectos'}>
            Mis proyectos
          </button>
          <button
            onClick={() => window.location.href = '/contacto'}
            style={{
              background: 'transparent',
              color: 'var(--primary)',
              border: '2px solid var(--primary)',
              boxShadow: 'none',
              fontWeight: '600',
            }}
          >
            Hablemos
          </button>
        </div>
      </div>

      {/* Columna de imagen */}
      <div
        style={{
          flex: '1',
          minWidth: '300px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src={heroImage}
          alt="Ilustración principal"
          style={{
            width: '360px',
            height: '360px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
          className="parallax-img"
        />
      </div>
    </section>
  )
}
