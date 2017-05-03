import React from 'react'
import {connect} from 'react-redux'

const styles = {
  nav: {
    borderBottom: '1px solid gray',
    height: 45,
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    margin: 0,
    marginRight: 'auto',
  },
  postIcon: {height: '80%'},
}

class Header extends React.PureComponent {
  render() {
    return (
      <nav style={styles.nav}>
        <h1 style={styles.logo}>Parc</h1>
        <img src="/images/post_icon.png" style={styles.postIcon} />
      </nav>
    )
  }

}

export default connect()(Header)
