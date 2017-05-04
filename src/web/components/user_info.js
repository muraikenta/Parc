import React from 'react'

const styles = {
  userIcon: {
    width: 200,
    height: 200,
  }
}

class UserInfo extends React.PureComponent {
  render() {
    return (
      <div>
        <img
          src={this.props.image ? this.props.image : '/images/default_user_icon.png'}
          style={styles.userIcon}
        />
        <p>{this.props.name}</p>
      </div>
    )
  }
}
export default UserInfo
