import React from 'react'
import UserInfoBtn from './user_info_btn'

class UserInfoItems extends React.PureComponent {
  render() {
    const {user} = this.props
    return (
      <div style={styles.wrapper}>
        <div style={styles.row}>
          <h3 style={styles.rowItem}>{user.name}</h3>
          <UserInfoBtn style={styles.rowItem} {...this.props.userBtnProps} />
        </div>
        <div style={styles.row}>
          <p style={styles.rowItem}>投稿 : {user.postsCount}</p>
          <p style={styles.rowItem}>フォロー : {user.followingsCount}</p>
          <p style={styles.rowItem}>フォロワー : {user.followersCount}</p>
        </div>
      </div>
    )
  }
}

const styles = {
  wrapper: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
  },
  rowItem: {
    margin: 10,
  },
}

export default UserInfoItems
