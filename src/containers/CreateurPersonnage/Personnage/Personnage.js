import React from "react";
import ImagePerso from "./ImagePerso.js/ImagePerso";

const personnage = (props) => (
    <div className="row no-gutters">
        <div className="col-6">
            <ImagePerso numImage={props.image}/>
        </div>
        <div className="col-6">
            <div>Force : {props.force}</div>
            <div>Agilité : {props.agilité}</div>
            <div>Intelligence : {props.intelligence}</div>
        </div>
    </div>
);

export default personnage;