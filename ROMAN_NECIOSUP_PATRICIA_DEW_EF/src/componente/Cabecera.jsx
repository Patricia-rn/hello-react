import React,{Component} from "react";
class Cabecera extends Component{
    state={
        titulo:"",
        imgcab:""
    };
    constructor (props){
        super (props);
        this.state={
            titulo:"MueblesFAST",
            imgcab: "./componente/ExampleCarouselImage.jpg"
        };
    };

    render(){
        setTimeout(() => this.setState( {
            c: Math.floor(Math.random()*imagenes.length),
            imgcab: imagenes [this.State.c]  
         }), 1000);
 
    return(
        <div className="Bloque">
            <h1 className="h1cab">{this.state.titulo}</h1>
            <img className="imgcab" src={this.state.imgcab} alt="Cabecera"/>
        </div>
        );
    };
}
export default Cabecera;




