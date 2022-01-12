import React from "react";

const caracPerso = (props) => (
    <>
        <div>
            Points restants : 
            <span>
                {props.nbPointsDisponibles}
            </span>
        </div>
        <div>
            Force {props.force} <br/>
            Agilité {props.agilite} <br/>
            Intelligence {props.intelligence} <br/>
        </div>
    </>
);

export default caracPerso;