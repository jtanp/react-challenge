import React from "react";
import { useDispatch } from "react-redux";
import { toggleShowDetails } from "../actions";
import { Form } from "../types";

interface Props {
  form: Form;
}

const FormItemDetails = ({ form }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="popup">
      <div className="form-details">
        <div className="row">
          <label>Id:</label>
          <p>{form.id}</p>
        </div>
        <div className="row">
          <label>Name:</label>
          <p>{form.name}</p>
        </div>
        <div className="row">
          <label>Description:</label>
          <p>{form.description}</p>
        </div>
        <div className="row">
          <label>Comment:</label>
          <p>{form.comment}</p>
        </div>
        <button
          className="button-close"
          onClick={() => dispatch(toggleShowDetails(form.id))}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FormItemDetails;
