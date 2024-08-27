import { Fragment } from "react";
import Cabecera from "./componente/Cabecera"
import Formulario from "./componente/Formulario"
import Pie from "./componente/FechayHora"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <div className="container container-fluid">
        <br />
        <br />
        <Cabecera />
        <Formulario />
        <FechayHora />
      </div>
    </>
  );
}

export default App;