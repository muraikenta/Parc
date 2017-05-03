import React from 'react'
import Post from '../components/post'

class Timeline extends React.PureComponent {
  render() {
    return (
      <ul>
        {this.props.posts.map((post) => (
          <Post
            key={post.id}
            {...post}
          />
        ))}
      </ul>
    )
  }
}

export default Timeline
