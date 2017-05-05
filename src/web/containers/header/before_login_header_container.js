import React from 'react'
import {connect} from 'react-redux'
import {ModalTypes} from '../../../constants/app'
import {openModal} from '../../../actions/modal'

class BeforeLoginHeader extends React.PureComponent {
  render() {
    return (
      <div>
        <nav style={styles.nav}>
          <h1 style={styles.logo}>Parc</h1>
          <span
            onClick={() => this.props.dispatch(openModal(ModalTypes.SIGN_IN))}
            style={styles.loginBtn}
          >
            ログイン
          </span>
        </nav>
      </div>
    )
  }
}

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

export default connect()(BeforeLoginHeader)
