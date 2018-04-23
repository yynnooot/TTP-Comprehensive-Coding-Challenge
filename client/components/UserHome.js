import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import moment from 'moment';
import { getEvent } from '../store/event';
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
    const month = this.state.timeContext.format("MMMM");
    const year = this.state.timeContext.format("Y");
    
    
    return (
      <div>
        <h3>{month} {year}</h3>
        <button onClick={()=>this.decrementMonth()}>&larr;</button>
        <button onClick={()=>this.incrementMonth()}>&rarr;</button>
        <Month timeContext={this.state.timeContext} />
      </div>
    )
  }
}

/**
 * CONTAINER
 */



export default connect(null, {getEvent})(UserHome);
