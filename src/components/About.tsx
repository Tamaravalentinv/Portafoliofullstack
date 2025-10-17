import { useScrollReveal } from '../hooks/useScrollReveal';

export function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`section ${isVisible ? 'reveal-active' : 'reveal-hidden'}`}
    >
      <h2>Un poco de mí</h2>
      <div style={{ maxWidth: '800px' }}>
        <p>
          Soy Tamara Vega, una desarrolladora apasionada por crear soluciones tecnológicas eficientes y de alto impacto, con un enfoque principal en el desarrollo backend.
          Me motiva diseñar sistemas escalables, seguros y mantenibles, priorizando siempre la calidad del código y la experiencia del usuario.
        </p>
        <p>
          Cuento con experiencia en el uso de tecnologías como Java, Node.js, TypeScript y bases de datos relacionales y no relacionales, además de aplicar buenas prácticas como control de versiones y testing.
          Me caracteriza la constante búsqueda de aprendizaje, la adaptabilidad a nuevos entornos y el trabajo colaborativo, cualidades que me permiten aportar valor en proyectos desafiantes y orientados a resultados.
        </p>

        {/* 🔹 Nueva sección: Áreas de especialización */}
        <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>Áreas de especialización: </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <span style={{ fontSize: '1.8rem' }}>🧠</span>
            <div>
              <h4 style={{ margin: '0 0 4px' }}>Backend y arquitectura</h4>
              <p style={{ margin: 0 }}>
                Diseño de sistemas escalables y robustos usando Java, Node.js y bases de datos SQL/NoSQL.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <span style={{ fontSize: '1.8rem' }}>🎨</span>
            <div>
              <h4 style={{ margin: '0 0 4px' }}>Diseño centrado en el usuario</h4>
              <p style={{ margin: 0 }}>
                Trabajo con interfaces limpias y accesibles usando Figma y principios de diseño responsivo. Experiencia colaborando con diseñadores UI/UX.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <span style={{ fontSize: '1.8rem' }}>✅</span>
            <div>
              <h4 style={{ margin: '0 0 4px' }}>Calidad y buenas prácticas</h4>
              <p style={{ margin: 0 }}>
                Uso de herramientas como Postman, Jasmine y pruebas automatizadas para asegurar la calidad, estabilidad y seguridad del software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
