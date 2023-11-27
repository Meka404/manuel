import React from "react";
import topografia1 from "../assets/topografia1.jpg";
import dron1 from "../assets/drones1.jpg";

export function Topografia1() {
  return (
    <div>
      <h1 id="topografia1-titulo">SERVICIOS TOPOGRAFICOS</h1>
      <h2 id="topografia1-tec3">
        <em>
          Creada por un equipo de ingenieros civiles altamente especializados en
          Mecánica de Suelos, Ingeniería Geotécnica, Topografía y Geodesia,
          nuestra empresa se dedica a ofrecer servicios topográficos avanzados
          con el uso de tecnología de vanguardia, incluyendo drones y equipos
          especializados.
        </em>
      </h2>
      <br></br>
      <h2 id="topografia1-tec3">
        <em>
          Nuestro propósito es brindar a nivel nacional e internacional el vasto
          conocimiento y experiencia de cada uno de nuestros profesionales en la
          ejecución de proyectos. Trabajamos en estrecha colaboración como un
          equipo cohesionado, lo que garantiza una planificación meticulosa y
          una ejecución precisa en cada estudio que llevamos a cabo.
        </em>
      </h2>
      <br></br>
      <h2 id="topografia1-tec3">
        <em>
          Nuestra filosofía de trabajo se basa en la perseverancia, la
          competitividad, el trabajo en equipo y una profunda sensibilidad
          social. Nuestro objetivo principal es cumplir con las necesidades y
          expectativas de nuestros clientes, proporcionando soluciones de alta
          calidad que contribuyan al éxito de sus proyectos.
        </em>
      </h2>
        <br></br>
        <br></br>
      <ul className="topografia1-list">
        <li>Topografia con drones</li>
        <li>Rectificaciones catastrales</li>
        <li>
          Proyectos de parcelación, segregación, concentración parcelaria,
          agrupación y deslindes.
        </li>
        <li>
          Documentación necesaria para herencias, divorcios y compra-venta.
        </li>
      </ul>
      <div className="two-topografia1">
        <div className="columna-topografia1">
          <h1>TOPOGRAFIA CON DRONES </h1>
          <h2>
            Los drones pueden utilizarse para realizar levantamientos
            topográficos de grandes áreas en las que, de otro modo, los métodos
            tradicionales llevarían mucho tiempo. El dron recoge fotografías
            digitales, con puntos de control marcados en el suelo y coordinados.
            Utilizando los mismos principios de la fotogrametría tradicional, se
            crea un modelo digital del terreno que registra la topografía del
            terreno.
          </h2>
          <h2>
            Los drones pueden ser útiles en otros tipos de levantamientos, como
            los de edificios, en los que pueden inspeccionarse tejados
            inaccesibles, y en los de canteras, en los que la seguridad puede
            impedir el acceso completo.
          </h2>
          <h2>VENTAJAS DE LA TOPOGRAFIA CON DRONES</h2>
          <ul className="lista2">
            <li>Reducir tiempo</li>
            <h3>
            Con un dron de levantamiento topográfico aéreo, los topógrafos
            pueden obtener una vista aérea del terreno que están inspeccionando.
            Los drones, equipados con programas informáticos específicos y los
            sensores de captura de datos adecuados (como los escáneres Lidar),
            reducen de manera importante el tiempo necesario para realizar
            levantamientos topográficos de gran precisión.
          </h3>
            <li>Enlace con puntos de control terrestres</li>
            <h3>
            Los puntos de control terrestre (GCP) son esenciales para garantizar
            la precisión de un levantamiento topográfico dirigido por dron.
            Mediante un programa especializado, un dron puede vincular su
            captura de datos con orto fotos y nubes de puntos geo localizadas
            con precisión.
          </h3>
            <li>Mayor seguridad</li>
            <h3>
            Al confiar la captura masiva de datos de un levantamiento
            topográfico a un dron, los topógrafos ya no tienen que recopilar
            datos manualmente en zonas peligrosas del terreno o su entorno. Esto
            hace que el todo el proceso sea mucho más seguro y mantenga a los
            profesionales de campo seguros sobre el terreno.
          </h3>
            <li>Accesibilidad</li>
            <h3>
            Otra de las ventanas de este tipo de medición cartográfica es que se
            puede llegar a lugares inaccesibles debido a un terreno poco firme o
            de gran pendiente evitando, en trabajos puntuales, el corte de
            carreteras o vías de ferrocarril.{" "}
          </h3>
          </ul>
        </div>
        <div className="image-topografia1">
          <img src={dron1} alt="Imagen" />
        </div>
      </div>
      <div>
        <h1 id="topografia1-tec">¿Necesitas un Servicio topografico?</h1>
        <h2 id="topografia1-tec2">
          Somos líderes en servicios topográficos y ofrecemos una amplia gama de
          servicios especializados para garantizar la calidad del entorno
          natural y la salud de las comunidades que lo rodean. Confía en nuestro
          equipo de expertos para brindarte soluciones integrales y precisas en
          el campo de la topografía y el medio ambiente. En DNC, estamos
          comprometidos con la excelencia en la gestión del entorno natural y la
          sostenibilidad de las comunidades.
        </h2>
      </div>
    </div>
  );
}