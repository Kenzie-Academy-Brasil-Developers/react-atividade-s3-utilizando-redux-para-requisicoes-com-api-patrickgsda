import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunks";
import { Button, TextField, Container } from "@material-ui/core";

const Search = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  function handleSearch() {
    setError(false);
    dispatch(addDigimonsThunk(input, error));
  }

  return (
    <div>
      <h2>Procure pelo seu Digimon!</h2>
      <Container
        sx={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}
      >
        <TextField
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Procure seu Digimon"
        ></TextField>
        <Button variant="contained" onClick={() => handleSearch()}>
          Pesquisar
        </Button>
      </Container>
    </div>
  );
};

export default Search;
