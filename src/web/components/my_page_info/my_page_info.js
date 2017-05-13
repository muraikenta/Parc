import React from 'react'
import UserIcon from '../user_info/user_icon'
import UserInfoItems from '../user_info/user_info_items'

class MypageInfo extends React.PureComponent {
  render() {
    const userBtnProps = {
      text: 'プロフィール編集',
      onClick: (()=>{})
    }
    return (
      <div style={styles.wrapper}>
        <UserIcon {...this.props} />
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

export default MypageInfo
