import React from "react";


class ClassProps2 extends React.Component{
    render()
    {
        return(
            <div> 
        <h1>your name is{this.props.name.name}
        your age is {this.props.name.age}</h1>
        <h1>Name</h1>
        
     </div>
        );
    }
}

export default ClassProps2