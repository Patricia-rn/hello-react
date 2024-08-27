import { Fragment, useRef } from "react";
import Cabecera from "./componente/Cabecera"
import Imagen from "./componente/Imagen"
import Formulario from "./componente/Formulario"
import FechayHora from "./componente/FechayHora"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from "react-bootstrap";
import './index.css'

function App() {
  return (
    <>
      <div className="container container-fluid">
        <br />
        <br />
        <Cabecera />
        <Imagen/>
        <Carousel/>
        <Formulario />
        <FechayHora />
      </div>
    </>
  );
};

export default App;