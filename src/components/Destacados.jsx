import React from "react";
import red1 from "../assets/televisiva12.jpg";
import red2 from "../assets/dron3.jpg";
import red3 from "../assets/ambiental3.jpg";
export function Destacados() {
  return (
    <div>
      <div className="eligen">
        <h1>Servicios destacados</h1>
      </div>
      <div className="card-group">
        <div className="card">
          <a href="/tele">
            <img src={red1} alt="Tarjeta 1" className="card-image" />
            <div className="card-content">
              <h3 className="card-titlem">INSPECCION TELEVISIVA</h3>
              <p className="card-description">
              En DNC contamos con 10 cámaras de TV para la inspección de todo
                tipo de canalizaciones, ya sean redes de alcantarillado , redes
                de agua potable, redes contra incendios o bajantes de edificios.
              </p>
            </div>
          </a>
        </div>

        <div className="card">
        <a href="/ambiental">
          <img src={red3} alt="Tarjeta 2" className="card-image" />
          <div className="card-content">
            
              <h3 className="card-titlem">SANEAMIENTO AMBIENTAL</h3>
           
            <p className="card-description">
              Trabajamos incansablemente para preservar la salud de nuestros
              ecosistemas y comunidades. Desde la gestión de residuos hasta la
              prevención de la contaminación.
            </p>
          </div>
          </a>
        </div>

        <div className="card">
          <a href="/topografia">
            <img src={red2} alt="Tarjeta 3" className="card-image" />

            <div className="card-content">
              <h3 className="card-titlem">TOPOGRAFIA</h3>

              <p className="card-description">
                Los drones pueden ser útiles en otros tipos de levantamientos,
                como los de edificios, en los que pueden inspeccionarse tejados
                inaccesibles, y en los de canteras, en los que la seguridad
                puede impedir el acceso completo.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
