import React, { useState } from "react";
import Items from "../../components/Items/Items";
import classes from "./ToDo.module.css";
import NewItem from "../../components/NewItem/NewItem";

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

    function deleteItem(id) {
        const newItems = { ...items };
        delete newItems[id];
        setItems(newItems);
    }

    function toggleCompleteItem(id){
       const  newItems = {...items};
       newItems[id].completed = !newItems[id].completed;
       setItems(newItems);
    }

    function addItem(text) {
       const newItems = {...items};
       const id = `todo-${Math.floor(Math.random() * 10000)}`;
       newItems[id] = { text, completed: false,};
       setItems(newItems);
    }

    return (
        <div className={classes.ToDo}>
            <NewItem addItem={addItem}/>
            <Items items={items} deleteItem={deleteItem} toggleCompleteItem={toggleCompleteItem}/>
        </div>
    );
}