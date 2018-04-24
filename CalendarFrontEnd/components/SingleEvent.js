import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteEventThunk } from '../store/event';

class SingleEvent extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  render(){
    const id = this.props.event.id;
    return (
      <div className='event-title-container'>
        <h6>{this.props.event.title}</h6>
        {/* <button onClick={()=>this.props.deleteEvent(id)}>x</button> */}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteEvent: function(id){
    dispatch(deleteEventThunk(id))
  }
})
export default connect(null,mapDispatchToProps)(SingleEvent)