import React from 'react'
import UserIcon from '../user_icon'
import UserInfoItems from './user_info_items'

class UserInfo extends React.PureComponent {
  render() {
    const {user} = this.props
    const userBtnProps = user.following ? ({
      text: 'フォローを外す',
      onClick: this.props.unfollow,
    }) : ({
      text: 'フォローする',
      onClick: this.props.follow,
    })
    return (
      <div style={styles.wrapper}>
        <UserIcon src={user.image} size={200} />
        <UserInfoItems {...this.props} userBtnProps={userBtnProps} />
      </div>
    )
  }
}

const styles = {
  wrapper: {
    display: 'flex',
  },
}

export default UserInfo
