import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
export const ADD_EVENT = 'ADD_EVENT'
export const GET_ALL_EVENTS = 'GET_ALL_EVENTS'
/**
 * INITIAL STATE
 */
const initialState = {}

/**
 * ACTION CREATORS
 */
export function addEvent(payload){
  return {
    type: ADD_EVENT,
    payload
  }
}

export function getAllEvents(array){
  return {
    type: GET_ALL_EVENTS,
    array
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

/**
 * REDUCER
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_EVENTS: 
      return {...state, events: action.array}
    case ADD_EVENT: 
      return {...state, events:[...state.events, action.payload ]}
    default:
      return state
  }
}