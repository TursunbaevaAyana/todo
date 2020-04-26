import React, { useState } from "react";
import classes from "./Item.module.css";
import Button from "../../UI/Button/Button";

export default ({ item }) => (
    <li className={classes.Item}>
        <span className={classes.text}>{item.text}</span>
        <Button red>x</Button>
    </li>
);
