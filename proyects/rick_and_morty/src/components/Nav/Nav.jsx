import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import style from "./nav.module.css";
const Nav = ({ onSearch }) => {
  return (
    <div className={style.container}>
      <button>
        <NavLink to="/about">About</NavLink>
      </button>
      <button>
        <NavLink to="/home">Home</NavLink>
      </button>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
