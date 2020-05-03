import React, { useState } from "react"; 
import classes from "./Items.module.css";
import Item from "./Item/Item";

export default ({ items, deleteItem, toggleCompleteItem }) => {
    const ids = Object.keys(items);

    let itemsOutput = <div>Evpty list</div>;
    if (ids.length > 0) {
        itemsOutput = ids.map((id) => {
        return (
            <Item
             key={id}
             item={items[id]} deleteItem={() => deleteItem(id)}  toggleCompleteItem={() => toggleCompleteItem(id)}/>
        );
    }); 
}

    return (
        <ul className={classes.Items}>
            {itemsOutput}
        </ul>
    );
}