import React from 'react'
import Post from '../components/post'

const style = {
  display: 'flex',
  flexDirection: 'column',
  borderTop: '1px solid #e6ecf0',
}

class Timeline extends React.PureComponent {
  render() {
    return (
      <div style={style}>
        {this.props.posts.map((post) => (
          <Post
            key={post.id}
            {...post}
            favorite={() => { this.props.favorite(post) }}
            unfavorite={() => { this.props.unfavorite(post) }}
          />
        ))}
      </div>
    )
  }
}

export default Timeline
