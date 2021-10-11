import { ADD_DIGIMONS } from "./actionsTypes";

const digimonsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DIGIMONS:
      return "ei";
    default:
      return state;
  }
};

export default digimonsReducer;
