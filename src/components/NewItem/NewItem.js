import React from "react";
import classes from "./NewItem.module.css";
import Button from "../UI/Button/Button";

export default ({ addItem }) => {
  function addButtonClicked({ target }) {
    const input = target.previousSibling;

    if (input.value) {
      addItem(input.value);
      input.value = "";
    }
    input.focus();
  }

  function inputKeyDown({ key, target }) {
    if (key === "Enter" && target.value) {
      addItem(target.value);
      target.value = "";
    }
  }

  return (
    <div className={classes.NewItem}>
      <input type="text" onKeyDown={inputKeyDown} />
      <Button click={addButtonClicked} green>
        Add{" "}
      </Button>
    </div>
  );
};