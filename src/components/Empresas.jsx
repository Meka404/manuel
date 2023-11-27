// import Container from "react-bootstrap/esm/Container"
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import empresas from "../assets/unidos2.png";
export const Empresas = () => {
  return (
   
    <div className="empresas">
     
        <h1>Nuestros cliente nos avalan</h1>
        <h5 id="innovacion">
          <em>Nuestros clientes anteriores han expresado su satisfacción con nuestros servicios, destacando nuestra profesionalidad, atención personalizada y resultados excepcionales.
        Hemos completado con éxito numerosos proyectos de mantenimiento de alcantarillados para diversas industrias, demostrando nuestra capacidad para abordar una variedad de desafíos.

          </em>
        </h5>
        <img src={empresas} alt="Imagen de la segunda columna" />
     
    </div>
  
  );
};
