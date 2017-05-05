import React from 'react'
import UserInfo from '../components/user_info'

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

class UserPage extends React.PureComponent {
  onFollowClick(e) {
    e.preventDefault()
    this.props.follow()
  }

  onUnfollowClick(e) {
    e.preventDefault()
    this.props.unfollow()
  }

  render() {
    return (
      <div>
        <div style={{textAlign: 'center'}} >
          {this.props.userInfo.following ? (
            <div>
              <span style={{marginRight: 10}} >フォローしています</span>
              <a
                href='#'
                onClick={this.onUnfollowClick.bind(this)}
                style={styles.button}
              >
                Unfollow
              </a>
            </div>
          ) : (
            <div>
              <span style={{marginRight: 10}} >フォローしていません</span>
                <a
                  href='#'
                  onClick={this.onFollowClick.bind(this)}
                  style={styles.button}
                >
                  Follow
                </a>
            </div>
          )}
        </div>
        <UserInfo
          {...this.props.userInfo}
        />
      </div>
    )
  }
}
export default UserPage
