import React from 'react'
import {connect} from 'react-redux'
import {
  fetchUserInfo,
  follow,
  unfollow,
} from '../../actions/user_info'
import UserInfo from '../components/user_info/user_info'

const mapStateToProps = (state) => ({
  user: state.user.data,
  error: state.user.error,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: () => {
    dispatch(fetchUserInfo(ownProps.match.params.username))
  },
  follow: () => {
    dispatch(follow(ownProps.match.params.username))
  },
  unfollow: () => {
    dispatch(unfollow(ownProps.match.params.username))
  },
})

class UserInfoContainer extends React.PureComponent {
  componentWillMount() {
    this.props.fetchUser()
  }

  render() {
    const {
      user,
      isFetching,
      error,
      follow,
      unfollow,
    } = this.props

    const displayContent = (() => {
      if (error) {
        return (
          <p>User Not Found</p>
        )
      }
      return (
        <UserInfo
          user={user}
          follow={follow}
          unfollow={unfollow}
        />
      )
    })()

    return (
      <div style={styles.wrapper}>
        {displayContent}
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

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoContainer)
