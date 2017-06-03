import React from 'react'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import {follow, unfollow} from '../../../actions/user'

const FollowBtn = ({onClick}) => (
  <RaisedButton
    label='フォローする'
    primary={true}
    onClick={onClick}
  />
)

const UnfollowBtn = ({onClick}) => (
  <RaisedButton
    label='フォロー解除'
    onClick={onClick}
  />
)

const mapDispatchToProps = (dispatch, ownProps) => ({
  follow: () => {
    dispatch(follow(ownProps.user.id))
  },
  unfollow: () => {
    dispatch(unfollow(ownProps.user.id))
  },
})

const FollowBtnContainer = ({user, follow, unfollow}) => (
  <div>
    {user.following ? (
      <UnfollowBtn onClick={unfollow} />
    ) : (
      <FollowBtn onClick={follow} />
    )}
  </div>
)

export default connect(null, mapDispatchToProps)(FollowBtnContainer)
