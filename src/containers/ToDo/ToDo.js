import React, { useState, useEffect } from "react";
import classes from "./ToDo.module.css";
import Items from "../../components/Items/Items";
import NewItem from "../../components/NewItem/NewItem";
import axios from "../../axios";
import Loading from "../../components/UI/Loading/Loading";

export default () => {
  const [items, setItems] = useState(null);

  function deleteItem(id) {
    axios.delete("/items/" + id + ".json").then((response) => {
      const newItems = { ...items };
      delete newItems[id];
      setItems(newItems);
    });
  }

  function toggleCompleteItem(id) {
    axios
      .put("/items/" + id + "/completed.json", !items[id].completed)
      .then((response) => {
        const newItems = { ...items };
        newItems[id].completed = !newItems[id].completed;
        setItems(newItems);
      });
  }

  function addItem(text) {
    axios.post("/items.json", { text, completed: false }).then(({ data }) => {
      const newItems = { ...items };
      newItems[data.name] = {
        text,
        completed: false,
      };
      setItems(newItems);
    });
  }

  useEffect(() => {
    axios.get("/items.json").then(({ data }) => setItems({ ...data }));
  }, []);

  let itemsOutput = <Loading />;
  if (items !== null) {
    itemsOutput = (
      <Items
        items={items}
        deleteItem={deleteItem}
        toggleCompleteItem={toggleCompleteItem}
      />
    );
  }

  return (
    <div className={classes.ToDo}>
      <NewItem addItem={addItem} />
      {itemsOutput}
    </div>
  );
};