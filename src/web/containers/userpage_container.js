import React from 'react'
import {connect} from 'react-redux'
import UserPage from '../components/userpage'
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
    dispatch(fetchUserInfo(ownProps.match.params.username))
  },
  follow: () => {
    dispatch(follow(ownProps.match.params.username))
  },
  unfollow: () => {
    dispatch(unfollow(ownProps.match.params.username))
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
        <UserPage
          userInfo={userInfo}
          follow={follow}
          unfollow={unfollow}
        />
      )
    })()

    return (
      <div>
        {displayContent}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPageContainer)
