import { Fragment } from "react";
import Cabecera from "./componente/Cabecera"
import Formulario from "./componente/Formulario"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <div className="container container-fluid">
        <br />
        <br />
        <h1>MueblesFAST</h1>
        <Cabecera />
        <Formulario />
  
      </div>
    </>
  );
}

export default App;