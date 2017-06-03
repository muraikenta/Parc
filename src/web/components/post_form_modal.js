import React from 'react'
import Modal from './modal'
import Markdown from './markdown'

class PostFormModal extends React.PureComponent {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        contentLabel='PostFormModal'
      >
        <div style={styles.flexContainer}>
          <div
            style={styles.flexHeader}
          >
            <h2>Create Post</h2>
          </div>
          <div style={styles.contents}>
            <textarea
              value={this.props.postFormValue}
              style={{...styles.content, ...styles.textarea}}
              onChange={(e) => { this.props.onPostFormChange(e.target.value) }}
            />
            <div style={{...styles.content, ...styles.markdownPreview}}>
              <Markdown source={this.props.postFormValue} />
            </div>
          </div>
          <div style={styles.flexFooter}>
            <button
              onClick={this.props.submitPost}
            >
              投稿
            </button>
          </div>
        </div>
      </Modal>
    )
  }
}

const styles = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  flexHeader: {
    flex: 0,
    textAlign: 'center',
  },
  contents: {
    flex: 1,
    display: 'flex',
  },
  content: {
    flex: 1,
    height: '100%',
    overflow: 'scroll',
  },
  textarea: {
    padding: '0 2px',
  },
  markdownPreview: {
    padding: '0 20px',
    border: '1px solid black',
  },
  flexFooter: {
    flex: 0,
    paddingTop: 20,
    textAlign: 'center',
  },
}

export default PostFormModal
