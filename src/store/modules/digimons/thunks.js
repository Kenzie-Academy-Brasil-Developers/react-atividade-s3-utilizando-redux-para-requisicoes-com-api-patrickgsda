import axios from "axios";
import api from "../../../services/api";
import { addDigimon } from "./actions";
const addDigimonsThunk = (digimon, setError) => (dispatch) => {
  api
    .then((response) => dispatch(addDigimon(response.data[0].name)))
    .catch((err) => {
      console.error("faiou meu bom..." + err);
    });
};

export default addDigimonsThunk;
