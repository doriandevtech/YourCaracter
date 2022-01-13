import React from "react";
import classes from "./Carac.module.css";

const carac = (props) => {
    let carre = [];
    for (let i=0; i < props.nbPoints; i++) {
        carre.push(<div key={i} className={classes.points}></div>)
    }
    return (
        <div className="row no-gutters">
            <div className={[classes.signe, classes.moins].join(" ")}></div>
            <div>{props.children}</div> {carre}
            <div className={[classes.signe, classes.plus].join(" ")}></div>
        </div>
    );
};

export default carac;