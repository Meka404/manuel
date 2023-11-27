import React, { useState } from "react";
import "../css/Direccion1.css";

export function Direccion1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const downloadTxtFile = () => {
    const data = { name, email, query };

    fetch('/guardar-datos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        // Aquí podrías realizar alguna acción adicional si lo deseas
      })
      .catch((error) => {
        console.error('Error de red:', error);
      });
  };

  return (
    <div className="contact-container">
      <div className="form-column">
        <h2>ENVIANOS UN MENSAJE</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="query">Consulta:</label>
            <textarea
              id="query"
              name="query"
              placeholder="Escribe tu consulta aquí"
              value={query}
              onChange={handleQueryChange}
            ></textarea>
          </div>
          <button type="button" onClick={downloadTxtFile}>
            Descargar Datos
          </button>
        </form>
      </div>
      <div className="map-column">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.6423138725163!2d-77.06550682579496!3d-11.999233541015832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf6a59ccb081%3A0x57730b28da49eeed!2sDELIMA%20NORTE%20CONSTRUCCIONES!5e0!3m2!1ses!2spe!4v1698070147515!5m2!1ses!2spe"
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
