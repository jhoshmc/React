import Saludo from "./components/Saludo";
import Propiedaes from "./components/Propiedades";
import Estados from "./components/Estados";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasSobreEventos } from "./components/Eventos";
import "./App.css";

function App() {
  return (
    <section>
      <Saludo msj={"hola soy un componente funcional pasado por una prop"} />
      <hr />
      <Propiedaes
        cadena="esto es un texto"
        numero={19}
        boolean={false}
        arreglo={[1, 2, 3]}
        objeto={{ nombre: "josh", apellido: "moran" }}
        funcion={(n) => Math.pow(n, 2)}
        elementoReact={<i>Esto es un elemento react</i>}
        componente={<Saludo msj="soy un componente pasado como prop" />}
      />
      <hr />
      <Estados />
      <hr />
      <RenderizadoCondicional />
      <hr />
      <RenderizadoElementos />
      <hr />
      <EventosES6 />
      <hr />
      <EventosES7 />
      <hr />
      <MasSobreEventos />
    </section>
  );
}

export default App;
