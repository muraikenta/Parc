import React from 'react'
import {connect} from 'react-redux'
import {UserModalTypes} from '../../../constants/app'
import {openModal} from '../../../actions/modal'

const styles = {
  nav: {
    borderBottom: '1px solid gray',
    height: 50,
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
  loginBtn: {
    cursor: 'pointer',
  }
}

class BeforeLoginHeader extends React.PureComponent {
  render() {
    return (
      <div>
        <nav style={styles.nav}>
          <h1 style={styles.logo}>Parc</h1>
          <span
            onClick={() => this.props.dispatch(openModal(UserModalTypes.LOGIN))}
            style={styles.loginBtn}
          >
            ログイン
          </span>
        </nav>
      </div>
    )
  }
}

export default connect()(BeforeLoginHeader)
