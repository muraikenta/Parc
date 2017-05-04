import React from 'react'
import Modal from 'react-modal'

const styles = {}

class EditProfileFormModal extends React.PureComponent {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        contentLabel='EditProfileFormModal'
      >
        <textarea
          style={styles.textarea}
        />
      </Modal>
    )
  }
}

export default EditProfileFormModal
