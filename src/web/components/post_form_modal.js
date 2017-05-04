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
  constructor() {
    super()
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        contentLabel='PostFormModal'
      >
        <textarea
          value={this.props.postFormBody}
          style={styles.textarea}
          onChange={(e) => {this.props.onPostFormChange(e.target.value)}}
        />
        <button
          onClick={this.props.submitPost}
        >
          投稿
        </button>
      </Modal>
    )
  }
}

export default PostFormModal
