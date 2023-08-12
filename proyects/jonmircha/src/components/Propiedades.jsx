import React from "react";
import PropTypes from "prop-types";
const Propiedaes = (props) => {
  return (
    <>
      <h3>{props.porDefecto} </h3>
      <p>tipo de propiedades</p>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.boolean ? "verdadero" : "falso"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{`${props.objeto.nombre} - ${props.objeto.apellido}`}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componente} </li>
      </ul>
    </>
  );
};

// propiedades por defecto
Propiedaes.defaultProps = {
  porDefecto: "las props",
};

// con prop types se pueden definir las caracteristicas que necesito que soporte las propiedades

Propiedaes.prototypes = {
  numero: PropTypes.number.isRequired,
};

export default Propiedaes;
