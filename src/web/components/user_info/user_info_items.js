import React from 'react'
import UserInfoBtn from './user_info_btn'

class UserInfoItems extends React.PureComponent {
  render() {
    const {userInfo} = this.props
    return (
      <div style={styles.wrapper} >
        <div style={styles.rows}>
          <h3 style={styles.rowsItem}>{userInfo.name}</h3>
          <UserInfoBtn style={styles.rowsItem} {...this.props.userBtnProps} />
        </div>
        <div style={styles.rows}>
          <p style={styles.rowsItem}>Tweets : {userInfo.tweetsCount}</p>
          <p style={styles.rowsItem}>Follows : {userInfo.followsCount}</p>
          <p style={styles.rowsItem}>Followers : {userInfo.followersCount}</p>
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
  rows: {
    display: 'flex',
    alignItems: 'center',
  },
  rowsItem: {
    margin: 10,
  },
}

export default UserInfoItems
