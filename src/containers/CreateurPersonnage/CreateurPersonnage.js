import React, { Component } from 'react';
import Button from "../../components/Button/Button";
import TitreH1 from "../../components/TitreH1/TitreH1";
import Personnage from './Personnage/Personnage';

class CreateurPersonnage extends Component {

    state = {
        personnage : {
            image : 1,
            force : 1,
            agilite : 2,
            intelligence : 3,
        },
        nbPointsDisponibles : 7
    }

    handleImagePrecedente = () => {
        this.setState((oldState => {
            // Création d'une réelle opie de "personnage" dans oldState
            const newPersonnage = {...oldState.personnage}
            if(oldState.personnage.image <= 1) newPersonnage.image = 3;
            else newPersonnage.image --;
            return {personnage:newPersonnage}
        }))
    }

    handleImageSuivante = () => {
        this.setState((oldState => {
            // Création d'une réelle opie de "personnage" dans oldState
            const newPersonnage = {...oldState.personnage}
            if(oldState.personnage.image >= 3) newPersonnage.image = 1;
            else newPersonnage.image ++;
            return {personnage:newPersonnage}
        }))
    }

    render() {
        return (
            <div className="container">
            <TitreH1>Créateur de personnages</TitreH1>
            {/* Opérateur "..." : "spread" pour envoyer tous les champs de "personnage" */}
            <Personnage 
                {...this.state.personnage}
                precedente = {this.handleImagePrecedente}
                suivante = {this.handleImageSuivante}
                nbPointsDisponibles = {this.state.nbPointsDisponibles}
            />
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