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
    const description = e.target.description.value;
    const date = e.target.date.value;
    const start = e.target.start.value;
    const end = e.target.end.value;
    
    this.props.addEventThunk(title, description, date, start, end);
    event.target.reset();
  }
  render(){
    console.log('this.props in FORM:',this.props)
    return (
      <div>
        <form onSubmit={(e)=>this.onSubmit(e)}>
          <input type='text' name='title'/>
          <br/>
          <input type='text' name='description'/>
          <br/>
          <input type='text' name='date'/>
          <br/>
          <input type='text' name='start'/>
          <br/>
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
  addEventThunk: function(title, description, date, start, end){
    return dispatch(addEventThunk(title, description, date, start, end))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Form);