import React from "react";
import logo from "../assets/robot.jpg";
import "../css/Tele3.css";
export function Tele3() {
  return (
    <div className="two-columna3">
      <div className="columna3 image-columna3">
        <img src={logo} alt="Imagen" />
      </div>
      <div className="columna3 text-columna3">
        <h2>
          <em>
            Cabe decir también, que Hidrotec realiza informes de inspección
            sobre el estado de la red de saneamiento para la ITE (Inspección
            Técnica de Edificios), según Decreto 67/2015. Los informes de
            inspección se entregan en formato DVD mediante software
            especializado WinCan 8 Viewer, que permite imprimir informes de la
            totalidad o de sólo algunos de los tramos inspeccionados, así como
            visualizar las grabaciones en formato MPEG y las fotografías en
            formato JPG. Hidrotec es la única empresa del sector en Catalunya
            que dispone de 14 equipos de inspección de tuberías con cámara de
            TV, con licencias oficiales para la realización de informes técnicos
            según norma UNE-EN 13508-2:2003.
          </em>
        </h2>
      </div>
    </div>
  );
}