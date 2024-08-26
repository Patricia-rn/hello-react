import React,{Component} from "react";

const imgredes = ["/img/2023_Facebook_icon.svg.png", "/img/Instragram_logo_2022.svg.png", "/img/Youtube_logo.png"];


const rs= imgredes.map ((x)=> React.createElement("img", {className:"img-rs", src:x}));

class Pie extends Component{
    render (){
        return (
          <div className="div-footer">
            <h3>Siguenos en:</h3>
            {rs}
          </div> 
        );
};
}
export default Pie;

