import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addEventThunk} from '../store/event';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    // const date = e.target.date.value;
    const start = e.target.start.value;
    const end = e.target.end.value;
    
    this.props.addEventThunk(title, this.props.date, start, end);
    //e.target.reset();
    this.props.toggle();
  }
  render(){
    console.log('this.props.date in FORM:',this.props.date)
    // console.log('date in day:',date)
    return (
      <div>
        <form onSubmit={(e)=>this.onSubmit(e)}>
          <label>Title:</label>
          <input type='text' name='title'/>
          <br/>
          {/* <label>Date</label>
          <input type='text' name='date' value='MM/DD/YYYY'/>
          <br/> */}
          <label>Start Time:</label>
          <input type='text' name='start'/>
          <br/>
          <label>End Time:</label>
          <input type='text' name='end'/>
          <br/>
          <input type='submit'/>
        </form>

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
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Form);