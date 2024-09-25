import React from "react";

class ClassProms extends React.Component{

    render()
    {
        let name2 = {name : "jeevan",age:23}
        return(
            <div>
                <h1>your name is {this.props.name}</h1>
            </div>
        );
            
        
    }
}

export default ClassProms;