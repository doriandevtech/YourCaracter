import React, { Component } from 'react';
import Button from "../../components/Button/Button";
import TitreH1 from "../../components/TitreH1/TitreH1";
import Personnage from './Personnage/Personnage';

class CreateurPersonnage extends Component {

    state = {
        personnage : {
            image : 1,
            force : 0,
            agilité : 0,
            intelligence : 0,
        }
    }

    render() {
        return (
            <div className="container">
            <TitreH1>Créateur de personnages</TitreH1>
            {/* Opérateur "..." : "spread" pour envoyer tous les champs de "personnage" */}
            <Personnage {...this.state.personnage}/>
            <div>Armes</div>
            <div className="row no-gutters">
              <Button typeBtn="btn btn-danger" css="col-6" clic={() => console.log("Réinitialisation")}>Réinitialiser</Button>
              <Button typeBtn="btn btn-success" css="col-6" clic={() => console.log("Création")}>Créer</Button>
            </div>
          </div>
        );
    }
}
export default CreateurPersonnage;