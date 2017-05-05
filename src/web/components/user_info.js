import React from 'react'
import ReactMarkdown from 'react-markdown'

const styles = {
  wrapper: {
    margin: '0 25%',
  },
  userIcon: {
    width: 200,
    height: 200,
    marginRight: 15,
    float: 'left',
  },
  statusWrapper: {
    padding: 10,
  },
}

class UserInfo extends React.PureComponent {
  render() {
    return (
      <div style={styles.wrapper}>
        <div>
          <img
            src={this.props.image ? this.props.image : '/images/default_user_icon.png'}
            style={styles.userIcon}
          />
          <div style={styles.statusWrapper} >
            <h3>{this.props.name}</h3>
            <p>Tweets : 0</p>
            <p>Follows : 0</p>
            <p>Followers : 0</p>
          </div>
        </div>
        <h2>Profile</h2>
        <ReactMarkdown
          source={this.props.profile || 'Empty now'}
        />
      <h2>Tweets</h2>
      </div>
    )
  }
}
export default UserInfo
