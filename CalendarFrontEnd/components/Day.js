import React, { Component } from 'react';
import { connect } from 'react-redux';
import {showForm, hideForm } from '../store/event';

import SingleEvent from './SingleEvent';
import Form from './Form';

class Day extends Component {
  constructor(props){
    super(props)
    this.state = {
      showForm: this.props.showForm
    }
  }
  
  // showForm = () => {
  //   this.setState({showForm: true})
  // }
  // hideForm = () => {
  //   this.setState({showForm: false})
  //   console.log("HIT HIDEFORM")
  // }
  render(){

    const { day, month, year, allEvents } = this.props;
    const date = `${month}/${day}/${year}`;
    const events = []
    if(day){
      return (
        <div className='day-container' onClick={()=>this.props.showFormFunc()}>
          <h3>{day}</h3>
          { allEvents && allEvents.filter(eventObj => { return eventObj.date === date}).map((eventObj,idx) => {
            events.push(eventObj)
            return <SingleEvent key={idx} event={eventObj}/>
            })
          } 
          {this.state.showForm && <Form date={date} events={events}/>}
          
        </div>
      )
    } else {
      return null
    }
  }
}

const mapStateToProps = (state)=>({
  allEvents: state.event.events,
  month: state.event.month,
  year: state.event.year,
  showForm: state.event.showForm
})
const mapDispatchToProps = (dispatch) => ({
  showFormFunc: function(){
    dispatch(showForm())
  },
  hideFormFunc: function(){
    dispatch(hideForm())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Day)
