import React from "react";


class Reactstate extends React.Component{

    constructor(){
        super();
        this.state={initialvalue:"welcome",name:"guys"}
        
    }
      Changevalue=()=>{
        this.setState({initialvalue:"thank you"})
      }
      
    
    render(){
        return<div>
            <h1>{ this.state.initialvalue}<span>  </span>{this.state.name}</h1>
            <br />
            <button  type="button" onClick={this.Changevalue}>exit</button>
            </div>
    }
}

export default Reactstate