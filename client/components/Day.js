import React, { Component } from 'react';
import { connect } from 'react-redux';

import SingleEvent from './SingleEvent';
import Form from './Form';

class Day extends Component {
  constructor(props){
    super(props)
    this.state = {
      showForm: false
    }
  }
  
  toggleForm = () => {
    this.setState({showForm: !this.state.showForm})
  }
  render(){

    const { day, month, year, allEvents } = this.props;

    return (
      <div>
        <h3>{day}</h3>
        { allEvents && allEvents.filter(eventObj => { return eventObj.date === `${month}/${day}/${year}`}).map((eventObj,idx) => {
          return <SingleEvent key={idx} event={eventObj}/>
          })
        } 
        {this.state.showForm ? <Form toggle={this.toggleForm}/> : <button onClick={()=>this.toggleForm()}>show form</button>}
        
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  allEvents: state.event.events
})

export default connect(mapStateToProps)(Day)
