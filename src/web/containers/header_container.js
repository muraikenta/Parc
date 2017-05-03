import React from 'react'
import {connect} from 'react-redux'

const styles = {
  nav: {borderBottom: '1px solid gray'},
}

class Header extends React.PureComponent {
  render() {
    return (
      <nav style={styles.nav}>
        <h1>Parc</h1>
      </nav>
    )
  }

}

export default connect()(Header)
