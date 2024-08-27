import React,{Component} from "react";

let f = new Date();

class FechayHora extends Component{
  state = {
    fecha: null,
    hora: null
  };
  constructor (props){
    super(props);
    this.state={
      fecha: f.getDate() + "/" + (f.getMonth()+ 1)+"/" + f.getFullYear()
    }
  };
  render (){
      f= new Date ();
      let h = f.getHours();
      let m = f.getMinutes() < 10 ? "0" + f.getMinutes(): f.getMinutes();
      let s = f.getSeconds() < 10 ? "0" + f.getSeconds(): f.getSeconds();
      setTimeout(()=> this.setState({
        hora : h + ":" + m + ":" + s
      }), 1000);
      return (
          <div>
            <div>MueblesFAST</div>
            <div className="div-fecha">Fecha{this.state.fecha},Hora{this.state.hora}</div>
          </div>
        );
};
}
export default FechayHora;