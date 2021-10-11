import { useState } from "react";

const Search = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  return (
    <div>
      <h2>Procure pelo seu Digimon!</h2>
      <div>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Procure seu Digimon"
        ></input>
        <button>Pesquisar</button>
      </div>
    </div>
  );
};

export default Search;
