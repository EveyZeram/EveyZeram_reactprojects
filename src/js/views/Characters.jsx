import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { NavbarSW } from "../component/NavbarSW.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJedi } from "@fortawesome/free-solid-svg-icons";


export const Characters = () => {
    const { store, actions } = useContext(Context);
    const imgUrl = "https://starwars-visualguide.com/assets/img/characters/";

    return (
        <div className="bg-dark">
            <NavbarSW />
            <div className="container bg-dark mb-3">
                <h1 className="text-light text-center">Characters</h1>
                <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
                    {store.characters.map((item, index) => (
                        <div key={index} className="col">
                            <div className="card border-dark my-3 mx-2 text-bg-dark">
                                <img src={`${imgUrl}${item.uid}.jpg`} className="card-img-top w-100 h-100" alt="..." />
                                <div className="card-body text-center bg-warning">
                                    <h5 className="card-title">{item.name}</h5>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to={`/characters/${item.uid}`} className="btn btn-light">Details</Link>
                                        {store.favorites.some(favorite => favorite.name === item.name) ? null : (
                                        <span onClick={() => actions.addFavorite({ name: item.name })} className="btn btn-outline-white m-1">
                                        <FontAwesomeIcon icon={faJedi} />
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
