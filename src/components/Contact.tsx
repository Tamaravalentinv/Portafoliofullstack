import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const { ref, isVisible } = useScrollReveal()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // En un caso real, aquí enviarías el formulario a un backend o servicio
    setSent(true)
  }

  return (
    <div ref={ref} className={`section ${isVisible ? 'reveal-active' : 'reveal-hidden'}`}>
      <h2>¡Tu próximo proyecto empieza aquí!</h2>
      {sent ? (
        <div style={{maxWidth:'600px'}}>
          <p style={{fontSize:'1.2rem', color:'var(--secondary)'}}>
            Gracias por tu mensaje, <strong>{name || 'amig@'}</strong>! Me emociona la idea de una posible colaboración, te responderé a la brevedad.
          </p>
          <button onClick={() => setSent(false)} style={{marginTop:'16px'}}>
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <div>
          <p style={{maxWidth:'600px'}}>
            ¿Tienes alguna idea en mente o simplemente quieres crear algo genial juntos? ¡Hablemos! 
            Rellena este formulario y me pondré en contacto contigo.
          </p>
          <form onSubmit={onSubmit} className="contact-form">
            <label>
              Nombre
              <input value={name} onChange={e=>setName(e.target.value)} placeholder="Tu nombre" required />
            </label>
            <label>
              Email
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="tucorreo@ejemplo.com" required />
            </label>
            <label>
              Mensaje
              <textarea value={message} onChange={e=>setMessage(e.target.value)} rows={5} placeholder="Cuéntame sobre tu idea." required />
            </label>
            <button type="submit">Enviar Mensaje</button>
          </form>
        </div>
      )}
    </div>
  )
}
