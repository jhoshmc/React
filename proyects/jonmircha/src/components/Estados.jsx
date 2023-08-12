import React from "react";
const ContadorHijo = (prop) => {
  return (
    <>
      <h3>Contador hijo</h3>
      <p>{prop.contador} </p>
    </>
  );
};

class Estados extends React.Component {
  constructor() {
    super();
    this.state = {
      cont: 0,
    };
  }

  aumentar = () => {
    this.setState({ cont: this.state.cont + 1 });
  };

  decrementar = () => {
    this.state.cont && this.setState({ cont: this.state.cont - 1 });
  };

  reiniciar = () => {
    this.setState({ cont: 0 });
  };

  render() {
    return (
      <div>
        <h3>Estados</h3>
        <p>{this.state.cont} </p>
        <button onClick={this.aumentar}>Aumentar</button>
        <button onClick={this.decrementar}>Decrementar</button>
        <button onClick={this.reiniciar}>Reiniciar</button>
        <ContadorHijo contador={this.state.cont} />
      </div>
    );
  }
}

export default Estados;
