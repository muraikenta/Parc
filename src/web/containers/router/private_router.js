import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  const {session: {isSignedIn}} = state
  return {...ownProps, isSignedIn}
}

const PrivateRoute = ({component: Component, isSignedIn, ...rest}) => (
  <Route {...rest} render={(props) => (
    isSignedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to='/' />
    )
  )} />
)

export default connect(mapStateToProps, null, null, {pure: false})(PrivateRoute)
