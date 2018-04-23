import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch, Router} from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import {Main, UserHome} from './components'


/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    
  }

  render () {
    return (
      <Router history={history}>
        <div>
          <Main/>
          <Switch>
            <Route exact path="/" component={UserHome}/>  
          </Switch>
        </div>
      </Router>
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

const mapDispatch = (dispatch) => {
  return {
   
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {

}
