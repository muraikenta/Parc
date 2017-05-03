import React from 'react'
import {connect} from 'react-redux'
import Timeline from '../components/timeline'

const mapStateToProps = (state) => ({
  posts: state.posts,
})

class TimelineContainer extends React.PureComponent {
  componentDidMount() {
    const store = this.props.store
    // dispatch action to fetch post data
  }

  render() {
    return (
      <Timeline />
    )
  }
}

export default connect(mapStateToProps)(TimelineContainer)
