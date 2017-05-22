// @flow
import React from 'react'
// TODO: import custom modal
import Modal from 'react-modal'
import {ModalTypes} from '../../constants/app'
import SignUpForm from '../containers/sign_up_form_container'
import SignInForm from '../containers/sign_in_form_container'

type Props = {
  isModalOpen: boolean,
  identifier: string,
  openModal: (string) => void,
  closeModal: (string) => void,
}

class UserModal extends React.PureComponent {
  props: Props

  render() {
    const {
      isModalOpen,
      identifier,
      openModal,
      closeModal,
    } = this.props

    const displayModal = (() => {
      switch (identifier) {
        case ModalTypes.SIGN_UP:
          return (
            <div>
              <SignUpForm />
              <div style={styles.linkSection}>
                <span
                  onClick={() => openModal(ModalTypes.SIGN_IN)}
                  style={styles.link}
                >
                  ログイン
                </span>
                はこちら
              </div>
            </div>
          )
        case ModalTypes.SIGN_IN:
          return (
            <div>
              <SignInForm />
              <div style={styles.linkSection}>
                <span
                  onClick={() => openModal(ModalTypes.SIGN_UP)}
                  style={styles.link}
                >
                  新規登録
                </span>
                はこちら
              </div>
            </div>
          )
      }
    })()

    return (
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => closeModal(identifier)}
        contentLabel='modal'
        style={styles.modal}
      >
        {displayModal}
      </Modal>
    )
  }
}

const styles = {
  modal: {
    overlay: {
      zIndex: 100,
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
    content: {
      position: 'absolute',
      top: '15%',
      padding: '40px 50px',
      margin: '0 auto',
      width: 300,
      maxHeight: 370,
      border: '1px solid #ccc',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      textAlign: 'center',
    },
  },
  linkSection: {
    marginTop: 30,
  },
  link: {
    fontSize: 14,
    color: '#1178e8',
    cursor: 'pointer',
  },
}

export default UserModal
