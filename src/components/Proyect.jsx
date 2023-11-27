import React from "react";
import "../css/Proyect.css";
import televisiva1 from "../assets/televisiva1.jpg";
import televisiva2 from "../assets/televisiva2.jpg";
import televisiva3 from "../assets/televisiva3.jpg";
import balde1 from "../assets/balde-arrastre.jpg";
import agua from "../assets/agua.jpg";
import robert from "../assets/fondo-negro.jpg";
import foto7 from "../assets/foto7.jpg";
import foto8 from "../assets/foto8.jpg";
import foto9 from "../assets/foto9.jpg";
import { Container } from "react-bootstrap";

export const Proyect = () => {
  const cardsData = [
    { id: 1, image: foto8, text: "ACCIONA AGUA S.A." },
    { id: 2, image: foto8, text: "CONTRALORIA GENERAL DE LA REPUBLICA" },
    { id: 3, image: foto8, text: "CONTRALORIA GENERAL DE LA REPUBLICA" },
    { id: 4, image: foto8, text: "Cabo verde S.A" },
    { id: 5, image: foto8, text: "CONSORCIO SANEAMIENTO LIMA NORTE LOTE 03" },
    { id: 6, image: foto8, text: "CONSORCIO LIMA NORTE LOTE 2" },
    { id: 7, image: foto8, text: "CONSORCIO JULIACA" },
    { id: 8, image: foto8, text: "GITEC CONSULT GMBH" },
    { id: 9, image: foto8, text: "CONSORCIO PUCALLPA" },
    { id: 10, image: foto8, text: "proyecto 10" },
    { id: 11, image: foto8, text: "proyecto 11" },
  ];

  return (
    <div className="cardp-grid">
      {cardsData.map((card) => (
        <div className="cardp" key={card.id}>
          <div className="image-container">
            <img src={card.image} alt={`Imagen ${card.id}`} />
            <div className="text-overlay">
              <p>{card.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
