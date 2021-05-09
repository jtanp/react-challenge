import React from "react";
import { useDispatch } from "react-redux";
import { deleteForm, toggleShowDetails } from "../actions";
import { Form } from "../types";
import { FormItemDetails } from "./";

interface Props {
  form: Form;
}

const FormItem = ({ form }: Props) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div className="form-item">
        <p className="name">{form.name}</p>
        <p className="description">{form.description}</p>
        <div className="form-item-buttons">
          <button
            className="button-delete"
            onClick={() => dispatch(deleteForm(form.id))}
          >
            Delete
          </button>
          <button
            className="button-details"
            onClick={() => dispatch(toggleShowDetails(form.id))}
          >
            Details
          </button>
        </div>
        {form.showDetails && <FormItemDetails form={form} />}
      </div>
    </li>
  );
};

export default FormItem;
