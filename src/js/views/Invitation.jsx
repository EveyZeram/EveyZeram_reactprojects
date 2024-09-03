import React from "react";
import "../../styles/invitation.css";
import { Link } from "react-router-dom";
import prueba1 from "../../img/prueba1.jpg";
import logo from "../../img/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faClock } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";


export const Invitation = () => {
    return (
        <div className="bigone container-fluid d-flex flex-column align-items-center justify-content-center p-2 m-2">
            <div className="row w-90 text-center justify-content-center">
                <div className="col-12 col-md-10 col-lg-8 m-4">
                    <h1>
                        NOS VAMOS DE BODA
                    </h1>
                    <div className="d-flex justify-content-center p-2">
                        <div className="card" style={{ width: "100%", maxWidth: "18rem" }}>
                            <img src={prueba1} className="card-img-top" alt="Imagen de invitación" />
                            <div className="card-body">
                                <h5 className="card-title">BolliBoda</h5>
                                <p className="texto card-text">Nos gustaría invitarte a algo muy especial bla bla bla</p>
                                <a href="https://forms.gle/4Qdz2yLdEngH3U6aA" className="btn btn boton1" target="_blank" rel="noopener noreferrer">¿Vienes?</a>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 mt-3">
                        <h2>¿Dónde manifestaremos nuestro amor?</h2>
                        <ul className="list-unstyled">
                            {/* Meter Iconos */}
                            <li> <FontAwesomeIcon icon={faLocation} />  La Gañanía - Puerto de la Cruz</li>
                            <li className="p-1"> <FontAwesomeIcon icon={faClock} /> Hora: 18:00</li>
                        </ul>
                    </div>
                    <div className="mt-3 d-flex flex-column align-items-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.4213625752946!2d-16.533334924841036!3d28.406539975789002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41d559de7ae8a5%3A0x9d97500c7f545aed!2sLa%20Ga%C3%B1an%C3%ADa%20Finca%20%26%20Catering!5e0!3m2!1ses!2ses!4v1721477008483!5m2!1ses!2ses"
                            width="300"
                            height="150"
                            style={{ border: 1 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    {/* Meter Spoti?? o solo que añadan una canción en el formulario? */}
                    <div className="p-3 ">
                        <h4>Empieza a ensañar que vienen curvas</h4>
                        <a href="https://open.spotify.com/playlist/1P6qv6TtNvUvHEvrvpkoPK?si=-pU9mgDaRUmZPJGwUmjrMg&pt=17e02215c918a83516b63cfccaf0191" className="btn btn-success boton2 p-1"><FontAwesomeIcon icon={faSpotify} /> Spotify </a>
                    </div>
                    <div className="p-3">
                        <p>Sí, tu presencia es suficiente ya los abes, pero oye, si te apetece contribuir y tal...
                            Nos mola el rollito efectivo bajo el colchón pero si no te da tiempo pues...
                            IBAN: XXXX-XXXX-XXXX-XXXX
                            Bizum: 680278089
                        </p>
                    </div>
                    <h4>TE ESPERAMOS
                        <img className="w-50" src={logo} />
                    </h4>
                </div>
            </div>
        </div>
    );
}
