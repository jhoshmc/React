import React from "react";

export class EventosES6 extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar() {
    this.setState({ contador: this.state.contador + 1 });
  }

  restar() {
    this.state.contador && this.setState({ contador: this.state.contador - 1 });
  }

  render() {
    return (
      <div>
        <h3>Eventos en componentes de clase ES6</h3>
        <h3>{this.state.contador} </h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
      </div>
    );
  }
}

//* property initializers
export class EventosES7 extends React.Component {
  state = {
    contador: 0,
  };

  sumar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  restar = () => {
    this.state.contador && this.setState({ contador: this.state.contador - 1 });
  };

  render() {
    return (
      <div>
        <h3>Eventos en componentes de clase ES7</h3>
        <h3>{this.state.contador} </h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
      </div>
    );
  }
}

const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick}>Boton echo componente</button>
);

export class MasSobreEventos extends React.Component {
  handleClick = (e, mensaje) => {
    console.log(mensaje);
  };
  render() {
    return (
      <div>
        <h3> Mas Sobre Eventos</h3>
        {/* en ves de hacer un bindo como en ES6, ejecuto el evento */}
        <button
          onClick={(e) =>
            this.handleClick(e, "hola, pasando parametro desde un evento")
          }
        >
          Saludo
        </button>
        <br />
        {/*evento personalizado */}

        <Boton
          myOnClick={(e) =>
            this.handleClick(e, "hola, pasando parametro desde un evento")
          }
        />
      </div>
    );
  }
}
