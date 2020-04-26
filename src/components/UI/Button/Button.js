import React, { Children } from "react";
import classes from "./Button.module.css";

export default ({ children }) => (
    <button className={classes.Button}>{children}</button>
);