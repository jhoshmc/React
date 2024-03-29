import Card from "../Card/Card";
import style from "./cards.module.css";
const Cards = ({ characters, onClose }) => {
  return (
    <div className={style.container}>
      {characters.map(
        ({ id, name, status, species, gender, origin, image }) => {
          return (
            <Card
              id={id}
              key={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin}
              image={image}
              onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
};

export default Cards;
