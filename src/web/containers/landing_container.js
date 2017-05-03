import React from 'react'
import {connect} from 'react-redux'
import Modal from 'react-modal'

class Landing extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }
  }

  openModal() {
    this.setState({isModalOpen: true})
  }

  closeModal() {
    this.setState({isModalOpen: false})
  }

  render() {
    return (
      <div>
        <h2>エンジニアが集まる場所</h2>
        <button
          type='button'
          onClick={this.openModal.bind(this)}
        >
          アカウント作成
        </button>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal.bind(this)}
          contentLabel='modal'
        >
          <div>hoge</div>
        </Modal>
      </div>
    )
  }
}

export default connect()(Landing)
