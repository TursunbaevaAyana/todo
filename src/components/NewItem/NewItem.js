import React, { Children } from "react";
import classes from "./NewItem.module.css";
import Button from "../UI/Button/Button";

export default ({}) => (
    <div className={classes.NewItem}>
        <input type="text"/>
        <Button green>Add</Button>
    </div>
);