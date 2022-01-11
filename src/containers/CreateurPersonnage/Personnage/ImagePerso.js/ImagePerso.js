import React from "react";

import ImagePlayer1 from '../../../../assets/images/persos/player1.png'
import ImagePlayer2 from '../../../../assets/images/persos/player2.png'
import ImagePlayer3 from '../../../../assets/images/persos/player3.png'

const imagePerso = (props) => {

    let imageToPrint = "";
    if(props.numImage === 1) imageToPrint = ImagePlayer1;
    else if(props.numImage === 2) imageToPrint = ImagePlayer2;
    else if(props.numImage === 3) imageToPrint = ImagePlayer3;

    return (
        <div>
            <img src={imageToPrint} alt="perso"></img>
        </div>
    );
};

export default imagePerso;