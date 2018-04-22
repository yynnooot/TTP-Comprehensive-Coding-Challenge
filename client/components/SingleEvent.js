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
      <div>
        <h4>From SingleEvent Component:</h4>
        <h6>{this.props.event.title}</h6>
        <button onClick={()=>this.props.deleteEvent(id)}>delete</button>
      </div>
    )
  }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch) => ({
  deleteEvent: function(id){
    dispatch(deleteEventThunk(id))
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(SingleEvent)