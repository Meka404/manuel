import React from "react";
import "../css/Tele1.css";
import logo from "../assets/televisiva4.jpg";
export function Tele1() {
  return (
    <div className="two-columna1">
      <div className="columna1 text-columna1">
        <h1>Inspeccion de tuberias con camara de TV</h1>
        <h2><em>En DNC contamos con 10 cámaras de TV para la inspección de todo tipo de canalizaciones, ya sean redes de alcantarillado , redes de agua potable, redes contra incendios o bajantes de edificios, a partir de 2 cm hasta 2,5 m de diámetro, destacando 3 equipos preparados para trabajar en zonas industriales EX. Cabe decir que Hidrotec realiza las inspecciones de las tuberías de desagüe y sistemas de alcantarillado según norma UNE-EN 13508-2:2003.</em></h2>
      </div>
      <div className="columna1 image-columna1">
        <img src={logo} alt="Imagen" />
      </div>
    </div>
  );
}