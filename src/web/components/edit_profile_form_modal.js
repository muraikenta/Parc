import React from 'react'
import Modal from 'react-modal'

const styles = {
  textarea: {
    width: '100%',
    height: '100%',
  },
}

class EditProfileFormModal extends React.PureComponent {
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
        contentLabel='EditProfileFormModal'
      >
        <textarea
          value={this.state.value}
          style={styles.textarea}
          onChange={(e) => { this.onChange(e) }}
        />
        <button
          onClick={() => {this.props.submitProfile(this.state.value)}}
        >
          変更を保存
        </button>
      </Modal>
    )
  }
}

export default EditProfileFormModal
