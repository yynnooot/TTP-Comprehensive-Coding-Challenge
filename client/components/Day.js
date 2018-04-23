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
    const date = `${month}/${day}/${year}`;
    // console.log('date in day:',date)
    if(day){
      return (
        <div>
          <h3>{day}</h3>
          { allEvents && allEvents.filter(eventObj => { return eventObj.date === date}).map((eventObj,idx) => {
            return <SingleEvent key={idx} event={eventObj}/>
            })
          } 
          {this.state.showForm ? <Form date={date} toggle={this.toggleForm}/> : <button onClick={()=>this.toggleForm()}>show form</button>}
          
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
}
)
export default connect(mapStateToProps)(Day)
