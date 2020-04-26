import React, { useState } from "react";
import classes from "./Item.module.css";
import Button from "../../UI/Button/Button";

export default ({ item, deleteItem }) => (
    <li className={classes.Item}>
        <span className={classes.text}>{item.text}</span>
        <Button click={deleteItem} red>x</Button>
    </li>
);
