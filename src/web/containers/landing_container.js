// @flow
import React from 'react'
import {connect} from 'react-redux'
import Radium from 'radium'
import {ModalTypes} from '../../constants/app'
import {openModal, closeModal} from '../../actions/modal'
import UserModal from '../components/user_modal'

const mapStateToProps = (state) => ({
  isModalOpen: state.modal.isModalOpen,
  identifier: state.modal.identifier,
})

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (identifier) => {
      dispatch(openModal(identifier))
    },
    closeModal: (identifier) => {
      dispatch(closeModal(identifier))
    },
  }
}

type Props = {
  isModalOpen: boolean,
  identifier: string,
  openModal: (string) => void,
  closeModal: (string) => void,
}

@Radium
class Landing extends React.PureComponent {
  props: Props

  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.overlay}>
          <h2 style={styles.title}>エンジニアがつながるSNS</h2>
          <p>エンジニアとつながろう。学んだ知識を気軽に共有しよう。</p>
          <button
            type='button'
            style={styles.signUpButton}
            onClick={() => this.props.openModal(ModalTypes.SIGN_UP)}
          >
            アカウント作成
          </button>
          <UserModal
            isModalOpen={this.props.isModalOpen}
            identifier={this.props.identifier}
            openModal={this.props.openModal}
            closeModal={this.props.closeModal}
          />
        </div>
      </div>
    )
  }
}

const styles = {
  wrapper: {
    backgroundImage: 'url(/images/lp.jpeg)',
    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    color: 'white',
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(to right bottom, rgb(191, 155, 129), rgba(0, 47, 75, 0.7))',
    opacity: 0.8,
  },
  title: {
    marginTop: 210,
    marginBottom: 30,
    fontSize: 40,
  },
  signUpButton: {
    marginTop: 40,
    width: 200,
    height: 60,
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 16,
    transition: 'all .3s ease',

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
    },
  },
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
