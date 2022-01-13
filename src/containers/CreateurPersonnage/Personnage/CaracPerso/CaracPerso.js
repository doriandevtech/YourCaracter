import React from "react";
import Carac from "./Carac/Carac";

const caracPerso = (props) => (
    <>
        <div>
            Points restants : 
            <span className="badge badge-success">
                {props.nbPointsDisponibles}
            </span>
        </div>
        <div>
            <Carac nbPoints={props.force}>Force</Carac>
            <Carac nbPoints={props.agilite}>Agilité</Carac>
            <Carac nbPoints={props.intelligence}>Intelligence</Carac>
        </div>
    </>
);

export default caracPerso;