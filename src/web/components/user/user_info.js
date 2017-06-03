// @flow
import React from 'react'

type Props = {
  user: Object,
}

class UserInfo extends React.PureComponent {
  props: Props

  render() {
    const {user} = this.props
    return (
      <div style={styles.wrapper}>
        <div style={styles.row}>
          <h3 style={styles.rowItem}>{user.name}</h3>
        </div>
        <div style={styles.row}>
          <p style={styles.rowItem}>{user.profile}</p>
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

export default UserInfo
