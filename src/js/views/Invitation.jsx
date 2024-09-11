import React, { useState } from "react";
import "../../styles/invitation.css";
import { Link } from "react-router-dom";
import prueba1 from "../../img/prueba1.jpg";
import logo from "../../img/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faClock, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";


export const Invitation = () => {

    // Crear constante de cambio de estado useState
    // const [isEnable, setisEnable] = useState(false);

    // const handleSubmit = (option) => {
    //     if (option === "Cuenta con mi hacha") {
    //         setisEnable(true);
    //     }
    // };

    // const formClick = (e) => {
    //     if (isEnable) {
    //         e.preventDefault();
    //         alert("El enlace todavía no está disponible")
    //     }
    // }
 



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
                                <h5 className="card-title">Babu's Family</h5>
                                <p className="texto card-text">
                                    ¡Por fin! El evento más esperado se acerca y si has recibido este enlace, es porque eres una persona importante para las dos y queremos que
                                    disfrutes de este día a nuestro lado.
                                </p>
                                <div className="d-flex justify-content-center">
                                    <div className="dropdown">
                                        <button className="btn btn-outline-secondary dropdown-toggle m-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            ¿Vienes?
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a className="dropdown-item ok">Cuenta con mi hacha</a></li>
                                            <li><a className="dropdown-item ns">Todavía no lo sé</a></li>
                                            <li><a className="dropdown-item ko">No... </a></li>
                                        </ul>
                                    </div>
                                    <div className="">
                                        <button className="btn btn m-1" type="submit"> Enviar <FontAwesomeIcon icon={faPaperPlane} style={{color: "#63E6BE",}} /></button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="p-2 mt-2">
                        <h2>¿Dónde manifestaremos nuestro amor?</h2>
                        <ul className="list-unstyled">
                            {/* Meter Iconos */}
                            <li> <FontAwesomeIcon icon={faLocation} />  La Gañanía - Puerto de la Cruz</li>
                            <li className="p-1"> <FontAwesomeIcon icon={faClock} /> Hora: 18:00</li>
                        </ul>
                    </div>
                    <br />
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
                    {/* Meter Spotify para que vean canciones, no colab */}
                    <div className="p-3 ">
                        <h4>Empieza a ensayar que vienen curvas</h4>
                        <a href="https://open.spotify.com/playlist/1P6qv6TtNvUvHEvrvpkoPK?si=-pU9mgDaRUmZPJGwUmjrMg&pt=17e02215c918a83516b63cfccaf0191" className="btn btn-success boton2 p-1"><FontAwesomeIcon icon={faSpotify} /> Spotify </a>
                    </div>
                    <div className="p-3">
                        <p>Sí, tu presencia es suficiente ya lo sabes, pero oye, si te apetece contribuir y tal...
                            Nos mola el rollito efectivo bajo el colchón, pero si no es viable, habla con nosotras.
                            <br />
                        </p>
                    </div>
                    <h4>TE ESPERAMOS
                        <img className="w-25" src={logo} />
                    </h4>
                    <p>Se viene cositas...</p>
                </div>
            </div>
        </div>
    );
}
