import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvent } from '../store/event';
import SingleEvent from './SingleEvent';

class Day extends Component {
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
        <h1>DAY COMPONENT</h1>
        { this.props.allEvents && this.props.allEvents.map((itemObj,index) => {
          console.log('EVENT OBJ:',itemObj)
            return (
              <SingleEvent key={index} event={itemObj}/>
              
            )
          })
        }
        
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  allEvents: state.event.events
  }
)

export default connect(mapStateToProps,{getEvent})(Day)
