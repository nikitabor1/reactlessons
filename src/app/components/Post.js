import React from 'react';


export default class Post extends React.Component{
    render(){
        return(<li>
            <h1>{this.props.title}</h1>
            <p>{this.props.postbody}</p></li>)
    }
}