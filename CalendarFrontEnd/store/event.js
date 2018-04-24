import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
export const ADD_EVENT = 'ADD_EVENT'
export const GET_ALL_EVENTS = 'GET_ALL_EVENTS'
export const DELETE_EVENT = 'DELETE_EVENT'
export const SET_MONTH = 'SET_MONTH'
export const SET_YEAR = 'SET_YEAR'
// export const SHOW_FORM = 'SHOW_FORM'
// export const HIDE_FORM = 'HIDE_FORM'
/**
 * INITIAL STATE
 */
const initialState = {
  // showForm: false
}

/**
 * ACTION CREATORS
 */
export function addEvent(newEvent){
  return {
    type: ADD_EVENT,
    newEvent
  }
}

export function getAllEvents(eventsArray){
  return {
    type: GET_ALL_EVENTS,
    eventsArray
  }
}

export function deleteEvent(eventsArray){
  return {
    type: DELETE_EVENT,
    eventsArray
  }
}
export function setMonth(month){
  return {
    type: SET_MONTH,
    month
  }
}
export function setYear(year){
  return {
    type: SET_YEAR,
    year
  }
}

// export function showForm(){
//   return {
//     type: SHOW_FORM
//   }
// }

// export function hideForm(){
//   return {
//     type: HIDE_FORM
//   }
// }
/**
 * THUNK CREATORS
 */
export function getEvent(){
  return function(dispatch){
    return axios.get('/api/event')
      .then(res => dispatch(getAllEvents(res.data)))
      .catch(err => console.error(err))
  }
}
export function addEventThunk(title, date, start, end){
  return function(dispatch){
    return axios.post('/api/event',{title, date, start, end})
      .then(res => dispatch(addEvent(res.data)))
      .catch(err => console.error(err))
  }
}
export function deleteEventThunk(id){
  return function(dispatch){
    return axios.delete(`/api/event/${id}`)
      .then(res => dispatch(deleteEvent(res.data)))
      .catch(err => console.error(err))
  }
}
/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_EVENTS: 
      return {...state, events: action.eventsArray}
    case ADD_EVENT: 
      return {...state, events: [...state.events, action.newEvent ]}
    case DELETE_EVENT:
      return {...state, events: action.eventsArray}
    case SET_MONTH:
      return {...state, month: action.month }
    case SET_YEAR:
      return {...state, year: action.year }
    // case SHOW_FORM:
    //   return {...state, showForm: true }
    // case HIDE_FORM:
    //   return {...state, showForm: false }
    default:
      return state
  }
}