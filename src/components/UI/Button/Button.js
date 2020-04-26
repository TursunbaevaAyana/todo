import React, { Children } from "react";
import classes from "./Button.module.css";

export default ({ children, click }) => (
    <button onClick={click} className={classes.Button}>{children}</button>
);