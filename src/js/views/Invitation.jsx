import React, { useState } from "react";
import "../../styles/invitation.css";
import prueba1 from "../../img/prueba1.jpg";
import logo from "../../img/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faClock, faRing, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

export const Invitation = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState(""); // variable para el mensaje de alerta3
    const [alertMessage2, setAlertMessage2] = useState(""); // variable para el mensaje de alerta2

    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);

        // Mostrar el formulario solo si se selecciona la opción "1"
        if (value === "1") {
            setIsFormVisible(true);
            setAlertMessage("");
            setAlertMessage2(""); // Quitar alerta si se selecciona la opción 1
        } else {
            setIsFormVisible(false);
        }
        // Mostrar alert personalizado para las opciones "2" y "3"
        if (value === "2") {
            setAlertMessage("Bueeno... vale");
            setAlertMessage2("");
        } else if (value === "3") {
            setAlertMessage2("Lloremos fuerte...");
            setAlertMessage("");
        } else {
            setAlertMessage("");
            setAlertMessage2("") // Quitar alerta si se cambia la opción a algo diferente
        }
    };

    return (
        <div className="bigone container-fluid d-flex flex-column align-items-center justify-content-center p-2 m-2">
            <div className="row w-90 text-center justify-content-center">
                <div className="col-12 col-md-10 col-lg-8 m-4">
                    <h1>NOS VAMOS DE BODA</h1>
                    <div className="d-flex justify-content-center p-2">
                        <div className="card" style={{ width: "100%", maxWidth: "18rem" }}>
                            <img src={prueba1} className="card-img-top" alt="Imagen de invitación" />
                            <div className="card-body">
                                <h5 className="card-title">Babu's Family</h5>
                                <p className="texto card-text">
                                    ¡Por fin! El evento más esperado se acerca y si has recibido este enlace, es porque eres una persona importante para las dos y queremos que disfrutes de este día a nuestro lado.
                                </p>
                                <div className="d-flex justify-content-center p-1 m-auto">
                                    <select className="form-select w-auto" value={selectedOption} onChange={handleOptionChange} aria-label="Default select example">
                                        <option value="" disabled hidden>¿Vienes?</option>
                                        <option value="1">Cuenta con mi hacha</option>
                                        <option value="2">Todavía no lo sé</option>
                                        <option value="3">No puedo :( </option>
                                    </select>
                                </div>
                                {/* <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#1b1c1d", }} /> */}
                                {isFormVisible && (
                                    <div>
                                        <a href="https://forms.gle/KoKZS3pXpu4uzBvb8" className="btn btn boton1 p-2 m-1"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                            Formulario
                                        </a>
                                    </div>
                                )}
                                {/* Alerta para la opción "2" */}
                                {alertMessage && (
                                    <div className="alert alert-warning mt-2" role="alert">
                                        {alertMessage}
                                    </div>
                                )}
                                {/* Alerta para la opción "3" */}
                                {alertMessage2 && (
                                    <div className="alert2 alert-warning mt-2" role="alert">
                                        {alertMessage2}
                                        <a href="https://www.youtube.com/watch?v=Y4cmPh2peBY&list=PLE2D20E1BF06F64DD&ab_channel=annakorsetta" target="_blank"
                                            rel="noopener noreferrer" className="btn btn boton1 p-2 m-1 ">
                                            <FontAwesomeIcon icon={faPaperPlane} />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="p-2 mt-2">
                        <h2>¿Dónde manifestaremos nuestro amor?</h2>
                        <ul className="list-unstyled">
                            <li><FontAwesomeIcon icon={faLocation} /> La Gañanía - Puerto de la Cruz</li>
                            <li className="p-1"><FontAwesomeIcon icon={faClock} /> Hora: 18:00</li>
                        </ul>
                    </div>
                    <div className="mt-2 d-flex flex-column align-items-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.4213625752946!2d-16.533334924841036!3d28.406539975789002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41d559de7ae8a5%3A0x9d97500c7f545aed!2sLa%20Ga%C3%B1an%C3%ADa%20Finca%20%26%20Catering!5e0!3m2!1ses!2ses!4v1721477008483!5m2!1ses!2ses"
                            width="300"
                            height="150"
                            style={{ border: 1 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            target="_blank"
                            rel="noopener noreferrer"
                        ></iframe>
                    </div>
                    <div className="p-3">
                        <h4>Empieza a ensayar que vienen curvas</h4>
                        <a href="https://open.spotify.com/playlist/1P6qv6TtNvUvHEvrvpkoPK?si=-pU9mgDaRUmZPJGwUmjrMg&pt=17e02215c918a83516b63cfccaf0191"
                            className="btn btn-success boton2 p-1"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSpotify} /> Spotify
                        </a>
                    </div>
                    <div className="p-3">
                        <h4>No te pierdas ni una foto!</h4>
                        <a href="https://www.bodas.net/web/bolli-boda/wedshoots-8" className="btn btn boton3 p-1" target="_blank"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faRing} /> Wedshoots
                        </a>  
                    </div>
                    <div className="p-3">
                        <p>Sí, tu presencia es suficiente ya lo sabes, pero oye, si te apetece contribuir y tal...
                            Nos mola el rollito efectivo bajo el colchón, pero si no es viable, habla con alguna de nosotras.
                            <br />
                        </p>
                    </div>
                    <h4>TE ESPERAMOS
                        <img className="w-25" src={logo} alt="Logo" />
                    </h4>
                    <p>Se viene cositas...</p>
                </div>
            </div>
        </div>
    );
};
