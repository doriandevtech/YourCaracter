import React from "react";
import Titre from "./components/Titre/TitreH1";
import Button from './components/Button/Button'

function App() {
  return (
    <div className="container">
      <Titre>Créateur de personnages</Titre>
      <div>Personnages</div>
      <div>PersonnaArmesges</div>
      <div className="row no-gutters">
        <Button typeBtn="btn btn-danger" css="col-6" clic={() => console.log("Réinitialisation")}>Réinitialiser</Button>
        <Button typeBtn="btn btn-success" css="col-6" clic={() => console.log("Création")}>Créer</Button>
      </div>
    </div>
  );
}

export default App;
