import { useState } from "react";
import style from "./searchBar.module.css";
const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");
  const hundleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <div className={style.container}>
      <input
        type="search"
        placeholder="numero de tarjera"
        onChange={hundleChange}
        value={id}
      />
      <button
        onClick={() => {
          onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
};

export default SearchBar;
