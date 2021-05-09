import { Form } from "./types";

export const ADD_FORM = "ADD_FORM";
export const DELETE_FORM = "DELETE_FORM";
export const TOGGLE_SHOW_DETAILS = "TOGGLE_SHOW_DETAILS";

export type Actions =
  | { type: typeof ADD_FORM; payload: Form }
  | { type: typeof DELETE_FORM; payload: number }
  | { type: typeof TOGGLE_SHOW_DETAILS; payload: number };

export const addForm = (form: Form): Actions => ({
  type: ADD_FORM,
  payload: form,
});

export const deleteForm = (id: number): Actions => ({
  type: DELETE_FORM,
  payload: id,
});

export const toggleShowDetails = (id: number): Actions => ({
  type: TOGGLE_SHOW_DETAILS,
  payload: id,
});
