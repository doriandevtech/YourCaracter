import React, { Component } from 'react';
import Button from "../../components/Button/Button";
import TitreH1 from "../../components/TitreH1/TitreH1";
import Personnage from './Personnage/Personnage';
import Armes from './Armes/Armes';
import axios from 'axios';

class CreateurPersonnage extends Component {

    state = {
        personnage : {
            image : 1,
            force : 0,
            agilite : 0,
            intelligence : 0,
            arme : null
        },
        nbPointsDisponibles : 7,
        armes : null,
        loading : false
    }

    componentDidMount = () => {
        this.setState({loading:true});
        axios.get("https://creaperso-live-default-rtdb.europe-west1.firebasedatabase.app/armes.json")
        .then(response => {
            // Convertir les valeurs contenues dans "data" en un tableau
            const armesArray = Object.values(response.data);
            this.setState({
                armes:armesArray,
                loading:false
            });
        })
        .catch(error => {
            console.log(error);
            this.setState({
                loading:false
            })
        })

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

    handleEnleverPoint = (carac) => {
        this.setState((oldState, props) => {
            // Si le nombre de points pour un caractéristiques est égal à 5 ou si je n'ai plus de points dipsonibles
            if(oldState.personnage[carac] <= 0 || oldState.nbPointsDisponibles >= 7) return null
            const newPointCarac = oldState.personnage[carac] - 1;
            const newPerso = {...oldState.personnage};
            const newNbPointsDisponibles = oldState.nbPointsDisponibles + 1;
            newPerso[carac] = newPointCarac;
            return {
                personnage:newPerso,
                nbPointsDisponibles: newNbPointsDisponibles,
            }
        })
    }

    handleAjouterPoint = (carac) => {
        this.setState((oldState, props) => {
            // Si le nombre de points pour un caractéristiques est égal à 5 ou si je n'ai plus de points dipsonibles
            if(oldState.personnage[carac] >= 5 || oldState.nbPointsDisponibles <= 0) return null
            const newPointCarac = oldState.personnage[carac] + 1;
            const newPerso = {...oldState.personnage};
            const newNbPointsDisponibles = oldState.nbPointsDisponibles - 1;
            newPerso[carac] = newPointCarac;
            return {
                personnage:newPerso,
                nbPointsDisponibles: newNbPointsDisponibles,
            }
        })
    }

    handleChangeArmePersonnage = (arme) => {
        const newPerso = {...this.state.personnage};
        newPerso.arme = arme;
        this.setState({personnage:newPerso})
    }

    handleValidation = () => {
        alert("Personnage créé")
    }

    handleReinitialisation = () => {
        this.setState({
            personnage : {
                image : 1,
                force : 0,
                agilite : 0,
                intelligence : 0,
                arme : null
            },
            nbPointsDisponibles : 7,
            armes : ["epee","fleau","arc","hache"]
        })
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
                enleverPoint = {this.handleEnleverPoint}
                ajouterPoint = {this.handleAjouterPoint}
            />
            {
                this.state.loading && <div>Chargement ...</div>
            }
            {
                this.state.armes &&
                <Armes 
                listeArmes = {this.state.armes}
                changeArme = {this.handleChangeArmePersonnage}
                currentArme = {this.state.personnage.arme}
            />
            }

            <div className="row no-gutters">
              <Button typeBtn="btn btn-danger" css="col-6" clic={() => this.handleReinitialisation()}>Réinitialiser</Button>
              <Button typeBtn="btn btn-success" css="col-6" clic={() => this.handleValidation()}>Créer</Button>
            </div>
          </div>
        );
    }
}
export default CreateurPersonnage;