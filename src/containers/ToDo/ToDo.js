import React, { useState } from "react";
import classes from "./ToDo.module.css";

export default () => {
    const [items, setItems] = useState({
        "todo-1": {
            text: "Hello World!",
            completed: false,
        },
        "todo-2": {
            text: "Bye World!",
            completed: true,
        }
    });

    const itemsOutput = Object.keys(items).map(key => {
        return (
            <li>{items[key].text}</li>
        );
    });

    return (
        <div className={classes.ToDo}>
            <ul>
                {itemsOutput}
            </ul>
        </div>
    );
}