import React, { useState } from "react";
import classes from "./Item.module.css";

export default ({ item }) => (
    <li className={classes.Item}>
        <span className={classes.text}>{item.text}</span>
    </li>
);
