import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  const {session: {isSignedIn}} = state
  return {...ownProps, isSignedIn}
}

const OnlyBeforeSignedInRoute = ({component: Component, isSignedIn, ...rest}) => (
  <Route {...rest} render={(props) => (
    isSignedIn ? (
      <Redirect to='/timeline' />
    ) : (
      <Component {...props} />
    )
  )}/>
)

export default connect(mapStateToProps, null, null, {pure: false})(OnlyBeforeSignedInRoute)
