import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvent } from '../store/event';
import moment from 'moment';

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
  weekdayNames = moment.weekdays();
  todayNum = moment().format("D");
  todayDate = moment().format('l');

  render(){
    
    // console.log("weekdayName:",this.weekdayNames)
    // console.log("todayNum:",this.todayNum)
    console.log("today date:",this.todayDate)
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Month COMPONENT</td>
            </tr>
          </thead>
          <tbody>
            <tr className='calendar-row'>
              {this.weekdayNames.map((day,idx)=>{
                return <td className='weekday-name box' key={idx}>{day}</td>
              })}
            </tr>

          </tbody>
        </table>
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
