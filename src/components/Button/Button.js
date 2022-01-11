import React from "react";
import classes from "./Button.module.css"

const button = (props) => {
    const btnCss = `btn ${props.typeBtn} ${props.css} ${classes.policeButton}`;
    return <div className={btnCss} onClick={props.clic}>{props.children}</div>
};

export default button;