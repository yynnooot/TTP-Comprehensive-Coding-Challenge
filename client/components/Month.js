import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvent } from '../store/event';

import Day from './Day'

class Month extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  componentDidMount(){
    this.props.getEvent();
  }
  render(){
    console.log('********', this.props)
    return (
      <div>
        <h1>Month COMPONENT</h1>
        
        <Day/>
             
        
        
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  allEvents: state.event.events
  }
)

export default connect(mapStateToProps,{getEvent})(Month)
