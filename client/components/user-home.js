import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'


export const UserHome = (props) => {

  return (
    <div>
      <h3>UserHome Component</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  
}
