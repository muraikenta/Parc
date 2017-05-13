import React from 'react'
import {connect} from 'react-redux'
import UserInfo from '../components/user_info/user_info'
import {
  fetchUserInfo,
  follow,
  unfollow,
} from '../../actions/user_info'

const mapStateToProps = (state) => ({
  userInfo: state.userInfo.data,
  isFetching: state.userInfo.isFetching,
  error: state.userInfo.error,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUserInfo: () => {
    dispatch(fetchUserInfo(ownProps.match.params.id))
  },
  follow: () => {
    dispatch(follow(ownProps.match.params.id))
  },
  unfollow: () => {
    dispatch(unfollow(ownProps.match.params.id))
  },
})

class UserPageContainer extends React.PureComponent {
  componentWillMount() {
    this.props.fetchUserInfo()
  }

  render() {
    const {
      userInfo,
      isFetching,
      error,
      follow,
      unfollow,
    } = this.props

    const displayContent = (() => {
      if (isFetching) {
        return (
          <p>Now Loading...</p>
        )
      }
      if (error) {
        return (
          <p>Not Found User</p>
        )
      }
      return (
        <UserInfo
          userInfo={userInfo}
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

export default connect(mapStateToProps, mapDispatchToProps)(UserPageContainer)
