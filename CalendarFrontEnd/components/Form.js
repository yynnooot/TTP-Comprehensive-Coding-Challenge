import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {addEventThunk, deleteEventThunk, hideForm } from '../store/event';
import {addEventThunk, deleteEventThunk } from '../store/event';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const start = e.target.start.value;
    const end = e.target.end.value;
    
    this.props.addEventThunk(title, this.props.date, start, end);
    this.props.hideForm();
  }
  render(){
    console.log('this.props.date in FORM:',this.props.date)
    // console.log('date in day:',date)
    return (
      <div className='form-container popup-div'>
        <div className='popup-inner-div'>
          <button onClick={()=>this.props.hideForm()}>x</button>

          { this.props.events? 
            ( <div>  
              <h2>Your Events For {this.props.date}:</h2>
              <ul> 
                {this.props.events.map((eventObj,idx) => {
                  return (
                    <li className='form-event-display' key={idx*10}>
                      <h6 key={idx}>{eventObj.title}</h6>
                      <button key={eventObj.title} onClick={()=>this.props.deleteEvent(eventObj.id)}>delete</button>
                    </li>
                  )
                })}
              </ul>
            </div>) : <h2>{this.props.date}</h2>
          }

          <h2>Add More Events Below:</h2>
          <form className='form' onSubmit={(e)=>this.onSubmit(e)}>
            <div className='inline'>
              <label>Title:</label>
              <input className='form-input' type='text' name='title' required/>
            </div>
            <div className='inline'>
              <label>Start Time:</label>
              <input className='form-input' type='text' name='start'/>
            </div>
            <div className='inline'>
              <label>End Time:</label>
              <input className='form-input' type='text' name='end'/>
            </div>
            <br/>
            <input className='form-btn' type='submit'/>
          </form>
        </div>
      </div>
    )
  }
}

/* container */ 
const mapStateToProps = (state) => ({
  allEvents: state.event.events
})

const mapDispatchToProps = (dispatch) => ({
  addEventThunk: function(title, date, start, end){
    return dispatch(addEventThunk(title, date, start, end))
  },
  deleteEvent: function(id){
    dispatch(deleteEventThunk(id))
  },
  // hideFormFunc: function(){
  //   dispatch(hideForm())
  // }
})

export default connect(mapStateToProps,mapDispatchToProps)(Form);