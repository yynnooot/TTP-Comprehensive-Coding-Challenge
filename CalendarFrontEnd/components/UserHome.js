import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import moment from 'moment';
import { getEvent, setMonth, setYear } from '../store/event';
import Month from './Month';

class UserHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      timeContext: moment()
    }
  }  
  componentDidMount(){
    this.props.getEvent();
    const month = this.state.timeContext.format("MM");
    const year = this.state.timeContext.format("Y");
    this.props.setMonth(month)
    this.props.setYear(year)
  }
  componentDidUpdate(){
    const month = this.state.timeContext.format("MM");
    const year = this.state.timeContext.format("Y");
    this.props.setMonth(month)
    this.props.setYear(year)
  }

  incrementMonth = () => {
    let newContext = moment(this.state.timeContext).add(1,"month")
    this.setState({timeContext: newContext})
  }
  decrementMonth = () => {
    let newContext = moment(this.state.timeContext).subtract(1,"month")
    this.setState({timeContext: newContext})
  }
  render(){
    
    const year = this.state.timeContext.format("Y");
    const monthStr = this.state.timeContext.format("MMMM");
  
    return (
      <div>
        <div className='calendar-title-container'>
          <button onClick={()=>this.decrementMonth()}>&larr;</button>
          <h3>{monthStr} {year}</h3>
          <button onClick={()=>this.incrementMonth()}>&rarr;</button>
        </div>
        
        <Month timeContext={this.state.timeContext} />
      </div>
    )
  }
}

/**
 * CONTAINER
 */

const mapDispatchToProps = (dispatch) => ({
  setMonth: function(month){
    return dispatch(setMonth(month))
  },
  setYear: function(year){
    return dispatch(setYear(year))
  },
  getEvent: function(){
    return dispatch(getEvent())
  }
})

export default connect(null, mapDispatchToProps)(UserHome);
