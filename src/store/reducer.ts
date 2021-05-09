import {
  Actions,
  ADD_FORM,
  DELETE_FORM,
  TOGGLE_SHOW_DETAILS,
} from "../actions";
import { Form, Store } from "../types";

const addForm = (forms: Form[], newForm: Form): Form[] => {
  return [
    ...forms,
    {
      id: Math.random(),
      name: newForm.name,
      description: newForm.description,
      comment: newForm.comment,
      showDetails: false,
    },
  ];
};

const deleteForm = (forms: Form[], id: number): Form[] => {
  return forms.filter((form) => form.id !== id);
};

const toggleShowDetails = (forms: Form[], id: number): Form[] => {
  return forms.map((form) => ({
    ...form,
    showDetails: form.id === id ? !form.showDetails : form.showDetails,
  }));
};

const initialState: Store = {
  forms: [],
};

const reducer = (state: Store = initialState, action: Actions) => {
  switch (action.type) {
    case ADD_FORM:
      return {
        ...state,
        forms: addForm(state.forms, action.payload),
      };
    case DELETE_FORM:
      return {
        ...state,
        forms: deleteForm(state.forms, action.payload),
      };
    case TOGGLE_SHOW_DETAILS:
      return {
        ...state,
        forms: toggleShowDetails(state.forms, action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
