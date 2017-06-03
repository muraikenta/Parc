// @flow
import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
  const {session: {isSignedIn}} = state
  return {...ownProps, isSignedIn}
}

type Props = {
  component: Object,
  isSignedIn: boolean,
}

const OnlyBeforeSignedInRoute = ({component: Component, isSignedIn, ...rest}: Props) => (
  <Route {...rest} render={(props) => (
    isSignedIn ? (
      <Redirect to='/timeline' />
    ) : (
      <Component {...props} />
    )
  )} />
)

export default connect(mapStateToProps, null, null, {pure: false})(OnlyBeforeSignedInRoute)
