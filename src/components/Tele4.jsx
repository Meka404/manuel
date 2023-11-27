import React from "react";
import "../css/Tele4.css";
import imagen5 from "../assets/agua.jpg";
import caja from "../assets/caja.jpg";
import pescado from "../assets/pescado.jpg";
import bicamara from "../assets/bicamara.jpg";
export function Tele4() {
  return (
    <div>
      <h1 id="nos-tec">
        ¿Qué tecnología usamos en una inspección de saneamiento de tuberías con
        cámara TV?
      </h1>
      <div className="two-columna4">
        <div className="columna4 text-columna4">
          <h1>Furgón laboratorio</h1>
          <h2>
            <em>
              Hidrotec cuenta con 5 vehículos laboratorio desde los cuales se
              controlan las cámaras para inspección de tuberías, permitiendo
              realizar inspecciones en tuberías con un diámetro mínimo de 100 mm
              y una longitud de hasta 300 m. Cabe destacar el hecho que el tipo
              montaje de estos vehículos permite transformar los equipos de
              inspección de tuberías con cámara de TV en equipos totalmente
              portátiles.
            </em>
          </h2>
          <h1>Principales características del furgón laboratorio:</h1>
          <ul className="tele4-list">
            <li>Alto rendimiento</li>
            <li>Capacidad de accesos a zonas de reducidas dimensiones</li>
            <li>Control y grabación de la inspección en tiempo real</li>
          </ul>
          <h1>Cámaras de TV no robotizadas</h1>
          <h2>
            Disponemos de cámaras de TV no robotizadas portátiles que nos
            permiten realizar inspecciones en el interior de tuberías con
            diámetros entre los 25 y los 220 mm. La autonomía de estas cámaras
            alcanza los 60 m lineales. Estos equipos posibilitan también la
            inspección y filmación de tuberías verticales e inclinadas y la
            superación de codos. Asimismo, disponen de lentes oscilatorias para
            la filmación hacia atrás y permiten el acoplamiento de un emisor
            sonda de 512 kHz para la detección del trazado de las tuberías.
          </h2>
          <h1>Principales características de la cámara TV no robotizada:</h1>
          <ul className="tele4-list">
            <li>Capacidad de inspección en vertical y horizontal</li>
            <li>
              Posibilidad de inspección de tuberías a partir de diámetros de 2,5
              cm
            </li>
            <li>Permite acoplamiento de sistema localizador</li>
          </ul>

          <h1>Cámaras de TV robotizadas</h1>
          <h2>
            Las cámaras de inspección de tuberías nos permiten inspeccionar y
            filmar el interior de todo tipo de canalizaciones, con diámetros
            entre los 100 mm y los 2,5 m. Tienen una autonomía de hasta 300 m
            lineales. Disponen de cabezales rotativos de 360º, zoom óptico de 12
            m, visión axial, iluminación LED y software de medición de
            pendientes. Además, el sistema tractor permite salvar obstáculos y
            elevar la cámara de inspección de tuberías por encima del agua. Son
            equipos del tipo EX, cumplen la Directiva Europea ATEX que permite
            su utilización en ambientes con atmósferas explosivas.
          </h2>
          <h1>Principales características de la cámara TV robotizada:</h1>
          <ul className="tele4-list">
            <li>Autonomía de hasta 300 m de inspección</li>
            <li>
              Posibilidad de inspección en contextos con atmósferas explosivas
            </li>
            <li>Permite acoplamiento del sistema perfilador láser</li>
          </ul>

          <h1>Perfilador láser</h1>
          <h2>
            Disponemos de 2 equipos con perfilador láser para realizar
            mediciones de las deformaciones de tuberías de entre 150 y 1.100 mm
            de diámetro. Mediante software se registra la información captada y
            junto con las imágenes grabadas por la cámara de inspección, nos
            permite obtener una imagen 3D de la red, así como las medidas
            relativas del tubo.
          </h2>
          <h1>Principales características del perfilador láser:</h1>
          <ul className="tele4-list">
            <li>Sistema acoplable a cámaras robotizadas de inspección</li>
            <li>Obtención de imágenes 3D de la tubería</li>
            <li>Permite medir deformaciones y defectos del tubo</li>
          </ul>

          <h1>Unidad de control</h1>
          <h2>
            Hidrotec dispone de unidades portátiles para el control de los
            equipos de inspección con cámara inspección de tuberías y robot
            fresador.
          </h2>
          <h1>Principales características de una unidad de control:</h1>
          <ul className="tele4-list">
            <li>Portabilidad</li>
            <li>
              Consola ergonómica para el correcto control de las operaciones
            </li>
            <li>Pantalla LCD</li>
          </ul>

          <h1>Software de inspección de tuberías</h1>
          <h2>
            Utilizamos WinCan Viewer, software especializado en la inspección y
            gestión de redes de aguas residuales. Esta herramienta recoge los
            datos de la inspección de canalizaciones, los organiza y genera
            informes. Estos informes muestran el tramo de tubería inspeccionado
            de manera gráfica, localizando las patologías encontradas.
          </h2>
          <h1>
            Principales características del software de inspección de tuberías:
          </h1>
          <ul className="tele4-list">
            <li>Compatibilidad</li>
            <li>Generación de informes de inspección</li>
            <li>Gestión de redes de saneamiento</li>
          </ul>
        </div>
        <div className="columna4 image-columna4">
          <img src={imagen5} alt="Imagen" />
          <img src={caja} alt="Imagen" />
          <img src={pescado} alt="Imagen" />
          <img src={bicamara} alt="Imagen" />
        </div>
      </div>
      <div>
        <h1 id="nos-tec">¿Necesitas una inspección de saneamiento de tuberías de agua con cámara TV?</h1>
        <h2 id="nos-tec2">Si te hace falta revisar los sistemas de alcantarillado o las cañerías de agua porque sospechas de posibles fugas de agua o cualquier otra incidencia como grietas u obturaciones, en Hidrotec, somos expertos.</h2>
      </div>
    </div>
  );
}