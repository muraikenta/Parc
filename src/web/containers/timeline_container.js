import React from 'react'
import {connect} from 'react-redux'
import Timeline from '../components/timeline'
import {fetchPosts} from '../../actions/post'

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  isFetching: state.posts.isFetching,
  error: state.posts.error,
})

class TimelineContainer extends React.PureComponent {
  componentWillMount() {
    const dispatch = this.props.dispatch
    dispatch(fetchPosts())
  }

  render() {
    const {
      posts,
      isFetching,
      error,
    } = this.props

    return (
      <div>
        {isFetching && <h1>Fetching!!</h1>}
        {error && <h1>{error}</h1>}
        <Timeline posts={posts} />
      </div>
    )
  }
}

export default connect(mapStateToProps)(TimelineContainer)
