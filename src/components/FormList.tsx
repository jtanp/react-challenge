import React from "react";
import { useSelector } from "react-redux";
import { Store } from "../types";
import { FormItem } from "./";

const FormList = () => {
  const forms = useSelector((state: Store) => state.forms);

  return forms.length ? (
    <div className="form-list">
      <div className="headers">
        <label>Name</label>
        <label>Description</label>
      </div>
      <ul>
        {forms.map((form) => {
          return <FormItem key={form.id} form={form} />;
        })}
      </ul>
    </div>
  ) : (
    <div>
      <p>No forms stored!</p>
    </div>
  );
};

export default FormList;
