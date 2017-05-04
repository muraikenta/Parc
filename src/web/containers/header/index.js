import React from 'react'
import {connect} from 'react-redux'
import AfterLoginHeader from './after_login_header_container'
import BeforeLoginHeader from './before_login_header_container'

const mapStateToProps = (state) => {
  const {session: {isSignedIn}} = state
  return {isSignedIn}
}

const Header = ({isSignedIn}) => (
  isSignedIn ? <AfterLoginHeader /> : <BeforeLoginHeader />
)

export default connect(mapStateToProps)(Header)
