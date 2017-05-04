import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Timeline from '../components/timeline'
import {fetchPosts} from '../../actions/post'

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  isFetching: state.posts.isFetching,
  error: state.posts.error,
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({fetchPosts}, dispatch)
)

class TimelineContainer extends React.PureComponent {
  componentWillMount() {
    this.props.fetchPosts()
  }

  render() {
    const {
      posts,
      isFetching,
      error,
      fetchPosts,
    } = this.props

    const onTryAgainClick = (e) => {
      e.preventDefault()
      fetchPosts()
    }

    return (
      <div style={{textAlign: 'center'}}>
        <h2>Timeline</h2>
        {isFetching && <p>Now Loading...</p>}
        {error && (
          <div>
            <span>Failed to access server. </span>
            <a href='#' onClick={onTryAgainClick}>Try again</a>
          </div>
        )}
        <Timeline posts={posts} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelineContainer)
