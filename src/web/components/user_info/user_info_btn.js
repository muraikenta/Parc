import React from 'react'

class UserInfoBtn extends React.PureComponent {
  onClickHandler(e) {
    e.preventDefault()
    this.props.onClick()
  }
  render() {
    return (
      <a
        href='#'
        style={{...styles.button, ...this.props.style}}
        onClick={this.onClickHandler.bind(this)}
      >
        {this.props.text}
      </a>
    )
  }
}

const styles = {
  button: {
    position: 'relative',
    display: 'inline-block',
    padding: '0.25em 0.5em',
    textDecoration: 'none',
    color: '#fff',
    background: '#03A9F4',
    border: '1px solid #0f9ada',
    borderRadius: 4,
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)',
    textShadow: '0 1px 0 rgba(0,0,0,0.2)',
  },
}

export default UserInfoBtn
