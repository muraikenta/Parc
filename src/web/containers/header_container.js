import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const styles = {
  nav: {
    borderBottom: '1px solid gray',
    height: 45,
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  logo: {
    margin: 0,
    marginRight: 'auto',
  },
  postIcon: {
    height: '80%',
    marginLeft: '15'
  },
}

class Header extends React.PureComponent {
  render() {
    return (
      <nav style={styles.nav}>
        <h1 style={styles.logo}><Link to='timeline' style={{textDecoration: 'none'}}>Parc</Link></h1>
        <img src="/images/mypage_icon.png" style={styles.postIcon} />
        <img src="/images/post_icon.png" style={styles.postIcon} />
      </nav>
    )
  }

}

export default connect()(Header)
