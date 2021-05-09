import React from "react";
import { useDispatch } from "react-redux";
import { addForm } from "../actions";

const Form = () => {
  const dispatch = useDispatch();
  const newForm = {
    id: 0,
    name: "",
    description: "",
    comment: "",
    showDetails: false,
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addForm(newForm));
  };

  const clearForm = () => {
    if (document.querySelector("#form")) {
      const form = document.querySelector("#form") as HTMLFormElement;
      form.reset();
    }
  };

  return (
    <div className="main-form">
      <form id="form" onSubmit={onSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          onChange={(e) => (newForm.name = e.target.value)}
          required
        />
        <label>Description: </label>
        <input
          type="text"
          name="description"
          onChange={(e) => (newForm.description = e.target.value)}
          required
        />
        <label>Comment: </label>
        <input
          type="text"
          name="comment"
          onChange={(e) => (newForm.comment = e.target.value)}
          required
        />
        <div className="form-buttons">
          <button className="button-clear" type="button" onClick={clearForm}>
            Clear
          </button>
          <button className="button-add" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
