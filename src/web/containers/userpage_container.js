import React from 'react'
import {connect} from 'react-redux'
import UserPage from '../components/userpage'
import {fetchUserInfo} from '../../actions/user_info'

const mapStateToProps = (state) => ({
  userInfo: state.userInfo.data,
  isFetching: state.userInfo.isFetching,
  error: state.userInfo.error,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUserInfo: () => {
    dispatch(fetchUserInfo(ownProps.match.params.id))
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
        <UserPage userInfo={userInfo} />
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
