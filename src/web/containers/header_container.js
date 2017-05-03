import React from 'react'
import {connect} from 'react-redux'

const styles = {
  nav: {borderBottom: '1px solid gray'},
  logo: {margin: 0},
}

class Header extends React.PureComponent {
  render() {
    return (
      <nav style={styles.nav}>
        <h1 style={styles.logo}>Parc</h1>
      </nav>
    )
  }

}

export default connect()(Header)
