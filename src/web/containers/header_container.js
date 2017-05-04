import React from 'react'
import {connect} from 'react-redux'
import PostFormModal from '../components/post_form_modal'

const styles = {
  nav: {
    borderBottom: '1px solid gray',
    height: 45,
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  logo: {
    margin: 0,
    marginRight: 'auto',
  },
  postIcon: {
    height: '80%',
    cursor: 'pointer',
    marginLeft: 15,
  },
}

class Header extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      isPostFormModalOpen: false,
    }
  }

  openPostFormModal() {
    if (this.state.isPostFormModalOpen) return
    this.setState({isPostFormModalOpen: true})
  }

  closePostFormModal() {
    if (!this.state.isPostFormModalOpen) return
    this.setState({isPostFormModalOpen: false})
  }


  render() {
    return (
      <div>
        <nav style={styles.nav}>
          <h1 style={styles.logo}>Parc</h1>
          <img src="/images/mypage_icon.png" style={styles.postIcon} />
          <img
            src="/images/post_icon.png"
            style={styles.postIcon}
            onClick={this.openPostFormModal.bind(this)}
          />
        </nav>
        <PostFormModal
          isOpen={this.state.isPostFormModalOpen}
          onRequestClose={this.closePostFormModal.bind(this)}
        />
      </div>
    )
  }

}

export default connect()(Header)
