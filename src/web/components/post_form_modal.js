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
    this.state = {
      value: '',
    }
  }

  onChange(e) {
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        contentLabel='PostFormModal'
      >
        <textarea
          value={this.state.value}
          style={styles.textarea}
          onChange={(e) => {this.onChange(e)}}
        />
        <button
          onClick={() => {this.props.submitPost(this.state.value)}}
        >
          投稿
        </button>
      </Modal>
    )
  }
}

export default PostFormModal
