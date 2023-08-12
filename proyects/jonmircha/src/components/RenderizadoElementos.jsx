import React from "react";
import data from "../helpers/data.json";

const ElementoLista = ({ el }) => {
  return (
    <li>
      <a href={el.web} target="_blank">
        {el.name}
      </a>
    </li>
  );
};

class RenderizadoElementos extends React.Component {
  constructor() {
    super();
    this.state = {
      seasons: ["spring", "summer", "autumn", "winter"],
    };
  }

  render() {
    return (
      <div>
        <h3>Renderizado de Elementos</h3>
        <h3>Estaciones del Año</h3>
        <ol>
          {this.state.seasons.map((estacion) => (
            <li key={estacion}>{estacion}</li>
          ))}
        </ol>
        <h3>Frameworks Frontend JavaScript</h3>
        <ul>
          {data.frameworks.map((el) => (
            <ElementoLista key={el.id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}

export default RenderizadoElementos;
