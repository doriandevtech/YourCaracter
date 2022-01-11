import React from "react";
import classes from "./TitreH1.module.css"

const titreh1 = (props) => {
    const titreH1Css = `${classes.policeTitre} border border-dark p-2 mt-2 text-white text-center bg-primary rounded`;
    return <h1 className={titreH1Css}>{props.children}</h1>
};

export default titreh1;