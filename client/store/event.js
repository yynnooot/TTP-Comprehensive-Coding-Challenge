import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
export const ADD_EVENT = 'ADD_EVENT'
export const GET_ALL_EVENTS = 'GET_ALL_EVENTS'
export const DELETE_EVENT = 'DELETE_EVENT'
/**
 * INITIAL STATE
 */
const initialState = {}

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
export function addEventThunk(title, description, date, start, end){
  return function(dispatch){
    return axios.post('/api/event',{title, description, date, start, end})
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
    default:
      return state
  }
}