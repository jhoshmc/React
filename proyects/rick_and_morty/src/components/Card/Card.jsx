import { Link } from "react-router-dom";
import style from "./Card.module.css";
const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className={style.container}>
        <button
          onClick={() => {
            onClose(id);
          }}
        >
          X
        </button>
        <h3>{id}</h3>
        <h2>{name} </h2>
        <span>{`${status} - ${species}`} </span>
        <h3>{gender} </h3>
        <h3>{origin.name}</h3>
        <img src={image} alt={name} />
      </div>
    </Link>
  );
};

export default Card;
