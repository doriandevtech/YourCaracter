import React from "react";
import Arme from "./Arme/Arme";
import imgArc from "../../../assets/images/armes/arc.png";
import imgEpee from "../../../assets/images/armes/epee.png";
import imgFleau from "../../../assets/images/armes/fleau.png";
import imgHache from "../../../assets/images/armes/hache.png"

const armes = (props) => (
    <div className="row no-gutters text-center">
        {props.listeArmes.map(arme => {
            let imgArme;
            switch(arme) {
                case "arc" : imgArme = imgArc;
                break;
                case "epee" : imgArme = imgEpee;
                break;
                case "fleau" : imgArme = imgFleau;
                break;
                case "hache" : imgArme = imgHache;
                break;
                default:
            }
            return (
                <div key={arme} className="col-3">
                    <Arme 
                        imageArme={imgArme}
                        isCurrentArme={props.currentArme === arme}
                        clic = {() => props.changeArme(arme)}
                    >{arme}</Arme>
                </div>
            );
        })}
    </div>
);

export default armes;