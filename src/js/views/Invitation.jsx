import React, { useState } from "react";
import "../../styles/invitation.css";
import prueba1 from "../../img/prueba1.jpg";
import fieras from "../../img/fieras.png";
import canta2 from "../../img/canta2.jpg";
import logo from "../../img/logo1.png";
import herculesscene from "../../img/herculesscene.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faClock, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

export const Invitation = () => {
    // Crear constante de cambio de estado useState
    const [selectedoption, setSelectedoption] = useState("");

    // Para cambiar la opción
    const handleSelectChange = (e) => {
        setSelectedoption(e.target.value);
    };

    return (
        <div className="bigone container-fluid d-flex flex-column align-items-center justify-content-center p-2 m-2">
            <div className="row w-90 text-center justify-content-center">
                <div className="col-12 col-md-10 col-lg-8 m-4">
                    <h1>
                        NOS VAMOS DE BODA
                    </h1>
                    <div className="d-flex justify-content-center p-2">
                        <div className="card" style={{ width: "100%", maxWidth: "20rem" }}>
                            <img src={canta2} className="card-img-top" alt="Imagen de invitación" />
                            <div className="card-body">
                                <h5 className="card-title">Babu's Family</h5>
                                <p className="texto card-text">
                                    ¡Por fin! El evento más esperado se acerca. Y entendemos que si estás aquí es porque eres una persona importante para las dos y no porque se haya filtrado el enlace a todo quisqui.
                                    Empieza la cuenta atrás para que nos acompañes y disfrutes de este día a nuestro lado.
                                </p>
                                <div className="d-flex justify-content-center">
                                    {/* <div className="dropdown">
                                        <button className="btn btn-outline-secondary dropdown-toggle m-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            ¿Vienes?
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item ok">Cuenta con mi hacha</a></li>
                                            <li><a className="dropdown-item ns">Todavía no lo sé</a></li>
                                            <li><a className="dropdown-item ko">No... </a></li>
                                        </ul>
                                    </div> */}
                                    <select className="form-select" aria-label="Default select example" value={selectedoption} onChange={handleSelectChange}>
                                        {/* hacer contador de personas que van, o no, o tal vez */}
                                        <option selected>¿Vienes?</option>
                                        <option value="option1">Cuenta con mi hacha</option>
                                        <option value="option2">Todavía no lo sé</option>
                                        <option value="option3">No puedo...</option>
                                    </select>
                                    {/* <img src={fieras} className="fieras p-1" alt="hercules" /> */}
                                    <img src={herculesscene} className="w-25 p-1" alt="hercules" />
                                    <div>
                                    </div>
                                </div>
                            </div>
                            {/* Aquí lo que muestra por cada opción que se elija */}
                            {selectedoption === "option1" && (
                                <div className="p-2">
                                    {/* <a href="https://forms.gle/jT9ADGdHP8bS7hs26" target="_blank" rel="noopener noreferrer" className="btn btn-success boton3 p-1 m-2">Formulario</a> */}
                                    <img src="https://media.tenor.com/tgCokuvCJJsAAAAM/marivi-bilbao.gif" alt="anhqv" className="gif" />
                                </div>
                            )}
                            {selectedoption === "option2" && (
                                <div>
                                    <img src="https://media4.giphy.com/media/XJ2LOkwAUN25LQLlvO/200w.gif?cid=82a1493ba1p1ajkmtk07zfbrqaywqf3ptdjqnb5fhpzkzmuc&ep=v1_gifs_related&rid=200w.gif&ct=g" alt="belen" className="gif" />
                                </div>
                            )};
                            {selectedoption === "option3" && (
                                <div>
                                    <a href="hhttps://youtu.be/Y4cmPh2peBY?si=zSV7QKHvMiAemKiX&t=24" target="_blank" rel="noopener noreferrer">
                                        <img src="https://64.media.tumblr.com/a1d9a00514c4a7dbf909f4c80e3f5cb0/tumblr_p48oqs4DnV1wkztm7o1_540.gif" alt="paquita" className="gif" />
                                    </a>
                                </div>
                            )};
                        </div>
                    </div>
                    <div className="p-2 mt-2">
                        <h2>¿Dónde manifestaremos nuestro amor?</h2>
                        <img src={fieras} className="fieras p-1" alt="hercules" />
                        <ul className="list-unstyled">
                            <li> <FontAwesomeIcon icon={faLocation} /> La Gañanía - Puerto de la Cruz</li>
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
                    {/* Activar más tarde */}
                    {/* <div className="p-3">
                        <h4>Empieza a ensayar que vienen curvas</h4>
                        <a href="https://open.spotify.com/playlist/1P6qv6TtNvUvHEvrvpkoPK?si=-pU9mgDaRUmZPJGwUmjrMg&pt=17e02215c918a83516b63cfccaf0191" className="btn btn-success boton2 p-1"><FontAwesomeIcon icon={faSpotify} /> Spotify </a>
                    </div>
                    <div className="p-3">
                        <p>Sí, tu presencia es suficiente ya lo sabes, pero oye, si te apetece contribuir y tal...
                            Nos mola el rollito efectivo bajo el colchón, pero si no es viable, habla con nosotras.
                            <br />
                        </p>
                    </div> */}
                    <br />
                    <h4>TE ESPERAMOS
                        <img className="w-25" src={logo} alt="Logo" />
                    </h4>
                    <p>Por el momento, esto es todo lo que podemos contar... pero les vamos avisando que... </p>
                    <b>Se vienen cositas...</b>
                </div>
            </div>
        </div>
    );
}
