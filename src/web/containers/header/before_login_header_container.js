// @flow
import React from 'react'
import {connect} from 'react-redux'
import {ModalTypes} from '../../../constants/app'
import {openModal} from '../../../actions/modal'

type Props = {
  dispatch: Function,
}

class BeforeLoginHeader extends React.PureComponent {
  props: Props
  
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
    height: 50,
    padding: '15px 35px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    color: 'white',
    opacity: 0.85,
  },
  logo: {
    margin: 0,
    marginRight: 'auto',
  },
  loginBtn: {
    cursor: 'pointer',
  },
}

export default connect()(BeforeLoginHeader)
