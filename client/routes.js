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
        <Main>
          <Switch>
            <Route path="/" component={UserHome} />  
          </Switch>
        </Main>
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
