import React from "react";
import { Navigation } from "../components/Navigation";
import { Navigation2 } from "../components/Navigation2";
import { Portada } from "../components/Portada";
import { Mision } from "../components/Mision";



import { Us } from "../components/Us";
import { Uss } from "../components/Uss";
import { Empresas } from "../components/Empresas";
import { Destacados } from "../components/Destacados";
import "../css/Empresas.css";
import "../css/Us.css";
import { Usss } from "../components/Usss";
import "../css/Usss.css";
import { Footer } from "../components/Footer";
export function Principal() {
  return (
    <div>
      <Portada></Portada>
      <Mision></Mision>
      <Us></Us>
      <Uss></Uss>
      <Destacados></Destacados>

      <Empresas></Empresas>
      <Footer></Footer>
    </div>
  );
}
