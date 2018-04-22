import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import moment from 'moment';

import Month from './Month';

class UserHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      timeContext: moment()
    }
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
    let month = this.state.timeContext.format("MMMM");
    let year = this.state.timeContext.format("Y");
    
    
    return (
      <div>
        <h3>{month} {year}</h3>
        <button onClick={()=>this.incrementMonth()}>add</button>
        <button onClick={()=>this.decrementMonth()}>subtract</button>
        <Month timeContext={this.state.timeContext}/>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  
}
