import React from 'react'
import UserInfo from '../../components/user_info/user_info'

const mapStateToProps = (state) => ({
  userInfo: state.userInfo.data,
  isFetching: state.userInfo.isFetching,
  error: state.userInfo.error,
  me: state.session.me,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUserInfo: () => {
    dispatch(fetchUserInfo(ownProps.match.params.id))
  },
  // follow: () => {
  //   dispatch(follow(ownProps.match.params.id))
  // },
  // unfollow: () => {
  //   dispatch(unfollow(ownProps.match.params.id))
  // },
})

class UserShowContainer extends React.PureComponent {
  componentWillMount() {
    if (this.props.fetchUserInfo) {
      this.props.fetchUserInfo()
    }
  }

  render() {
    const userInfoProps = this.props.isMyPage ? this.props.me : this.props.userInfo
    return (
      <div style={styles.wrapper}>
        <UserInfo
          userInfo={userInfoProps}
        />
      </div>
    )
  }
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
}

export default UserShowContainer
