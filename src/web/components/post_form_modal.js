import React from 'react'
import Modal from 'react-modal'

const styles = {
  textarea: {
    // TODO: use flex-box
    width: '100%',
    height: '80%',
  },
}

class PostFormModal extends React.PureComponent {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        contentLabel='PostFormModal'
      >
        <textarea
          style={styles.textarea}
        />
      </Modal>
    )
  }
}

export default PostFormModal
