import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Day from './Day'

class Month extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  getDaysToMap = (emptyDays, daysInMonth) => {
    let daysArray = [];
    for(let i=1; i<=emptyDays; i++){
      daysArray.push("")
    }
    for(let i=1; i<=daysInMonth; i++){
      daysArray.push(i)
    }
    return daysArray;
  }

  setupRows = (daysArray) => {
    let arrOfRows = [];
    let row = [];
    for(let i=0;i<daysArray.length;i++){
      if(i !== 0 && i%7 === 0){
        arrOfRows.push(row);
        row = []
        row.push(<td key={i}> <Day day={daysArray[i]} month={this.props.month} year={this.props.year}/> </td>)
      } else if(i === daysArray.length-1){
        row.push(<td key={i}> <Day day={daysArray[i]} month={this.props.month} year={this.props.year}/> </td>)
        arrOfRows.push(row);
      } else {
        row.push(<td key={i}> <Day day={daysArray[i]} month={this.props.month} year={this.props.year}/> </td>)
      }  
    }
    return arrOfRows
  }


  render(){
    const weekdayNames = moment.weekdays();
    const daysInMonth = this.props.timeContext.daysInMonth();
    const monthStr = this.props.timeContext.format("MMMM");
    const emptyDays = this.props.timeContext.startOf('month').format('d');
    console.log('there are:',daysInMonth, "days in month:",monthStr,',and:', emptyDays, "empty slots in front of calendar" )
   
    const daysArray = this.getDaysToMap(emptyDays,daysInMonth)
    const rowsArray = this.setupRows(daysArray)

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
              {weekdayNames.map((day,idx)=>{
                return <td className='weekday-name box' key={day}>{day}</td>
              })}
            </tr>
            {rowsArray.map((row,idx)=>{
              return (<tr key={idx}>{row}</tr>)
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
    allEvents: state.event.events,
    month: state.event.month,
    year: state.event.year
  }
)

export default connect(mapStateToProps)(Month)
