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
            <Carac 
                nbPoints={props.force}
                moins={() => props.enleverPoint('force')}
                plus={() => props.ajouterPoint('force')}
            >Force</Carac>
            <Carac 
                nbPoints={props.agilite}
                moins={() => props.enleverPoint('agilite')}
                plus={() => props.ajouterPoint('agilite')}
            >Agilité</Carac>
            <Carac 
                nbPoints={props.intelligence}
                moins={() => props.enleverPoint('intelligence')}
                plus={() => props.ajouterPoint('intelligence')}
            >Intelligence</Carac>
        </div>
    </>
);

export default caracPerso;