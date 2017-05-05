import _ from 'lodash'
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Timeline from '../components/timeline'
import {fetchPosts} from '../../actions/post'
import {favorite, unfavorite} from '../../actions/favorite'

const mapStateToProps = (state) => ({
  posts: getPostsArray(state.posts.items),
  isFetching: state.posts.isFetching,
  error: state.posts.error,
})

const getPostsArray = (postsObj) => {
  return _.values(postsObj)
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({fetchPosts, favorite, unfavorite}, dispatch)
)

class TimelineContainer extends React.PureComponent {
  componentWillMount() {
    this.props.fetchPosts()
  }

  onTryAgainClick(e) {
    e.preventDefault()
    this.props.fetchPosts()
  }

  render() {
    const {
      posts,
      isFetching,
      error,
    } = this.props

    return (
      <div style={{margin: '0 25%'}}>
        <h2>Timeline</h2>
        {isFetching && <p>Now Loading...</p>}
        {error && (
          <div>
            <span>Failed to access server. </span>
            <a href='#' onClick={this.onTryAgainClick.bind(this)}>Try again</a>
          </div>
        )}
        <Timeline
          posts={posts}
          favorite={(post) => { this.props.favorite(post) }}
          unfavorite={(post) => { this.props.unfavorite(post) }}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelineContainer)
