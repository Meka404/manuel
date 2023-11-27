import React from 'react'
import logo from "../assets/carro.jpg";
import "../css/Tele2.css"
export function Tele2() {
  return (
    <div className="two-columna2">
    <div className="columna2 text-columna2">
      <h1>¿En qué consiste la inspección de tuberías de agua con cámara TV?</h1>
      <h2><em>En Hidrotec disponemos de diferentes tipos de cámara de inspección de tuberías que pueden trabajar en tuberías con diámetros comprendidos entre los 2 cm y los 2,5 m, con una autonomía que puede alcanzar los 300 metros lineales de inspección, incluyendo la posibilidad de filmación en vertical. Mediante la inspección de tuberías con cámara de TV podemos detectar en las tuberías diferentes patologías, entre las que destacan fisuras y grietas, roturas, obturaciones parciales y totales, juntas abiertas e incrustaciones superficiales. Asimismo podemos analizar el nivel de degradación de la tubería y valorar el mejor método a utilizar para su rehabilitación. Contamos con equipos de inspección de tuberías con cámara de TV especiales tipo EX, que nos permiten trabajar en lugares con atmósferas explosivas, según Directiva Europea ATEX.</em></h2>
    </div>
    <div className="columna2 image-columna2">
      <img src={logo} alt="Imagen" />
    </div>
  </div>
  )
}