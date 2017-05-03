import React from 'react'
import {connect} from 'react-redux'
import Timeline from '../components/timeline'

const mapStateToProps = (state) => ({
  posts: state.posts,
})

class TimelineContainer extends React.PureComponent {
  componentWillMount() {
    const dispatch = this.props.dispatch
    // dispatch action to fetch post data
  }

  render() {
    return (
      <Timeline />
    )
  }
}

export default connect(mapStateToProps)(TimelineContainer)
