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

  getDaysToMap = (emptyDays, daysInMonth) => {
    let daysArray = [];
    for(let i=1; i<=emptyDays; i++){
      daysArray.push("")
    }
    for(let i=1; i<=daysInMonth; i++){
      daysArray.push(i)
    }
    console.log("days array:", daysArray)
    return daysArray;
  }

  createRows = (daysArray) => {
    let arrToMap = [];
    let row = [];

    for(let i=0;i<daysArray.length;i++){
      if(i !== 0 && i%7 === 0){
        arrToMap.push(row);
        row = []
        row.push(<td>{daysArray[i]}</td>)
      } else if(i === daysArray.length-1){
        row.push(<td>{daysArray[i]}</td>)
        arrToMap.push(row);
      } else {
        row.push(<td>{daysArray[i]}</td>)
      }  
    }
    console.log('arrtomap',arrToMap)
    return arrToMap
  }


  render(){
    const daysInMonth = this.props.timeContext.daysInMonth();
    const month = this.props.timeContext.format("MMMM");
    const emptyDays = this.props.timeContext.startOf('month').format('d');
    console.log('there are:',daysInMonth, "days in month:",month,',and:', emptyDays, "empty slots in front of calendar" )
    // console.log("weekdayName:",this.weekdayNames)
    // console.log("todayNum:",this.todayNum)
    // console.log("today date:",this.todayDate)
    const daysArray = this.getDaysToMap(emptyDays,daysInMonth)
    const mapRows = this.createRows(daysArray)
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
            {mapRows.map((row,i)=>{
              return (<tr key={i}>{row}</tr>)
            })}
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
