import { useScrollReveal } from '../hooks/useScrollReveal'
import project1Img from "../assets/img/project1.svg.jpg";
import project2Img from "../assets/img/project2.svg.jpg";
import project3Img from "../assets/img/project3.svg.jpg";

type Project = {
  title: string
  description: string
  tech: string[]
  image: string
  link?: string
}

const sample: Project[] = [
  { 
    title: 'Portafolio Web.', 
    description: 'Portafolio personal creado para demostrar mis competencias en el desarrollo full-stack. El frontend fue construido con React y TypeScript, con un enfoque en el diseño responsivo y la calidad del código, validada mediante pruebas unitarias con Jasmine y Karma.',
    tech: ['React', 'TypeScript', 'Vite'],
    image: project1Img,
    link: 'https://github.com/Tamaravalentinv/Portafoliofullstack' // 🔗 agrega aquí tu enlace real
  },
  { 
    title: 'Perfulandia.', 
    description: 'API REST para un e-commerce de perfumería, diseñada para gestionar un catálogo completo de productos. La plataforma soporta la administración total del inventario, permitiendo añadir, modificar y eliminar fragancias a través de endpoints documentados con Swagger y probados con Postman.',
    tech: ['API REST', 'Endpoints', 'Swagger (OpenAPI)', 'XAMPP'],
    image: project2Img,
    link: 'https://github.com/Tamaravalentinv/ProyectoPerfulandia' // 🔗 reemplaza con tu link
  },
  { 
    title: 'Level-UpGamer.', 
    description: 'E-commerce enfocado en el público gamer, con un amplio catálogo de hardware y periféricos de última generación. La plataforma cuenta con un sistema de pedidos, carrito de compras y procesamiento de pagos en línea.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: project3Img,
    link: 'https://github.com/Tamaravalentinv/Level-upgamer' // 🔗 reemplaza con tu link
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLLIElement>()
  
  return (
    <li 
      ref={ref}
      className={`card ${isVisible ? 'reveal-active' : 'reveal-hidden'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <img 
        src={project.image} 
        alt={project.title}
        style={{width:'100%', height:'200px', objectFit:'cover', borderRadius:'8px', marginBottom:'16px'}}
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div style={{marginTop:'16px', display:'flex', gap:'8px', flexWrap:'wrap'}}>
        {project.tech.map((t, j) => (
          <span key={j} style={{
            background:'var(--bg-light)', 
            padding:'4px 12px', 
            borderRadius:'16px',
            fontSize:'0.85rem',
            color:'var(--primary)',
            fontWeight:600
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* 🔹 Botón "Ver proyecto" */}
      {project.link && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--primary)',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#3e8e41')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'var(--primary)')}
          >
            🔗 Ver proyecto
          </a>
        </div>
      )}
    </li>
  )
}

export function Projects() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div ref={ref} className={`section ${isVisible ? 'reveal-active' : 'reveal-hidden'}`}>
      <h2>Soluciones desarrolladas</h2>
      <p>Cada proyecto es una oportunidad para aprender y resolver problemas. Aquí puedes ver algunos de los desafíos que he abordado recientemente.</p>
      <ul className="grid">
        {sample.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </ul>
    </div>
  )
}
