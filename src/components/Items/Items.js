import React, { useState } from "react"; 
import classes from "./Items.module.css";
import Item from "./Item/Item";

export default ({ items, deleteItem }) => {

    const itemsOutput = Object.keys(items).map(id => {
        return (
            <Item key={id} item={items[id]} deleteItem={() => deleteItem(id)}/> 
        );
    });

    return (
        <ul className={classes.Items}>
            {itemsOutput}
        </ul>
    );
}