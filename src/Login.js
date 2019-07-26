import React from 'react'; 


class Login extends React.Component{
    render(){
        return(
            <div>
            <input placeholder ={this.props.name}></input>
            <input placeholder ={this.props.pathw}></input>
            <button>{this.props.enterButText}</button>	
            </div>
        )
    }
};

export {Login};