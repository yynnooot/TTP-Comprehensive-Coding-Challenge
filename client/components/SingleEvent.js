import React, { Component } from 'react';

export default class SingleEvent extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  render(){
    return (
      <div>
        <h1>From SingleEvent Component:</h1>
        <h1>{this.props.event.title}</h1>
      </div>
    )
  }
}