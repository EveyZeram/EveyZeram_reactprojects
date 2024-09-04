import React, { useState } from "react";
import "../../styles/invitation.css";
import prueba1 from "../../img/prueba1.jpg";
import logo from "../../img/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faClock } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

export const Invitation = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        if (value === "1") {
            setIsFormVisible(true);
        } else {
            setIsFormVisible(false);
        }
    };

    const handleFormClick = (event) => {
        if (!isFormVisible) {
            event.preventDefault(); // Evitar que el enlace sea seguido si el formulario no está disponible
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
                                        <option value="2">Todavía no lo sé</option>                                        <option value="3">No puedo :( </option>
                                    </select>
                                </div>
                                {isFormVisible && (
                                    <div>
                                    <a href="https://forms.gle/KoKZS3pXpu4uzBvb8" className="btn btn boton1 p-2 m-1 disabled" onClick={handleFormClick}>
                                        Formulario
                                    </a>
                                    <div className="alert alert-danger mt-2" role="alert">
                                        El formulario todavía no está disponible. 
                                    </div>
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
                    <br />
                    <div className="mt-2 d-flex flex-column align-items-center">
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
                    <div className="p-3">
                        <h4>Empieza a ensayar que vienen curvas</h4>
                        <a href="https://open.spotify.com/playlist/1P6qv6TtNvUvHEvrvpkoPK?si=-pU9mgDaRUmZPJGwUmjrMg&pt=17e02215c918a83516b63cfccaf0191" className="btn btn-success boton2 p-1">
                            <FontAwesomeIcon icon={faSpotify} /> Spotify
                        </a>
                    </div>
                    <div className="p-3">
                        <p>Sí, tu presencia es suficiente ya lo sabes, pero oye, si te apetece contribuir y tal...
                            Nos mola el rollito efectivo bajo el colchón, pero si no es viable, puede dejar su contribución aquí:
                            <br />
                            <p>
                                IBAN: XXXX-XXXX-XXXX-XXXX
                                Bizum: 680278089
                            </p>
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
