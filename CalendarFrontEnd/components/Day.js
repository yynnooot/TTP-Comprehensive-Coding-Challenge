import React, { Component } from 'react';
import { connect } from 'react-redux';

import SingleEvent from './SingleEvent';
import Form from './Form';

class Day extends Component {
  constructor(props){
    super(props)
    this.state = {
      showForm: false,
      disableShowForm: false
    }
  }
  
  showForm = () => {
    if(this.state.disableShowForm){
      return
    }
    this.setState({showForm: true})
    this.setState({disableShowForm: true})
  }
  hideForm = () => {
    this.setState({showForm: false})
    this.setState({disableShowForm: false})
  }
  render(){

    const { day, month, year, allEvents } = this.props;
    const date = `${month}/${day}/${year}`;
    const events = []
    if(day){
      return (
        <div className='day-container' onClick={()=>this.showForm()}>
          <h3>{day}</h3>
          { allEvents && allEvents.filter(eventObj => { return eventObj.date === date}).map((eventObj,idx) => {
            events.push(eventObj)
            return <SingleEvent key={idx} event={eventObj}/>
            })
          } 
          {this.state.showForm && <Form date={date} events={events} hideForm={this.hideForm}/>}
          
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
  year: state.event.year
})
const mapDispatchToProps = (dispatch) => ({
  
})
export default connect(mapStateToProps, mapDispatchToProps)(Day)
