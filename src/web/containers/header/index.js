import React from 'react'
import {connect} from 'react-redux'
import AfterLoginHeader from './after_login_header_container'
import BeforeLoginHeader from './before_login_header_container'

const mapStateToProps = (state) => {
  const {session: {isSignedIn, me}} = state
  return {isSignedIn, me}
}

const Header = ({isSignedIn, me}) => (
  isSignedIn ? <AfterLoginHeader me={me}/> : <BeforeLoginHeader />
)

export default connect(mapStateToProps)(Header)
