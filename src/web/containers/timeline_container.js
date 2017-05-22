// @flow
import _ from 'lodash'
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Timeline from '../components/timeline'
import {fetchPosts} from '../../actions/post'
import {favorite, unfavorite} from '../../actions/favorite'

const mapStateToProps = (state) => ({
  posts: getPostsArray(state.posts.items),
  error: state.posts.error,
})

const getPostsArray = (postsObj) => {
  return _.values(postsObj)
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({fetchPosts, favorite, unfavorite}, dispatch)
)

type Props = {
  posts: Object[],
  error: ?string,
  fetchPosts: () => void,
  favorite: () => void,
  unfavorite: () => void,
}

class TimelineContainer extends React.PureComponent {
  props: Props
  
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
      error,
    } = this.props

    return (
      <div style={{margin: '0 25%'}}>
        {error && (
          <div>
            <span>Failed to access server. </span>
            <a href='#' onClick={this.onTryAgainClick.bind(this)}>Try again</a>
          </div>
        )}
        <Timeline
          posts={posts}
          favorite={this.props.favorite}
          unfavorite={this.props.unfavorite}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimelineContainer)
