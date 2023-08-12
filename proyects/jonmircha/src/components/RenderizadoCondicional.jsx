import React from "react";

const Login = () => {
  return (
    <div>
      <h3>login</h3>
    </div>
  );
};
const Logout = () => {
  return (
    <div>
      <h3>logout</h3>
    </div>
  );
};

class RenderizadoCondicional extends React.Component {
  constructor() {
    super();
    this.state = {
      sesion: false,
    };
  }

  render() {
    return (
      <div>
        <h3>Renderizado condicional</h3>
        {this.state.sesion ? <Login /> : <Logout />}
      </div>
    );
  }
}

export default RenderizadoCondicional;
