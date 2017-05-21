import React from 'react'

class UserIcon extends React.PureComponent {
  render() {
    return (
      <img
        src={this.props.image ? this.props.image : '/images/default_user_icon.png'}
        style={styles.userIcon}
      />
    )
  }
}

const styles = {
  userIcon: {
    flex: 1,
    width: 200,
    height: 200,
    marginRight: 15,
    float: 'left',
  },
}

export default UserIcon
