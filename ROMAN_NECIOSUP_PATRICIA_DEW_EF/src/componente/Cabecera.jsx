import React,{Component} from "react";

const imgredes = ["/img/2023_Facebook_icon.svg.png", "/img/Instragram_logo_2022.svg.png", "/img/Youtube_logo.png"];
class Cabecera extends Component{
    state={
        titulo:"",
        imgcab:""
    };

    constructor (props){
        super (props);
        this.state={
            titulo:"MueblesFAST",
            imgcab:"https://images.app.goo.gl/w8nx2r5JuRWXE76C9"
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
