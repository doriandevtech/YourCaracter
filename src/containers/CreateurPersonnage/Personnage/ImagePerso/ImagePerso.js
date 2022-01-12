import React from "react";

import ImagePlayer1 from '../../../../assets/images/persos/player1.png'
import ImagePlayer2 from '../../../../assets/images/persos/player2.png'
import ImagePlayer3 from '../../../../assets/images/persos/player3.png'

import classes from "./ImagePerso.module.css"

const imagePerso = (props) => {

    let imageToPrint = "";
    if(props.numImage === 1) imageToPrint = ImagePlayer1;
    else if(props.numImage === 2) imageToPrint = ImagePlayer2;
    else if(props.numImage === 3) imageToPrint = ImagePlayer3;

    return (
        <div className="row no-gutters text-center align-items-center">
            {/* ".join" permet de combiner différentes caractéristiques css */}
            <div className={["col-1", classes.fleche, classes.gauche].join(' ')} onClick={props.flecheGauche}></div>
            <div className="col">
                <img src={imageToPrint} alt="perso"/>
            </div>
            <div className={["col-1", classes.fleche, classes.droite].join(' ')} onClick={props.flecheDroite}></div>
        </div>
    );
};

export default imagePerso;