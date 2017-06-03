// @flow
import React from 'react'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import {follow, unfollow} from '../../../actions/user'

type BtnProps = {
  onClick: () => void,
}

const FollowBtn = ({onClick}: BtnProps) => (
  <RaisedButton
    label='フォローする'
    primary={true}
    onClick={onClick}
  />
)

const UnfollowBtn = ({onClick}: BtnProps) => (
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

type Props = {
  user: Object,
  follow: () => void,
  unfollow: () => void,
}

const FollowBtnContainer = ({user, follow, unfollow}: Props) => (
  <div>
    {user.following ? (
      <UnfollowBtn onClick={unfollow} />
    ) : (
      <FollowBtn onClick={follow} />
    )}
  </div>
)

export default connect(null, mapDispatchToProps)(FollowBtnContainer)
