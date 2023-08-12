import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./detail.module.css";
const URL_BASE = "https://rym2-production.up.railway.app/api/character";
const API_KEY = "key=henrym-jhoshmc";
const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`${URL_BASE}/${id}?${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.container}>
      <div>
        {console.log(character.origin)}
        <h2>{`STATUS| ${character.status}`}</h2>
        <h2>{`GENDER| ${character.gender}`}</h2>
        <h2>{`SPECIE| ${character.species}`}</h2>
        <h2>{`ORIGIN| ${character.origin?.name}`}</h2>
        <h2>{`LOCATION| ${character.location?.name}`}</h2>
      </div>
      <div>
        <img src={character.image} alt={character.name} />
      </div>
    </div>
  );
};
export default Detail;
