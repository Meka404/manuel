import React from "react";
import "../css/Direccion1.css";

export function Direccion1() {
  return (
    <div className="contact-container">
      <div className="form-column">
        <h2>ENVIANOS UN MENSAJE</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" placeholder="Tu nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu correo electrónico"
            />
          </div>
          <div className="form-group">
            <label htmlFor="query">Consulta:</label>
            <textarea
              id="query"
              name="query"
              placeholder="Escribe tu consulta aquí"
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="map-column">
    

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.6427801601892!2d-77.06431933037923!3d-12.004150187485953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cefbc205f851%3A0xc80ee4f7021d4a4c!2sJr%20Isaac%20Newton%207109%2C%20Lima%2015302!5e0!3m2!1ses-419!2spe!4v1697305889437!5m2!1ses-419!2spe"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
