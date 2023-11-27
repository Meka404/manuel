import React from "react";
import "../css/Ambiental1.css";
import ambiental1 from "../assets/ambiental1.jpg";
import ambiental2 from "../assets/ambiental2.jpg";
import ambiental3 from "../assets/ambiental3.jpg";
import ambiental4 from "../assets/ambiental4.jpg";
export function Ambiental1() {
  return (
    <div>
      <h1 id="ambiental-titulo">Saneamiento Ambiental y su importancia</h1>

      <div className="two-ambiental">
        <div className="columna-ambiental">
          <h1>Inspeccion, evaluacion y control</h1>

          <h2>
            <em>
              Las comunidades humanas ayudan a que las personas formen una
              sociedad, sin embargo, tienen un gran impacto en el ambiente, pues
              pueden generar contaminación en el agua, aparición de
              enfermedades, problemas de basura, entre otras situaciones
              actuales. Debido a ello, existe la preocupación por ayudar a
              aminorar el impacto ambiental, por medio de medidas como el
              saneamiento ambiental, pero ¿de qué se trata este proceso?, ¿por
              qué es importante?, y ¿cuáles son las medidas con las que se
              implementan? ¡Descubre todo en Ecofiltro!
            </em>
          </h2>
          <h1> Que es el saneamiento ambiental</h1>
          <h2>
            En los últimos años, se han implementado acciones, campañas y
            dispositivos para disminuir el impacto ambiental que generan los
            humanos y ese es el trabajo del saneamiento ambiental, el cual
            engloba un conjunto de técnicas, estrategias e iniciativas sociales,
            políticas y de salud pública, cuyo propósito es mantener limpio un
            poblado o comunidad. Lo anterior se consigue por medio de un buen
            manejo de aguas negras y basura, mantenimiento de alcantarillado,
            abastecimiento de agua potable, prevención de enfermedades, etc. De
            esta forma, al realizar el saneamiento ambiental se aminoran las
            amenazas hacia la salud colectiva que pueden surgir debido a la
            contaminación del medio ambiente, por ello tanto los pueblos como
            las ciudades se pueden ver afectadas, pues sin estrategias
            adecuadas, el saneamiento sería imposible para que las personas
            tengan una mejor calidad de vida.
          </h2>
          <h1>¿Cuáles son las medidas del saneamiento ambiental?</h1>
          <ul className="ambiental-list">
            <li>Control de plagas</li>
            <h2>
              El incremento de roedores e insectos tiene el potencial de causar
              graves daños a la salud humana, principalmente en los
              asentamientos urbanos, por lo que la mitigación de plagas es una
              medida clave para este proceso.
            </h2>
            <li>Manejo de aguas negras y desagüe</li>
            <h2>
              Reducir la aparición de enfermedades por el consumo de agua
              contaminada en casas y espacios públicos, así como la transmisión
              de bacterias, virus y hongos que pueden poner en riesgo a las
              personas más vulnerables.
            </h2>
            <li>Eliminación de basura</li>
            <h2>Este punto permite manejar de forma adecuada la generación y eliminación de basura doméstica e industrial, ya que los residuos son el arma potencial para producir infecciones y riesgos a la salud.</h2>
            <li>Regulación de emisiones atmosféricas</li>
            <h2>Son políticas acordadas por el gobierno para que se implementen en los negocios, además de utilizar productos de limpieza o desinfección con poca cantidad de contaminantes para poder cuidar la calidad del suelo.</h2>
          </ul>
        </div>
        <div className="image-ambiental">
          <img src={ambiental1} alt="Imagen" />
          <img src={ambiental2} alt="Imagen" />
         
        </div>
      </div>

      <div>
        <h1 id="ambiental-tec">¿Necesitas una inspección Ambiental?</h1>
        <h2 id="ambiental-tec2">
          Si necesitas evaluar o mantener sistemas de saneamiento ambiental,
          desde la gestión de aguas residuales hasta la preservación de
          ecosistemas naturales, DNC CONSTRUCCIONES es tu socio experto. Ya sea
          que enfrentes desafíos como la prevención de contaminación, la
          restauración de hábitats degradados o la gestión de vertidos, nuestro
          equipo de profesionales está preparado para brindarte soluciones
          integrales y sostenibles. Confía en nosotros para garantizar la
          calidad del entorno natural y la salud de las comunidades que lo
          rodean.
        </h2>
      </div>
    </div>
  );
}