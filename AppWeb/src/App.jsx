import { Fragment } from "react";
import Contador from './Componentes/Contador'
import Acordion from "./Componentes/Acordion";
import Carrusel from './Componentes/Carrusel';
import Formulario from './Componentes/Formulario'

function App(){
  return(
    <>
    <Carrusel />
    <Contador />
    <Formulario />
    <Acordion />
    </>
  );
}

export default App;