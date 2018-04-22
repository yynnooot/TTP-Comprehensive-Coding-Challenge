import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvent } from '../store/event';
import SingleEvent from './SingleEvent';

import Form from './Form';

class Day extends Component {
  constructor(props){
    super(props)
    this.state = {
      showForm: false
    }
  }
  componentDidMount(){
    this.props.getEvent();
  }
  toggleForm = () => {
    this.setState({showForm: !this.state.showForm})
  }
  render(){
    return (
      <div>
        <h3>{this.props.num}</h3>
        { this.props.allEvents && this.props.allEvents.map((itemObj,index) => {
            return (
              <SingleEvent key={index} event={itemObj}/>
            )
          })
        }
        {this.state.showForm ? <Form toggle={this.toggleForm}/> : <button onClick={()=>this.toggleForm()}>show form</button>}
        
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  allEvents: state.event.events
  }
)

export default connect(mapStateToProps,{getEvent})(Day)
