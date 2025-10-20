import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const { ref, isVisible } = useScrollReveal()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validar que el email tenga un solo '@' y termine en .com o .cl
    const emailPattern = /^[^\s@]+@[^\s@]+\.(com|cl)$/i

    if (!emailPattern.test(email)) {
      alert('Por favor, ingresa un correo válido que contenga un solo "@" y termine en ".com" o ".cl"')
      return
    }

    setSent(true)
  }

  return (
    <div
      ref={ref}
      className={`section ${isVisible ? 'reveal-active' : 'reveal-hidden'}`}
    >
      <h2>¡Tu próximo proyecto empieza aquí!</h2>

      <div
        style={{
          width: '100%',
          maxWidth: '900px',
          minWidth: '320px',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '32px',
          background: 'var(--bg-card)',
          borderRadius: '16px',
          boxShadow: '0 4px 24px rgba(0,123,255,0.10)',
          padding: '32px',
          margin: '0 auto',
        }}
      >
        {/* FORMULARIO */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {sent ? (
            <div style={{ maxWidth: '500px' }}>
              <p style={{ fontSize: '1.2rem', color: 'var(--secondary)' }}>
                Gracias por tu mensaje, <strong>{name || 'amig@'}</strong>! Me emociona la idea de una posible colaboración, te responderé a la brevedad.
              </p>
              <button onClick={() => setSent(false)} style={{ marginTop: '16px' }}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <>
              <p style={{ maxWidth: '500px' }}>
                ¿Tienes alguna idea en mente o simplemente quieres crear algo genial juntos? ¡Hablemos! Rellena este formulario y me pondré en contacto contigo.
              </p>
              <form onSubmit={onSubmit} className="contact-form" style={{ maxWidth: '500px', width: '100%' }}>
                <label>
                  Nombre
                  <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Tu nombre"
                    required
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="tucorreo@ejemplo.com"
                    required
                  />
                </label>
                <label>
                  Mensaje
                  <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    rows={5}
                    placeholder="Cuéntame sobre tu idea."
                    required
                  />
                </label>
                <button type="submit">Enviar Mensaje</button>
              </form>
            </>
          )}
        </div>

        {/* INFORMACIÓN DE CONTACTO */}
        <div
          className="contact-info"
          style={{
            minWidth: '260px',
            maxWidth: '340px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '18px',
            justifyContent: 'center',
            padding: '16px 0',
          }}
        >
          <h3 style={{ color: 'var(--primary)', fontWeight: 700, marginBottom: '8px' }}>
            Información de contacto
          </h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Ícono teléfono SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.41 12.41 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9 9a16 16 0 0 0 6 6l.36-.36a2 2 0 0 1 2.11-.45 12.41 12.41 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span style={{ fontSize: '1rem', fontWeight: 500 }}>+56 9 7950 3776</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Ícono GitHub con React Icons */}
            <FaGithub size={22} color="var(--primary)" />
            <a
              href="https://github.com/Tamaravalentinv"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '1rem', color: 'var(--primary)', fontWeight: 600 }}
            >
              Tamaravalentinv
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Ícono Email con React Icons */}
            <MdEmail size={22} color="var(--primary)" />
            <a
              href="mailto:tamara.vegareyes@gmail.com"
              style={{ fontSize: '1rem', color: 'var(--primary)', fontWeight: 600 }}
            >
              tamara.vegareyes@gmail.com
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1rem', fontWeight: 600 }}>Ubicación:</span>
            <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Santiago, Chile.</span>
          </div>

          <div style={{ marginTop: '8px', textAlign: 'left', width: '100%' }}>
            <span style={{ fontWeight: 600, color: 'var(--accent)' }}>Horario de atención</span>
            <div style={{ fontSize: '0.98rem', color: 'var(--text-secondary)' }}>
              Lunes a Viernes : 9:00 - 18:00 hrs.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
